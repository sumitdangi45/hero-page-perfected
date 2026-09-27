import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { PageStub } from "@/components/page-stub";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Anni Web Solutions" },
      { name: "description", content: "Get a free quote for your website, app or SaaS platform." },
      { property: "og:title", content: "Contact Us — Anni Web Solutions" },
      {
        property: "og:description",
        content: "Get a free quote for your website, app or SaaS platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-mint font-sans">
      <SiteHeader />
      <PageStub
        title="Contact Us"
        description="This page is ready for your content — add your contact form and details here."
      />
    </div>
  );
}
