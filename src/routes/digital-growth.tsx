import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/digital-growth")({
  head: () => ({
    meta: [
      { title: "Digital Growth — Anni Web Solutions" },
      { name: "description", content: "Digital growth services by Anni Web Solutions." },
      { property: "og:title", content: "Digital Growth — Anni Web Solutions" },
      { property: "og:description", content: "Digital growth services by Anni Web Solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DigitalGrowthPage,
});

function DigitalGrowthPage() {
  return (
    <div className="min-h-screen bg-mint font-sans">
      <SiteHeader />
      <PageStub
        title="Digital Growth"
        description="This page is ready for your content — replace it with your Digital Growth services."
      />
    </div>
  );
}
