import { Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Tag } from "@/components/ui/Tag";
import { formatDate } from "@/lib/utils";
import type { BlogArticle } from "@/data/types";

export function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-mist-200 bg-paper transition-shadow hover:shadow-lg"
    >
      <div className="flex aspect-video items-center justify-center bg-mist-100">
        <span className="text-sm text-ink/40">{article.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Tag className="self-start">{article.category}</Tag>
        <p className="mt-3 text-base font-semibold text-ink group-hover:text-forest-700">
          {article.title}
        </p>
        <p className="mt-2 flex-1 text-sm text-ink/70">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-ink/50">
          <span>{formatDate(article.publishedAt)}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {article.readingTimeMinutes} min
          </span>
        </div>
      </div>
    </Link>
  );
}
