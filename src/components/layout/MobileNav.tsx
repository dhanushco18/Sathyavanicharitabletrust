"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, MessageSquare, Heart } from "lucide-react";
import { NavItem } from "@/lib/types";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("Programmes");

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Dimmed Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
        {/* Top Bar with Brand & Close Button */}
        <div>
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/assets/brand/logo.png"
                  alt="Sathiyavani Trust"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-extrabold text-brand-navy text-base">
                Sathiyavani Trust
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 -mr-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-brand-navy min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close mobile navigation"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Accordion List */}
          <nav className="p-4 space-y-1" aria-label="Mobile Menu Links">
            {items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = expandedSection === item.label;

              if (hasChildren) {
                return (
                  <div key={item.label} className="border-b border-slate-100 py-1">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedSection(isExpanded ? null : item.label)
                      }
                      className="w-full flex items-center justify-between py-3 px-2 text-base font-bold text-slate-900 rounded-lg hover:bg-slate-50 min-h-[48px]"
                      aria-expanded={isExpanded}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-slate-400 transition-transform duration-200",
                          isExpanded && "rotate-180 text-brand-navy"
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-3 pr-2 py-1 space-y-1 mb-2 bg-slate-50/80 rounded-xl">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="block py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-navy hover:bg-white transition-colors min-h-[44px]"
                          >
                            <div className="font-semibold text-slate-900">{child.label}</div>
                            {child.description && (
                              <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center py-3.5 px-2 text-base font-bold text-slate-900 rounded-lg hover:bg-slate-50 border-b border-slate-100 min-h-[48px]"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="p-4 sm:p-5 bg-brand-muted/70 border-t border-slate-200 space-y-3">
          <Button
            variant="primary"
            size="md"
            href="/get-involved/sponsor"
            icon={<Heart className="w-4 h-4 fill-white/20" />}
            className="w-full justify-center"
            onClick={onClose}
          >
            Support Our Work
          </Button>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={`tel:${SITE_CONFIG.rawPhone}`}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-brand-navy bg-white border border-slate-200 rounded-xl shadow-xs min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-brand-navy shrink-0" aria-hidden="true" />
              <span>Call Us</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#128C7E] bg-white border border-slate-200 rounded-xl shadow-xs min-h-[44px]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          <p className="text-[11px] text-center text-slate-500 pt-1">
            Grassroots Non-Profit Organization, Chennai
          </p>
        </div>
      </div>
    </div>
  );
}
