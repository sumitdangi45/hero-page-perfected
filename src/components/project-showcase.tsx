import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowRight,
  Bot,
  Check,
  GraduationCap,
  LoaderCircle,
  RefreshCw,
  ShoppingCart,
  Sparkles,
  Workflow,
} from "lucide-react";

import freshCartImage from "@/assets/freshcart-project.jpg";
import flowPilotImage from "@/assets/flowpilot-project.jpg";
import sarvadnyaImage from "@/assets/sarvadnya-project.jpg";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getProjectRecommendation } from "@/lib/project-matcher.functions";

const PROJECTS = [
  {
    title: "Sarvadnya Vidyapeeth: College Portal",
    category: "Education | Web Application",
    summary:
      "A modern college admission and departmental portal built to manage admissions, courses, student data and campus activities.",
    image: sarvadnyaImage,
    imageAlt: "Sarvadnya Vidyapeeth college portal shown on a laptop and phone",
    icon: GraduationCap,
    outcomes: ["Online admission system", "Centralized student data", "Faculty dashboards", "Notices and events"],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "FreshCart: Online Grocery Store",
    category: "Retail | Web & Mobile App",
    summary:
      "A full-stack grocery platform for browsing fresh products, secure checkout, inventory updates and doorstep delivery tracking.",
    image: freshCartImage,
    imageAlt: "FreshCart grocery store shown on a laptop and phone",
    icon: ShoppingCart,
    outcomes: ["Product catalog and search", "Cart and secure checkout", "Live order tracking", "Inventory management"],
    technologies: ["React Native", "Node.js", "MongoDB", "Payments"],
  },
  {
    title: "FlowPilot: Operations Dashboard",
    category: "SaaS | Workflow Automation",
    summary:
      "An operations workspace that brings workflows, team tasks, process analytics and automation health into one clear dashboard.",
    image: flowPilotImage,
    imageAlt: "FlowPilot operations dashboard shown on a laptop and phone",
    icon: Workflow,
    outcomes: ["Workflow automation", "Team task tracking", "Live process analytics", "Operational reporting"],
    technologies: ["React", "TypeScript", "PostgreSQL", "Automation"],
  },
];

export function ProjectShowcase() {
  const recommend = useServerFn(getProjectRecommendation);
  const [requirements, setRequirements] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setRecommendation("");
    setIsLoading(true);

    try {
      const result = await recommend({ data: { requirements } });
      setRecommendation(result.recommendation);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "We couldn't prepare a recommendation right now.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bg-background pb-16 pt-4" aria-labelledby="more-projects-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-7 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint-deep px-4 py-1.5 text-sm font-semibold text-brand-dark">
            <Sparkles className="h-4 w-4" /> More custom projects
          </span>
          <h2 id="more-projects-title" className="mt-3 text-3xl font-extrabold text-brand-ink sm:text-4xl">
            Built for different industries. <span className="text-brand-dark">Made to perform.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {PROJECTS.map((project, index) => (
            <article
              key={project.title}
              className="grid overflow-hidden rounded-lg border border-border bg-card shadow-sm lg:grid-cols-[53%_47%]"
            >
              <div className="relative min-h-[240px] overflow-hidden bg-mint lg:min-h-[330px]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width={1536}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-bold text-brand-dark shadow-sm backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-col p-5 sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mint-deep text-brand-dark">
                    <project.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase text-brand">Project 0{index + 2}</p>
                    <h3 className="mt-1 text-xl font-extrabold leading-tight text-brand-ink sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                <ul className="mt-4 grid gap-2 border-b border-border pb-4 sm:grid-cols-2">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-primary-foreground">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-brand-ink">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5">
                  <Button asChild className="bg-brand-dark text-primary-foreground hover:bg-brand-ink">
                    <Link to="/contact">View Project <ArrowRight /></Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 rounded-lg bg-mint-deep p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-10">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-brand-dark shadow-sm">
              <Bot className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-brand-ink sm:text-3xl">Have a project in mind?</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Tell us what you want to build. Our AI project matcher will find the closest example and suggest a practical starting point.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-4 shadow-sm sm:p-5">
            <label htmlFor="project-requirements" className="text-sm font-bold text-brand-ink">
              Describe your project requirements
            </label>
            <Textarea
              id="project-requirements"
              value={requirements}
              onChange={(event) => setRequirements(event.target.value)}
              placeholder="Example: I need a mobile-friendly portal for admissions, student records and faculty notices..."
              className="mt-2 min-h-28 resize-y bg-background"
              maxLength={1500}
              required
            />
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-muted-foreground">{requirements.length}/1500</span>
              <Button
                type="submit"
                disabled={isLoading || requirements.trim().length < 12}
                className="bg-brand-dark text-primary-foreground hover:bg-brand-ink"
              >
                {isLoading ? <LoaderCircle className="animate-spin" /> : recommendation ? <RefreshCw /> : <Sparkles />}
                {isLoading ? "Finding a match…" : recommendation ? "Try another match" : "Find my best match"}
              </Button>
            </div>

            {error ? (
              <p role="alert" className="mt-4 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                {error}
              </p>
            ) : null}

            {recommendation ? (
              <div aria-live="polite" className="mt-4 rounded-md border border-brand/25 bg-mint p-4">
                <p className="text-xs font-bold uppercase text-brand-dark">Your recommended project</p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-brand-ink">{recommendation}</p>
                <Button asChild variant="outline" className="mt-4 border-brand text-brand-dark hover:bg-mint-deep">
                  <Link to="/contact">Discuss this project <ArrowRight /></Link>
                </Button>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}