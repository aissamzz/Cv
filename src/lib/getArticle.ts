import { blogArticles } from "@/data/blog-articles";
import type { BlogArticle } from "@/data/types";

export function getAllArticles(): BlogArticle[] {
  return [...blogArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): BlogArticle[] {
  return blogArticles.filter((article) => article.slug !== slug).slice(0, limit);
}
