import { Leaf, ShieldCheck, Recycle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-ink to-ink-900" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-4 py-1.5 text-sm font-medium text-forest-200">
            <Leaf className="h-4 w-4" />
            {dict.meta.tagline}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Des produits de nettoyage écologiques, pensés pour l&apos;Algérie
          </h1>
          <p className="mt-6 max-w-xl text-base text-mist-200 sm:text-lg">
            CIEL VERT conçoit et fabrique des solutions d&apos;hygiène et de nettoyage
            performantes et respectueuses de l&apos;environnement, pour les
            professionnels comme pour le grand public.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/professionnels" size="lg">
              {dict.nav.professionnels}
            </Button>
            <Button href="/grand-public" variant="outline" size="lg" className="border-paper/30 text-paper hover:bg-paper/10">
              {dict.nav.grandPublic}
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-mist-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-forest-300" />
              Formules certifiées
            </span>
            <span className="flex items-center gap-2">
              <Recycle className="h-4 w-4 text-forest-300" />
              Biodégradables
            </span>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-md justify-self-center rounded-3xl bg-gradient-to-br from-forest-500/30 to-transparent p-1 lg:justify-self-end">
          <div className="flex h-full w-full items-center justify-center rounded-[calc(1.5rem-2px)] bg-paper/5 backdrop-blur-sm">
            <Leaf className="h-32 w-32 text-forest-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
