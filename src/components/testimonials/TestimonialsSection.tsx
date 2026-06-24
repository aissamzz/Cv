import { Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeading eyebrow="Ils nous font confiance" title="Ce qu'en disent nos clients" align="center" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial) => (
          <figure key={testimonial.id} className="flex flex-col rounded-2xl border border-mist-200 p-6">
            <Quote className="h-6 w-6 text-forest-400" />
            <blockquote className="mt-4 flex-1 text-sm text-ink/80">{testimonial.quote}</blockquote>
            <figcaption className="mt-6">
              <p className="text-sm font-semibold text-ink">{testimonial.authorName}</p>
              <p className="text-xs text-ink/60">
                {testimonial.authorRole}
                {testimonial.company ? ` — ${testimonial.company}` : null}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
