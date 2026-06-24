import { getPayload } from "payload";
import config from "@payload-config";
import type { BlogArticle } from "@/data/types";
import type { BlogArticle as BlogArticleDoc } from "@/payload-types";
import { lexicalToParagraphs } from "@/lib/richtext";

function mapArticle(doc: BlogArticleDoc): BlogArticle {
  return {
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    body: lexicalToParagraphs(doc.body),
    category: doc.category,
    tags: doc.tags ?? [],
    publishedAt: doc.publishedAt,
    author: doc.author,
    coverImage: typeof doc.coverImage === "object" && doc.coverImage ? doc.coverImage.url ?? "" : "",
    readingTimeMinutes: doc.readingTimeMinutes,
  };
}

export async function getAllArticles(): Promise<BlogArticle[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "blog-articles",
    sort: "-publishedAt",
    depth: 1,
    limit: 0,
  });
  return docs.map(mapArticle);
}

export async function getArticleBySlug(slug: string): Promise<BlogArticle | undefined> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "blog-articles",
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  });
  return docs[0] ? mapArticle(docs[0]) : undefined;
}

export async function getRelatedArticles(slug: string, limit = 3): Promise<BlogArticle[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "blog-articles",
    where: { slug: { not_equals: slug } },
    sort: "-publishedAt",
    depth: 1,
    limit,
  });
  return docs.map(mapArticle);
}
