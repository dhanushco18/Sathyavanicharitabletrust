interface RateLimitRecord {
  count: number;
  resetAt: number;
}

interface IdempotencyRecord {
  trackingId: string;
  expiresAt: number;
}

// In-memory sliding window stores (Suitable for serverless / single-instance Node)
const rateLimitStore = new Map<string, RateLimitRecord>();
const idempotencyStore = new Map<string, IdempotencyRecord>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // Max 5 submissions per window per IP
const IDEMPOTENCY_TTL_MS = 2 * 60 * 1000; // 2 minutes duplicate window

/**
 * Checks if client identifier has exceeded submission rate limit
 */
export function checkRateLimit(clientId: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(clientId);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(clientId, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - record.count };
}

/**
 * Generates deterministic idempotency hash to prevent duplicate submissions.
 * Edge-compatible pure JS implementation that runs on Cloudflare Workers, Edge runtime and Node.
 */
export function generateSubmissionHash(payload: {
  phone: string;
  email?: string | null;
  message: string;
  type: string;
}): string {
  const normalized = `${payload.type.toLowerCase()}:${payload.phone.replace(/[^0-9]/g, "")}:${(payload.email || "").toLowerCase().trim()}:${payload.message.trim()}`;
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < normalized.length; i++) {
    const ch = normalized.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const hashVal = 4294967296 * (2097151 & h2) + (h1 >>> 0);
  return hashVal.toString(16).padStart(16, "0");
}

export function checkIdempotency(hash: string): string | null {
  const now = Date.now();
  const record = idempotencyStore.get(hash);
  if (record && now < record.expiresAt) {
    return record.trackingId;
  }
  return null;
}

export function recordIdempotency(hash: string, trackingId: string): void {
  idempotencyStore.set(hash, {
    trackingId,
    expiresAt: Date.now() + IDEMPOTENCY_TTL_MS,
  });
}
