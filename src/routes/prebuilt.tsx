import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/prebuilt")({
  head: () => ({
    meta: [
      { title: "Prebuilt Solutions — Anni Web Solutions" },
      { name: "description", content: "Ready-to-launch websites and apps by Anni Web Solutions." },
      { property: "og:title", content: "Prebuilt Solutions — Anni Web Solutions" },
      {
        property: "og:description",
        content: "Ready-to-launch websites and apps by Anni Web Solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrebuiltPage,
});

function PrebuiltPage() {
  return (
    <div className="min-h-screen bg-mint font-sans">
      <SiteHeader />
      <PageStub
        title="Prebuilt Solutions"
        description="This page is ready for your content — replace it with your Prebuilt solutions showcase."
      />
    </div>
  );
}
