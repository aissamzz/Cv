import { getPayload } from "payload";
import config from "@payload-config";

import { sectors } from "@/data/sectors";
import { testimonials } from "@/data/testimonials";
import { productsPro } from "@/data/products-pro";
import { productsGrandPublic } from "@/data/products-grand-public";
import { blogArticles } from "@/data/blog-articles";
import { libraryEntries } from "@/data/library-entries";
import { caseStudies } from "@/data/case-studies";
import { companyNews } from "@/data/company-news";
import { paragraphsToLexical } from "@/lib/richtext";

type Payload = Awaited<ReturnType<typeof getPayload>>;

type SluggedCollection = "sectors" | "products" | "blog-articles" | "library-entries" | "case-studies";
type NaturalKeyCollection = "testimonials" | "news-items";

async function upsertBySlug<TCollection extends SluggedCollection>(
  payload: Payload,
  collection: TCollection,
  slug: string,
  data: Record<string, unknown>
): Promise<string | number> {
  const { docs } = await payload.find({ collection, where: { slug: { equals: slug } }, limit: 1 });
  if (docs[0]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await payload.update({ collection, id: docs[0].id, data: data as any });
    return docs[0].id;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const created = await payload.create({ collection, data: { slug, ...data } as any });
  return created.id;
}

async function upsertByField<TCollection extends NaturalKeyCollection>(
  payload: Payload,
  collection: TCollection,
  field: string,
  value: string,
  data: Record<string, unknown>
): Promise<string | number> {
  const { docs } = await payload.find({ collection, where: { [field]: { equals: value } }, limit: 1 });
  if (docs[0]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await payload.update({ collection, id: docs[0].id, data: data as any });
    return docs[0].id;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const created = await payload.create({ collection, data: data as any });
  return created.id;
}

async function seed() {
  const payload = await getPayload({ config });

  const sectorIdBySlug = new Map<string, string | number>();
  for (const sector of sectors) {
    const id = await upsertBySlug(payload, "sectors", sector.slug, {
      name: sector.name,
      description: sector.description,
      icon: sector.icon,
    });
    sectorIdBySlug.set(sector.slug, id);
  }
  console.log(`Seeded ${sectors.length} sectors.`);

  const testimonialIdByDataId = new Map<string, string | number>();
  for (const testimonial of testimonials) {
    const id = await upsertByField(payload, "testimonials", "authorName", testimonial.authorName, {
      authorName: testimonial.authorName,
      authorRole: testimonial.authorRole,
      company: testimonial.company,
      quote: testimonial.quote,
      division: testimonial.division,
    });
    testimonialIdByDataId.set(testimonial.id, id);
  }
  console.log(`Seeded ${testimonials.length} testimonials.`);

  const allProducts = [...productsPro, ...productsGrandPublic];
  for (const product of allProducts) {
    await upsertBySlug(payload, "products", product.slug, {
      division: product.division,
      name: product.name,
      shortDescription: product.shortDescription,
      description: paragraphsToLexical(product.description),
      applications: product.applications,
      usageInstructions: product.usageInstructions,
      advantages: product.advantages,
      specs: product.specs,
      videoPlaceholder: product.videoPlaceholder ?? false,
      faq: product.faq,
      sectors: (product.sectors ?? [])
        .map((slug) => sectorIdBySlug.get(slug))
        .filter((id): id is string | number => Boolean(id)),
      featured: product.featured ?? false,
    });
  }
  console.log(`Seeded ${allProducts.length} products.`);

  for (const article of blogArticles) {
    await upsertBySlug(payload, "blog-articles", article.slug, {
      title: article.title,
      excerpt: article.excerpt,
      body: paragraphsToLexical(article.body),
      category: article.category,
      tags: article.tags,
      publishedAt: article.publishedAt,
      author: article.author,
      readingTimeMinutes: article.readingTimeMinutes,
    });
  }
  console.log(`Seeded ${blogArticles.length} blog articles.`);

  for (const entry of libraryEntries) {
    await upsertBySlug(payload, "library-entries", entry.slug, {
      title: entry.title,
      summary: entry.summary,
      category: entry.category,
      publishedAt: entry.publishedAt,
      tags: entry.tags,
    });
  }
  console.log(`Seeded ${libraryEntries.length} library entries.`);

  for (const caseStudy of caseStudies) {
    const sectorId = sectorIdBySlug.get(caseStudy.sector);
    const testimonialId = caseStudy.testimonialId
      ? testimonialIdByDataId.get(caseStudy.testimonialId)
      : undefined;
    await upsertBySlug(payload, "case-studies", caseStudy.slug, {
      clientName: caseStudy.clientName,
      sector: sectorId,
      title: caseStudy.title,
      challenge: caseStudy.challenge,
      solution: caseStudy.solution,
      results: caseStudy.results,
      testimonial: testimonialId,
    });
  }
  console.log(`Seeded ${caseStudies.length} case studies.`);

  for (const news of companyNews) {
    await upsertByField(payload, "news-items", "title", news.title, {
      title: news.title,
      excerpt: news.excerpt,
      date: news.date,
    });
  }
  console.log(`Seeded ${companyNews.length} news items.`);

  console.log("Seed complete.");
  await payload.destroy();
}

try {
  await seed();
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
