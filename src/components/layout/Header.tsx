"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, Heart } from "lucide-react";
import { MAIN_NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md border-b",
          isScrolled ? "border-slate-200 shadow-sm py-2.5" : "border-slate-100 py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-brand-navy rounded-lg p-1 -ml-1 shrink-0"
              aria-label="Sathiyavani Charitable Trust - Return to Homepage"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                <Image
                  src="/assets/brand/logo.png"
                  alt="Sathiyavani Charitable Trust Emblem"
                  fill
                  sizes="48px"
                  className="object-contain transition-transform group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-brand-navy leading-none">
                  Sathiyavani
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-brand-terracotta tracking-wider uppercase mt-1">
                  Charitable Trust
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {MAIN_NAV_ITEMS.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isActive =
                  pathname === item.href ||
                  (item.children && item.children.some((child) => pathname === child.href));

                if (hasChildren) {
                  const isOpen = activeDropdown === item.label;

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        type="button"
                        className={cn(
                          "inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors",
                          isActive
                            ? "text-brand-navy bg-brand-navy-soft"
                            : "text-slate-700 hover:text-brand-navy hover:bg-slate-50",
                          isOpen && "text-brand-navy bg-slate-50"
                        )}
                        aria-expanded={isOpen}
                        onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200 text-slate-400",
                            isOpen && "rotate-180 text-brand-navy"
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isOpen && (
                        <div
                          className="absolute left-0 top-full pt-2 w-72 z-50 animate-fade-in"
                          role="menu"
                        >
                          <div className="bg-white rounded-xl shadow-dropdown border border-slate-200 p-2 space-y-1">
                            {item.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                className={cn(
                                  "block px-3.5 py-2.5 rounded-lg text-left transition-colors",
                                  pathname === child.href
                                    ? "bg-brand-navy-soft text-brand-navy font-semibold"
                                    : "hover:bg-slate-50 text-slate-800"
                                )}
                              >
                                <div className="text-sm font-bold">{child.label}</div>
                                {child.description && (
                                  <div className="text-xs text-slate-500 font-normal line-clamp-1 mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors",
                      isActive
                        ? "text-brand-navy bg-brand-navy-soft"
                        : "text-slate-700 hover:text-brand-navy hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick Call Button (Tablet/Desktop) */}
              <a
                href={`tel:${SITE_CONFIG.rawPhone}`}
                className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-brand-navy px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                title="Direct Phone Contact"
              >
                <Phone className="w-3.5 h-3.5 text-brand-navy" aria-hidden="true" />
                <span>{SITE_CONFIG.phone}</span>
              </a>

              {/* Primary Support Action */}
              <Button
                variant="primary"
                size="sm"
                href="/get-involved/sponsor"
                icon={<Heart className="w-4 h-4 fill-white/20" />}
                className="hidden sm:inline-flex"
              >
                Support Our Work
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 -mr-1 rounded-xl text-slate-700 hover:text-brand-navy hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-brand-navy min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={MAIN_NAV_ITEMS}
      />
    </>
  );
}
