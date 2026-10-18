"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to diagnostic monitor without leaking PII
    console.error("Runtime exception caught by GlobalError boundary:", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-canvas py-16 px-4">
      <Container size="narrow" className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 border border-rose-200">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-100/70 px-3 py-1 rounded-full">
            System Notice
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
            Something Went Wrong
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            Our platform encountered an unexpected runtime condition. Rest assured that no data was lost.
            You may attempt to reload the view or return to our homepage.
          </p>
        </div>

        {error.digest && (
          <p className="text-[11px] font-mono text-slate-400">
            Reference Incident Token: <span className="font-bold text-slate-600">{error.digest}</span>
          </p>
        )}

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            onClick={() => reset()}
            icon={<RotateCcw className="w-4 h-4" />}
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            href="/"
            icon={<Home className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>
        </div>

        <div className="pt-6 border-t border-slate-200/80 text-xs text-slate-500">
          For urgent community assistance, contact trust leadership directly at{" "}
          <a
            href="tel:+919841454501"
            className="font-bold text-brand-navy hover:underline inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3 inline" /> +91 98414 54501
          </a>
        </div>
      </Container>
    </div>
  );
}
