import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Gem, MessageSquareText } from "lucide-react";
import mockup from "@/assets/kisansathi-mockup.jpg";

const POINTS = [
  "AI-based crop and fertilizer recommendations based on soil and weather conditions.",
  "Crop disease detection using image recognition and AI models.",
  "Real-time weather updates and farm alerts for better planning.",
  "Multilingual AI assistant with livestock support and community forums.",
];

const TECH = ["React", "TypeScript", "Flask", "MongoDB", "Python/ML", "Gemini API"];

export function FeaturedWork() {
  const [tab, setTab] = useState<"web" | "app">("web");
  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-mint-deep px-4 py-1.5 text-sm font-semibold text-brand-ink">
          <Gem className="h-4 w-4 text-brand-dark" />
          Featured Work
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-[2.9rem]">
          Custom Solutions Built for <span className="text-brand-dark">Real Businesses</span>
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-[17px] leading-snug text-muted-foreground">
          Take a look at one of our custom projects built to solve real-world problems.
          <br className="hidden sm:block" />
          From idea to deployment, we turn unique business needs into powerful digital solutions.
        </p>
        <div className="mt-6 inline-flex rounded-full border border-border bg-muted p-1">
          {(
            [
              ["web", "Websites"],
              ["app", "Applications"],
            ] as const
          ).map(([k, l]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`rounded-full px-10 py-2 text-sm font-semibold transition-colors ${
                tab === k ? "bg-brand-dark text-primary-foreground shadow" : "text-brand-ink"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid items-center gap-10 px-4 lg:grid-cols-[1.68fr_1fr] lg:gap-8 lg:pl-0 lg:pr-[5%]">
        <img
          src={mockup}
          alt="KisanSathi AI agricultural assistant on laptop and phone"
          className="w-full"
          loading="lazy"
        />
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-mint-deep px-3 py-1 text-xs font-semibold text-brand-dark">
            <Code2 className="h-4 w-4" /> Custom Web + AI Platform
          </span>
          <h3 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-[2.4rem] lg:leading-[1.05]">
            KisanSathi — <span className="text-brand-dark">AI Agricultural Assistant</span>
          </h3>
          <p className="mt-3 text-[17px] leading-snug text-muted-foreground">
            An AI-powered agricultural assistant platform to help farmers with crop recommendations,
            disease detection, fertilizer guidance, weather alerts, and more — all in one place.
          </p>
          <ul className="mt-5 max-w-[520px] space-y-2.5 lg:max-w-none border-b border-border pb-5">
            {POINTS.map((p, i) => (
              <li key={p} className="flex items-center gap-4">
                <span className="flex h-11 w-12 shrink-0 items-center justify-center rounded-lg bg-mint-deep text-lg font-extrabold text-brand-dark">
                  0{i + 1}
                </span>
                <span className="text-[16px] leading-snug text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4">
            <span className="shrink-0 pt-2 text-sm font-semibold text-brand-ink">Technologies Used</span>
            <div className="flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-brand-ink shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-brand px-8 py-3 text-base">
              View Project <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-outline border-brand-ink px-8 py-3 text-base">
              <MessageSquareText className="h-5 w-5" /> Discuss a Similar Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
