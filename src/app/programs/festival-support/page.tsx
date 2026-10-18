import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  Gift,
  Shirt,
  BookOpen,
  Calendar,
  CheckCircle2,
  Info,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DIWALI_GROWTH_HISTORY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Festival Support — Annual Diwali Gift Initiative | Sathiyavani Trust",
  description:
    "Delivering festive clothing, sweet boxes, and learning stationery to underprivileged children and families each Diwali across Chennai.",
};

export default function FestivalSupportPage() {
  const breadcrumbItems = [
    { label: "Programmes", href: "/programs" },
    { label: "Festival Support" },
  ];

  const kitContents = [
    {
      icon: <Shirt className="w-5 h-5 text-brand-terracotta" />,
      title: "New Festive Clothing",
      description: "Brand-new traditional attire tailored for every enrolled child.",
    },
    {
      icon: <Gift className="w-5 h-5 text-brand-amber" />,
      title: "Traditional Sweets & Savouries",
      description: "Festive snack boxes shared with the child's entire household.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-brand-navy" />,
      title: "Academic Stationery Kits",
      description: "Notebook sets, pens, geometry boxes, and drawing supplies for school.",
    },
  ];

  return (
    <div className="bg-brand-canvas min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-brand-muted/70 border-b border-slate-200">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="amber" size="md">
                Annual Tradition
              </Badge>
              <Badge variant="navy" size="md">
                Festive Dignity
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              The Diwali Gift Initiative: Delivering Light and Dignity
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every Diwali, we distribute comprehensive gift packages containing new clothes,
              sweets, and essential school supplies to ensure children from low-income communities
              experience the festival with joy and equality.
            </p>
          </div>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Annual Event</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Diwali Festival Season
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">2024 Documented Total</span>
              <span className="font-heading text-sm font-bold text-brand-navy block mt-0.5">
                1,000 Beneficiaries
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Package Contents</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Clothes, Sweets & Books
              </span>
            </div>
            <div className="p-3.5 bg-brand-canvas rounded-xl border border-slate-200/80">
              <span className="text-xs text-slate-500 font-medium block">Target Communities</span>
              <span className="font-heading text-sm font-bold text-slate-900 block mt-0.5">
                Roadside & Tribal Homes
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Editorial Body */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  Cultural Inclusion
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Why Festive Support Matters to Underprivileged Children
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Festivals are moments when economic disparities feel most acute for children.
                  While their peers wear vibrant new clothing and share sweets, children in
                  financially vulnerable homes often feel excluded.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  The Diwali Gift Initiative began in 2019 when Mr. Raghu pooled personal savings to
                  distribute sweets and clothes to 20 children on roadside platforms. Over the years,
                  with community support, this initiative has expanded into a major annual drive
                  bringing festive warmth to hundreds of homes.
                </p>
              </div>

              {/* Kit Contents */}
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  What an Individual Diwali Gift Kit Contains
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {kitContents.map((item, idx) => (
                    <div key={idx} className="p-4 bg-brand-canvas rounded-xl border border-slate-200/80">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-3 shadow-xs">
                        {item.icon}
                      </div>
                      <h4 className="font-heading text-sm font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Historical Growth Table */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      Documented Beneficiary Progression (2019 – 2025)
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Based on physical distribution ledgers recorded at each festival campaign.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-brand-muted px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
                    <Info className="w-4 h-4 text-brand-navy" />
                    <span>Physical Ledgers Audit</span>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-brand-navy text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4 font-semibold">Year</th>
                        <th className="py-3 px-4 font-semibold">Gift Kits Distributed</th>
                        <th className="py-3 px-4 font-semibold">Distribution Milestone / Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {DIWALI_GROWTH_HISTORY.map((row) => (
                        <tr
                          key={row.year}
                          className={row.year === "2025" ? "bg-amber-50/50" : "hover:bg-slate-50"}
                        >
                          <td className="py-3.5 px-4 font-heading font-bold text-slate-900">
                            {row.year}
                          </td>
                          <td className="py-3.5 px-4 font-mono font-bold text-brand-navy">
                            {row.count}
                          </td>
                          <td className="py-3.5 px-4 text-xs">
                            <span className="inline-flex items-center gap-1.5">
                              {row.year === "2025" ? (
                                <span className="text-amber-800 font-medium">
                                  Provisional mobilization target (In planning)
                                </span>
                              ) : (
                                <>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>{row.status}</span>
                                </>
                              )}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Audit & Data Governance Notice */}
                <div className="p-4 bg-brand-muted/70 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <span className="font-bold text-slate-900 block">
                    * Data Governance & Audit Disclosure:
                  </span>
                  <p>
                    Historical counts reflect logged distribution kits handed out in physical drives.
                    The 2025 total is an active community target, and figures for 2026 will be
                    published strictly after verified distribution registers are audited.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Festive Sponsorship Action */}
            <div className="lg:col-span-4 space-y-6">
              <Card variant="elevated" className="p-6 sm:p-7 border-brand-amber/40 overflow-hidden card-glow-hover">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-brand-navy-dark shadow-inner">
                  <Image
                    src="/assets/images/diwali-distribution.jpg"
                    alt="Diwali gift kits distributed to children and families in Chennai"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-amber block mb-2">
                  Festive Support
                </span>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                  Sponsor a Child's Diwali Kit
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Help us bring light and dignity to another household. An individual Diwali package
                  costs approximately ₹1,000 for brand-new clothes, sweets, and stationery.
                </p>
                <Button variant="primary" size="md" href="/sponsor" className="w-full justify-center">
                  Inquire About Festival Kits
                </Button>
              </Card>

              {/* Group / Corporate Drives */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3">
                <h4 className="font-heading text-base font-bold text-slate-900 flex items-center gap-2">
                  <Gift className="w-4 h-4 text-brand-terracotta" />
                  <span>Corporate Festive Drives</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Companies and employee resource groups can sponsor batches of 25, 50, or 100
                  Diwali gift kits as part of annual festive giving.
                </p>
                <Link
                  href="/partnerships"
                  className="text-xs font-bold text-brand-navy hover:text-brand-terracotta transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>Corporate Giving Inquiries</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
