import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProductFaqEntry } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";

export function ProductFAQ({ faq, dict }: { faq: ProductFaqEntry[]; dict: Dictionary }) {
  return (
    <div>
      <SectionHeading title={dict.common.faq} />
      <div className="mt-6 space-y-4">
        {faq.map((entry) => (
          <div key={entry.question} className="rounded-xl border border-mist-200 p-5">
            <p className="text-sm font-semibold text-ink">{entry.question}</p>
            <p className="mt-2 text-sm text-ink/70">{entry.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
