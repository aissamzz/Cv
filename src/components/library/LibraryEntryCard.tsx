import { Download, FileText } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { formatDate } from "@/lib/utils";
import type { LibraryEntry } from "@/data/types";

const categoryLabels: Record<LibraryEntry["category"], string> = {
  etude: "Étude",
  article: "Article",
  rapport: "Rapport",
  norme: "Norme",
  innovation: "Innovation",
};

export function LibraryEntryCard({ entry }: { entry: LibraryEntry }) {
  return (
    <article className="flex flex-col rounded-2xl border border-mist-200 p-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-50 text-forest-600">
        <FileText className="h-5 w-5" />
      </span>
      <Tag className="mt-4 self-start">{categoryLabels[entry.category]}</Tag>
      <p className="mt-3 text-base font-semibold text-ink">{entry.title}</p>
      <p className="mt-2 flex-1 text-sm text-ink/70">{entry.summary}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-ink/50">
        <span>{formatDate(entry.publishedAt)}</span>
        {entry.fileUrl ? (
          <a href={entry.fileUrl} className="flex items-center gap-1 font-medium text-forest-600 hover:text-forest-700">
            <Download className="h-3.5 w-3.5" />
            PDF
          </a>
        ) : null}
      </div>
    </article>
  );
}

export { categoryLabels };
