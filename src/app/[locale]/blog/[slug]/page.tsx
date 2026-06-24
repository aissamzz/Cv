import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { blogArticles } from "@/data/blog-articles";
import { getArticleBySlug, getRelatedArticles } from "@/lib/getArticle";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogArticles.map((article) => ({ locale, slug: article.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return pageMetadata(article.title, article.excerpt);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const related = getRelatedArticles(slug);

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <ArticleContent article={article} />
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="muted">
          <SectionHeading eyebrow="À lire aussi" title="D'autres articles qui pourraient vous intéresser" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
