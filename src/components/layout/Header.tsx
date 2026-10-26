"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Heart, Search, X, ArrowRight } from "lucide-react";
import { NavItem } from "@/lib/types";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const { t, isTamil, trans } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  // Focus input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close desktop dropdown and search on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Dynamic bilingual navigation items
  const navItems: NavItem[] = useMemo(() => {
    return [
      {
        label: t("navAbout"),
        href: "/about",
        children: [
          {
            label: t("navAboutTrust"),
            href: "/about",
            description: trans(
              "Our origins, core values, and community roots.",
              "எமது தோற்றம், அடிப்படை மாண்புகள் மற்றும் மக்கள் தொண்டு."
            ),
          },
          {
            label: t("navFounder"),
            href: "/founder",
            description: trans(
              "Mr. Raghu N.'s journey from roadside tutoring.",
              "திரு. ரகு அவர்களின் சாலையோர வகுப்புகளிலிருந்து தொடங்கிய பயணம்."
            ),
          },
          {
            label: t("navMission"),
            href: "/mission",
            description: trans(
              "Commitment to education, inclusion, and care.",
              "கல்வி, சமூக சமத்துவம் மற்றும் அரவணைப்பிற்கான உறுதிமொழி."
            ),
          },
          {
            label: t("navVision"),
            href: "/vision",
            description: trans(
              "Long-term goals for children and communities.",
              "குழந்தைகள் மற்றும் சமூகத்திற்கான நீண்டகால தொலைநோக்கு."
            ),
          },
        ],
      },
      {
        label: t("navPrograms"),
        href: "/programs",
        children: [
          {
            label: t("navAllPrograms"),
            href: "/programs",
            description: trans(
              "Explore all core community & educational initiatives.",
              "அனைத்து கல்வி மற்றும் மக்கள் நலப்பணிகளையும் காண்க."
            ),
          },
          {
            label: t("navEducation"),
            href: "/programs/education",
            description: trans(
              "Daily after-school tuition and fee assistance.",
              "தினசரி மாலை நேர பயிற்சி மற்றும் பள்ளி கட்டண உதவி."
            ),
          },
          {
            label: t("navChildDev"),
            href: "/programs/child-development",
            description: trans(
              "Birthdays, sports coaching, and arts.",
              "குழந்தைகளுக்கான விளையாட்டு, கலைகள் மற்றும் நல்வாழ்வு."
            ),
          },
          {
            label: t("navOutreach"),
            href: "/programs/community-outreach",
            description: trans(
              "Support for vulnerable families.",
              "விளிம்புநிலை மற்றும் ஏழை குடும்பங்களுக்கான நேரடி ஆதரவு."
            ),
          },
          {
            label: t("navFestival"),
            href: "/programs/festival-support",
            description: trans(
              "Annual Diwali Joy clothing drives.",
              "ஆண்டுதோறும் புதிய ஆடைகள் வழங்கும் தீபாவளி மகிழ்ச்சி."
            ),
          },
          {
            label: t("navEnvironment"),
            href: "/programs/environment",
            description: trans(
              "Tree planting with Exnora.",
              "மரக்கன்றுகள் நடுதல் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வு."
            ),
          },
        ],
      },
      {
        label: t("navGetInvolved"),
        href: "/get-involved",
        children: [
          {
            label: t("navVolunteer"),
            href: "/volunteer",
            description: trans(
              "Tutor students, coordinate sports, mentor youth.",
              "பாடங்கள் கற்பிக்க, விளையாட்டுகளை வழிநடத்த இணையுங்கள்."
            ),
          },
          {
            label: t("navSponsor"),
            href: "/sponsor",
            description: trans(
              "Fund school fees, books, and educational kits.",
              "மாணவர்களின் கல்வி, புத்தகங்கள் மற்றும் கட்டணத்தை ஏற்றுக்கொள்ளுங்கள்."
            ),
          },
          {
            label: t("navPartnerships"),
            href: "/partnerships",
            description: trans(
              "Align CSR allocations with outcomes.",
              "நிறுவன CSR நிதி மூலம் நிலையான மாற்றத்தை ஏற்படுத்துங்கள்."
            ),
          },
        ],
      },
      {
        label: t("navImpact"),
        href: "/impact",
      },
      {
        label: t("navStories"),
        href: "/stories",
      },
      {
        label: t("navContact"),
        href: "/contact",
      },
    ];
  }, [t, trans]);

  const quickSearchLinks = [
    {
      label: trans("Free Tuition & Education", "இலவச கல்வி மற்றும் மாலை பயிற்சி"),
      href: "/programs/education",
      tag: trans("Program", "திட்டம்"),
    },
    {
      label: trans("Child Development & Care", "குழந்தை வளர்ச்சி மற்றும் நலவாழ்வு"),
      href: "/programs/child-development",
      tag: trans("Program", "திட்டம்"),
    },
    {
      label: trans("Community Outreach", "சமூக உதவி & நலம்"),
      href: "/programs/community-outreach",
      tag: trans("Program", "திட்டம்"),
    },
    {
      label: trans("Diwali Joy Distribution", "தீபாவளி மகிழ்ச்சி புத்தாடைகள்"),
      href: "/programs/festival-support",
      tag: trans("Drive", "நற்பணி"),
    },
    {
      label: trans("Verified Social Impact", "நேரடி சமூக தாக்கம்"),
      href: "/impact",
      tag: trans("Audit", "சான்று"),
    },
    {
      label: trans("Sponsor a Student", "மாணவருக்கு ஆதரவளியுங்கள்"),
      href: "/sponsor",
      tag: trans("Involved", "பங்கேற்பு"),
    },
  ];

  const filteredLinks = searchQuery.trim()
    ? quickSearchLinks.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : quickSearchLinks;

  // Hide public consumer header on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md border-b",
          isScrolled ? "border-slate-200 shadow-sm py-2" : "border-slate-100 py-3"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            {/* Brand Logo & Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-brand-navy rounded-lg p-1 -ml-1 shrink-0"
              aria-label="Sathiyavani Charitable Trust - Return to Homepage"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
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
                <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                  {t("brandName")}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight mt-0.5">
                  {t("brandSubtitle")}
                </span>
                <span className="text-[9px] text-slate-500 font-medium tracking-tight mt-0.5 hidden xs:inline-block">
                  {t("brandTagline")}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden xl:flex items-center justify-center gap-0.5 2xl:gap-1 min-w-0"
              aria-label="Main Navigation"
            >
              {/* Explicit Home Link on ultra-wide screens */}
              <Link
                href="/"
                className={cn(
                  "hidden 2xl:inline-flex relative px-2 2xl:px-3 py-1.5 2xl:py-2 text-xs 2xl:text-sm font-bold transition-colors whitespace-nowrap",
                  pathname === "/"
                    ? "text-amber-600 after:absolute after:bottom-0 after:left-2 after:right-2 2xl:after:left-3 2xl:after:right-3 after:h-0.5 after:bg-amber-500 after:rounded-full"
                    : "text-slate-700 hover:text-slate-950"
                )}
              >
                {t("navHome")}
              </Link>

              {navItems.map((item) => {
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
                      <Link
                        href={item.href}
                        className={cn(
                          "relative inline-flex items-center gap-0.5 px-1.5 2xl:px-2.5 py-1.5 2xl:py-2 text-xs 2xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap",
                          isActive
                            ? "text-amber-600 after:absolute after:bottom-0 after:left-1.5 after:right-1.5 2xl:after:left-2.5 2xl:after:right-2.5 after:h-0.5 after:bg-amber-500 after:rounded-full"
                            : "text-slate-700 hover:text-slate-950 hover:bg-slate-50/80",
                          isOpen && "text-slate-950 bg-slate-50"
                        )}
                        aria-expanded={isOpen}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-3 h-3 transition-transform duration-200 text-slate-400",
                            isOpen && "rotate-180 text-slate-700"
                          )}
                          aria-hidden="true"
                        />
                      </Link>

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
                                onClick={() => setActiveDropdown(null)}
                                className={cn(
                                  "block px-3.5 py-2.5 rounded-lg text-left transition-colors",
                                  pathname === child.href
                                    ? "bg-amber-50/80 text-amber-900 font-semibold"
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
                      "relative px-1.5 2xl:px-2.5 py-1.5 2xl:py-2 text-xs 2xl:text-sm font-semibold transition-colors whitespace-nowrap",
                      isActive
                        ? "text-amber-600 after:absolute after:bottom-0 after:left-1.5 after:right-1.5 2xl:after:left-2.5 2xl:after:right-2.5 after:h-0.5 after:bg-amber-500 after:rounded-full"
                        : "text-slate-700 hover:text-slate-950"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action & Search & Donate Button */}
            <div className="flex items-center gap-1.5 sm:gap-2 2xl:gap-2.5 shrink-0">
              {/* Search Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-brand-navy"
                aria-label={t("searchInitiatives")}
                title={t("searchInitiatives")}
              >
                <Search className="w-4 h-4" aria-hidden="true" />
              </button>

              {/* Language Selector */}
              <div className="hidden sm:block shrink-0">
                <LanguageSwitcher />
              </div>

              {/* Donate Now Button */}
              <Link
                href="/sponsor"
                className="inline-flex items-center gap-1 px-3 py-1.5 2xl:px-4 2xl:py-2 rounded-full text-white font-bold text-xs 2xl:text-sm bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-sm hover:shadow transition-all duration-200 shrink-0 whitespace-nowrap"
              >
                <Heart className="w-3.5 h-3.5 fill-white text-white shrink-0" aria-hidden="true" />
                <span>{trans("Donate Now", "நிதியுதவி")}</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="xl:hidden p-2 -mr-1 rounded-xl text-slate-700 hover:text-brand-navy hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-brand-navy min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-4 sm:px-6 lg:px-8 z-50 animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-md"
                  aria-label={t("actionClose")}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search Suggestions */}
              <div className="mt-3 divide-y divide-slate-100 max-h-60 overflow-y-auto">
                {filteredLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center justify-between py-2 px-2 hover:bg-slate-50 rounded-lg group text-sm"
                  >
                    <span className="font-medium text-slate-800 group-hover:text-amber-600 transition-colors">
                      {link.label}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 group-hover:text-amber-600">
                      <span className="text-[10px] font-semibold uppercase bg-slate-100 group-hover:bg-amber-100 px-2 py-0.5 rounded text-slate-600 group-hover:text-amber-800">
                        {link.tag}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={navItems}
      />
    </>
  );
}
