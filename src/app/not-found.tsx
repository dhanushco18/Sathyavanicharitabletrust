import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-canvas py-16">
      <Container size="narrow" className="text-center space-y-6">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-terracotta bg-brand-terracotta-soft px-3 py-1 rounded-full">
          Error 404
        </span>

        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900">
          Page Not Found
        </h1>

        <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist or has been relocated as part of our
          platform architecture upgrade.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="primary" href="/" icon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button variant="outline" href="/programs/education">
            Explore Free Education
          </Button>
        </div>
      </Container>
    </div>
  );
}
