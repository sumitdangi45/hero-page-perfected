import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV = [
  { label: "Prebuilt", to: "/prebuilt" },
  { label: "Customized", to: "/customized" },
  { label: "AI Automation", to: "/ai-automation" },
  { label: "Digital Growth", to: "/digital-growth" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact Us", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden="true">
            <path d="M16 2.5 29.5 28H2.5Z" fill="oklch(0.4 0.115 162)" />
            <path d="M16 13.5 21.8 24H10.2Z" fill="oklch(0.985 0.005 155)" />
          </svg>
          <span className="leading-none">
            <span className="block text-[1.35rem] font-extrabold tracking-tight text-brand-ink">
              Anni
            </span>
            <span className="mt-0.5 block text-[8.5px] font-semibold tracking-[0.14em] text-muted-foreground">
              WEB SOLUTIONS PVT. LTD.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="site-nav-link"
              activeProps={{ className: "site-nav-link-active" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-brand hidden px-5 py-2.5 text-sm sm:inline-flex">
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-brand-ink lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-ink hover:bg-mint"
              activeProps={{ className: "font-bold text-brand" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-brand mt-2 w-full px-5 py-2.5 text-sm sm:hidden"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}
