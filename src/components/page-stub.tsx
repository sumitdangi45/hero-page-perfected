import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function PageStub({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-mint px-6 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
      <Link to="/" className="btn-brand mt-7 px-6 py-3 text-sm">
        Back to Home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
