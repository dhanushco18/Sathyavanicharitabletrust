/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/education',
        destination: '/programs/education',
        permanent: true,
      },
      {
        source: '/child-development',
        destination: '/programs/child-development',
        permanent: true,
      },
      {
        source: '/community-outreach',
        destination: '/programs/community-outreach',
        permanent: true,
      },
      {
        source: '/festivals',
        destination: '/programs/festival-support',
        permanent: true,
      },
      {
        source: '/programs/festivals',
        destination: '/programs/festival-support',
        permanent: true,
      },
      {
        source: '/environment',
        destination: '/programs/environment',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-of-use',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/about/founder',
        destination: '/founder',
        permanent: true,
      },
      {
        source: '/about/transparency',
        destination: '/impact',
        permanent: true,
      },
      {
        source: '/get-involved/volunteer',
        destination: '/volunteer',
        permanent: true,
      },
      {
        source: '/get-involved/sponsor',
        destination: '/sponsor',
        permanent: true,
      },
      {
        source: '/get-involved/partnerships',
        destination: '/partnerships',
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://images.unsplash.com",
              "font-src 'self' data:",
              "connect-src 'self' https://*.supabase.co https://resend.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
