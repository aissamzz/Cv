import { Download } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Product } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";

export function ProductSpecsTable({ product, dict }: { product: Product; dict: Dictionary }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <SectionHeading title={dict.common.applications} />
        <ul className="mt-4 space-y-2 text-sm text-ink/70">
          {product.applications.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-forest-500">•</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <SectionHeading title={dict.common.usage} />
          <ol className="mt-4 space-y-2 text-sm text-ink/70">
            {product.usageInstructions.map((step, index) => (
              <li key={index} className="flex gap-2">
                <span className="font-semibold text-forest-600">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <SectionHeading title={dict.common.advantages} />
        <ul className="mt-4 space-y-2 text-sm text-ink/70">
          {product.advantages.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-forest-500">•</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <SectionHeading title={dict.common.specifications} />
          <dl className="mt-4 divide-y divide-mist-200 rounded-xl border border-mist-200">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 px-4 py-3 text-sm">
                <dt className="text-ink/60">{spec.label}</dt>
                <dd className="text-end font-medium text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>

          {product.pdfSpecSheetUrl ? (
            <a
              href={product.pdfSpecSheetUrl}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest-600 hover:text-forest-700"
            >
              <Download className="h-4 w-4" />
              {dict.common.download}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
