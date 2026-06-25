import { Quote } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { getSectorBySlug } from "@/lib/getSector";
import { getTestimonialById } from "@/lib/getTestimonial";
import type { CaseStudy } from "@/data/types";

export async function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const sector = await getSectorBySlug(caseStudy.sector);
  const testimonial = caseStudy.testimonialId
    ? await getTestimonialById(caseStudy.testimonialId)
    : undefined;

  return (
    <article className="rounded-2xl border border-mist-200 p-6">
      {caseStudy.beforeImage && caseStudy.afterImage ? (
        <BeforeAfterSlider />
      ) : (
        <div className="flex aspect-video items-center justify-center rounded-2xl bg-mist-100 text-sm text-ink/40">
          {caseStudy.clientName}
        </div>
      )}

      <div className="mt-5">
        {sector ? <Tag>{sector.name}</Tag> : null}
        <p className="mt-3 text-base font-semibold text-ink">{caseStudy.title}</p>
        <p className="mt-1 text-sm text-ink/60">{caseStudy.clientName}</p>

        <div className="mt-4 space-y-3 text-sm text-ink/70">
          <p>
            <span className="font-semibold text-ink">Défi : </span>
            {caseStudy.challenge}
          </p>
          <p>
            <span className="font-semibold text-ink">Solution : </span>
            {caseStudy.solution}
          </p>
        </div>

        <ul className="mt-4 space-y-1.5 text-sm text-ink/70">
          {caseStudy.results.map((result) => (
            <li key={result} className="flex gap-2">
              <span className="text-forest-500">•</span>
              {result}
            </li>
          ))}
        </ul>

        {testimonial ? (
          <div className="mt-5 flex gap-3 rounded-xl bg-forest-50 p-4">
            <Quote className="h-4 w-4 shrink-0 text-forest-500" />
            <div>
              <p className="text-sm italic text-ink/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-2 text-xs font-medium text-ink/60">
                {testimonial.authorName}, {testimonial.authorRole}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
