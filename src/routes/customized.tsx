import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Code2,
  Cog,
  FolderKanban,
  GitBranch,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  Mail,
  MessageSquareText,
  Package,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { FeaturedWork } from "@/components/featured-work";

export const Route = createFileRoute("/customized")({
  head: () => ({
    meta: [
      { title: "Custom Software Development — Anni Web Solutions" },
      {
        name: "description",
        content:
          "Custom websites, web applications, mobile apps and SaaS platforms built around your unique business goals.",
      },
      { property: "og:title", content: "Custom Software Development — Anni Web Solutions" },
      {
        property: "og:description",
        content:
          "Custom websites, web applications, mobile apps and SaaS platforms built around your unique business goals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CustomizedPage,
});

const FEATURES = [
  { icon: Zap, label: "Tailored Solutions" },
  { icon: Layers, label: "Scalable Architecture" },
  { icon: ShieldCheck, label: "Secure & Reliable" },
  { icon: Users, label: "Dedicated Team" },
];

const CHIPS = [
  { icon: LayoutGrid, label: "Strategize", tone: "chip-ico-green", offset: "sm:mr-0" },
  { icon: Cog, label: "Develop", tone: "chip-ico-blue", offset: "sm:mr-6" },
  { icon: Rocket, label: "Scale", tone: "chip-ico-purple", offset: "sm:mr-12" },
];

const STATS = [
  { icon: Package, value: "100+", label: "Custom Projects" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Star, value: "4.9/5", label: "Client Satisfaction" },
  { icon: Clock, value: "On-Time", label: "Delivery" },
];

const LOGOS = [
  { name: "TATA", className: "text-2xl font-extrabold tracking-tight" },
  { name: "Reliance", className: "text-xl font-semibold" },
  { name: "BYJU'S", className: "text-xl font-extrabold italic" },
  { name: "OLA", className: "text-2xl font-black tracking-wide" },
  { name: "meesho", className: "text-xl font-semibold lowercase" },
  { name: "Flipkart", className: "text-xl font-bold italic" },
];

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FolderKanban, label: "Projects", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Mail, label: "Messages", active: false },
  { icon: GitBranch, label: "Deployments", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const RECENT = [
  { icon: FolderKanban, name: "E-commerce Platform", status: "In Progress", tone: "mock-badge-amber" },
  { icon: LayoutGrid, name: "SaaS Dashboard", status: "Completed", tone: "mock-badge-green" },
  { icon: Rocket, name: "Mobile Application", status: "Pending", tone: "mock-badge-slate" },
];

function CustomizedPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-mint font-sans text-brand-ink">
      <main>

        <section className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:pt-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
            <HeroCopy />
            <HeroVisual />
          </div>
        </section>
        <StatsBar />
        <TrustedBy />
        <FeaturedWork />
        <CtaBanner />
      </main>
    </div>
  );
}

function HeroCopy() {
  return (
    <div>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 text-[13px] font-semibold text-brand-ink shadow-sm">
        <Code2 className="h-4 w-4 text-brand" />
        Custom Development
      </span>
      <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem]">
        <span className="text-brand-ink">Custom Software,</span>
        <span className="block text-brand">Built Around Your Business</span>
      </h1>
      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
        Turn your ideas into powerful digital solutions. We design and develop custom websites, web
        applications, mobile apps and SaaS platforms tailored to your unique business goals.
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Link to="/contact" className="btn-brand px-6 py-3 text-sm">
          Get a Free Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/contact" className="btn-outline px-6 py-3 text-sm">
          <MessageSquareText className="h-4 w-4 text-brand" />
          Discuss Your Idea
        </Link>
      </div>
      <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
        {FEATURES.map((f) => (
          <div key={f.label} className="flex items-center gap-2">
            <f.icon className="h-[18px] w-[18px] text-brand" />
            <span className="text-sm font-medium">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-2xl pt-8 lg:pt-4">
      <div className="hero-blob absolute left-1/2 top-1/2 h-[95%] w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="sticky-note absolute left-0 top-0 z-20 rotate-[-7deg] rounded-md px-4 py-2 font-hand text-xl leading-tight sm:left-6 sm:text-2xl">
        Your Idea <span className="inline-block">↗</span>
        <br />
        Our Expertise
      </div>

      <div className="absolute -top-6 right-0 z-20 hidden rotate-[5deg] text-center font-hand text-2xl leading-[1.05] sm:block">
        Transform
        <br />
        Ideas into
        <br />
        Impact
        <svg
          viewBox="0 0 60 56"
          className="mx-auto mt-1 h-10 w-10 text-brand-ink"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M48 4 C 34 14, 22 28, 16 46" />
          <path d="M8 38 L15 48 L24 40" />
        </svg>
      </div>

      <div className="relative z-10 mt-6">
        <div className="laptop-frame rounded-t-[18px] p-2 pb-0 sm:p-2.5 sm:pb-0">
          <div className="laptop-screen aspect-[16/10] overflow-hidden rounded-t-[10px]">
            <DashboardMockup />
          </div>
        </div>
        <div className="laptop-base mx-auto h-3 w-[106%] -translate-x-[2.8%] rounded-b-xl" />
      </div>

      <div className="absolute -right-1 top-24 z-20 flex flex-col gap-3 sm:-right-4 sm:top-28">
        {CHIPS.map((c) => (
          <div
            key={c.label}
            className={`float-chip flex items-center gap-2.5 rounded-xl py-2 pl-2 pr-4 ${c.offset}`}
          >
            <span className={`chip-ico ${c.tone}`}>
              <c.icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold">{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="flex h-full w-full">
      <aside className="mock-sidebar flex w-[27%] flex-col gap-2 p-3">
        <div className="flex items-center gap-1.5 px-1 pb-1.5">
          <svg viewBox="0 0 32 32" className="h-3.5 w-3.5" aria-hidden="true">
            <path d="M16 3 29 27H3Z" fill="oklch(0.72 0.15 160)" />
            <path d="M16 14 21 23H11Z" fill="oklch(0.185 0.03 258)" />
          </svg>
          <span className="text-[10px] font-bold mock-dim">Anni</span>
        </div>
        {SIDEBAR_ITEMS.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-1.5 rounded-md px-1.5 py-1 ${item.active ? "mock-chip-bg" : ""}`}
          >
            <item.icon className={`h-2.5 w-2.5 ${item.active ? "mock-accent" : "mock-faint"}`} />
            <span
              className={`text-[8px] ${item.active ? "font-semibold mock-accent" : "mock-dim"}`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </aside>

      <div className="flex-1 p-2.5">
        <div className="flex items-center gap-2">
          <div className="mock-card flex h-5 flex-1 items-center gap-1.5 rounded-md px-1.5">
            <Search className="mock-faint h-2.5 w-2.5" />
            <span className="text-[7px] mock-faint">Search projects, features...</span>
          </div>
          <div className="mock-avatar h-4 w-4 rounded-full" />
        </div>

        <div className="mt-3">
          <p className="text-[11px] font-bold">Good Morning,</p>
          <p className="text-[8.5px] mock-dim">Let&apos;s build something great!</p>
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-2">
          <div className="mock-card rounded-md p-1.5">
            <p className="text-[6.5px] mock-dim">Total Projects</p>
            <p className="text-[13px] font-bold">12</p>
            <p className="text-[5.5px] leading-[1.4] mock-faint">
              Your Vision,
              <br />
              Our Code,
              <br />
              Real Impact
            </p>
          </div>
          <div className="mock-card rounded-md p-1.5">
            <p className="text-[6.5px] mock-dim">Active</p>
            <p className="text-[13px] font-bold">8</p>
          </div>
          <div className="mock-card rounded-md p-1.5">
            <p className="text-[6.5px] mock-dim">Deployed</p>
            <p className="text-[13px] font-bold">10</p>
          </div>
        </div>

        <div className="mock-card mt-2 h-16 rounded-md p-1.5">
          <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mockChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.14 160)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="oklch(0.72 0.14 160)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 46 L20 38 L40 42 L60 30 L80 35 L100 22 L120 28 L140 15 L160 21 L180 8 L200 14 L200 60 L0 60 Z"
              fill="url(#mockChartFill)"
            />
            <path
              d="M0 46 L20 38 L40 42 L60 30 L80 35 L100 22 L120 28 L140 15 L160 21 L180 8 L200 14"
              fill="none"
              stroke="oklch(0.78 0.15 160)"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="mt-2.5">
          <p className="text-[8.5px] font-semibold">Recent Projects</p>
          {RECENT.map((p) => (
            <div key={p.name} className="mt-2 flex items-center gap-1.5">
              <span className="mock-ico flex h-3.5 w-3.5 items-center justify-center rounded">
                <p.icon className="mock-dim h-2 w-2" />
              </span>
              <span className="flex-1 truncate text-[7.5px] mock-dim">{p.name}</span>
              <span className={`rounded-full px-1.5 py-px text-[5.5px] font-semibold ${p.tone}`}>
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-y-8 rounded-2xl border border-border bg-card px-8 py-8 shadow-sm md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-border">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-center gap-3 px-2 md:justify-center">
            <s.icon className="h-9 w-9 shrink-0 text-brand" strokeWidth={1.6} />
            <div>
              <p className="text-xl font-extrabold tracking-tight">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        Trusted by businesses across industries
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-x-12 gap-y-7 text-brand-ink/85">
        {LOGOS.map((logo) => (
          <span key={logo.name} className={logo.className}>
            {logo.name}
          </span>
        ))}
        <span className="flex -rotate-3 flex-col items-center font-hand text-2xl leading-[1.05] text-brand-ink">
          And
          <br />
          Many More…
          <svg
            viewBox="0 0 60 56"
            className="mt-1 h-9 w-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 4 C 22 18, 32 32, 44 46" />
            <path d="M32 42 L45 48 L46 32" />
          </svg>
        </span>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-mint-deep px-7 py-8 sm:px-10 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card shadow-sm">
            <MessageSquareText className="h-5 w-5 text-brand" />
          </span>
          <div>
            <h3 className="text-xl font-extrabold tracking-tight">Have a project in mind?</h3>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Let&apos;s discuss your requirements and build a solution that fits your business
              perfectly.
            </p>
          </div>
        </div>
        <Link to="/contact" className="btn-brand shrink-0 px-6 py-3 text-sm">
          Talk to Our Experts
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
