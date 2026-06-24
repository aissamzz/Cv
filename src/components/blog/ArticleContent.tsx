import { Clock, Calendar, User } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { formatDate } from "@/lib/utils";
import type { BlogArticle } from "@/data/types";

export function ArticleContent({ article }: { article: BlogArticle }) {
  return (
    <article>
      <Tag>{article.category}</Tag>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {article.title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-ink/60">
        <span className="flex items-center gap-1.5">
          <User className="h-4 w-4" />
          {article.author}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          {formatDate(article.publishedAt)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {article.readingTimeMinutes} min de lecture
        </span>
      </div>

      <div className="mt-8 flex aspect-video items-center justify-center rounded-2xl bg-mist-100">
        <span className="text-sm text-ink/40">{article.title}</span>
      </div>

      <div className="mt-8 space-y-4 text-base text-ink/80">
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
