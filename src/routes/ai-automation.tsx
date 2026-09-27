import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI Automation — Anni Web Solutions" },
      { name: "description", content: "AI automation services by Anni Web Solutions." },
      { property: "og:title", content: "AI Automation — Anni Web Solutions" },
      { property: "og:description", content: "AI automation services by Anni Web Solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiAutomationPage,
});

function AiAutomationPage() {
  return (
    <div className="min-h-screen bg-mint font-sans">
      <SiteHeader />
      <PageStub
        title="AI Automation"
        description="This page is ready for your content — replace it with your AI Automation services."
      />
    </div>
  );
}
