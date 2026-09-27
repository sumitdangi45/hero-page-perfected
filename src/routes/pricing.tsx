import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Anni Web Solutions" },
      { name: "description", content: "Transparent pricing for websites, apps and SaaS platforms." },
      { property: "og:title", content: "Pricing — Anni Web Solutions" },
      {
        property: "og:description",
        content: "Transparent pricing for websites, apps and SaaS platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-mint font-sans">
      <SiteHeader />
      <PageStub
        title="Pricing"
        description="This page is ready for your content — replace it with your pricing plans."
      />
    </div>
  );
}
