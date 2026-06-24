import { getPayload } from "payload";
import config from "@payload-config";
import type { Division, Product } from "@/data/types";
import type { Product as ProductDoc } from "@/payload-types";
import { lexicalToParagraphs } from "@/lib/richtext";

function mapProduct(doc: ProductDoc): Product {
  return {
    slug: doc.slug,
    division: doc.division,
    name: doc.name,
    shortDescription: doc.shortDescription,
    description: lexicalToParagraphs(doc.description),
    applications: doc.applications ?? [],
    usageInstructions: doc.usageInstructions ?? [],
    advantages: doc.advantages ?? [],
    specs: (doc.specs ?? []).map((spec) => ({ label: spec.label, value: spec.value })),
    images: (doc.images ?? [])
      .map((image) => (typeof image === "object" ? image.url ?? undefined : undefined))
      .filter((url): url is string => Boolean(url)),
    videoPlaceholder: doc.videoPlaceholder ?? undefined,
    pdfSpecSheetUrl:
      typeof doc.pdfSpecSheet === "object" ? doc.pdfSpecSheet?.url ?? undefined : undefined,
    faq: doc.faq?.map((entry) => ({ question: entry.question, answer: entry.answer })),
    sectors: (doc.sectors ?? [])
      .map((sector) => (typeof sector === "object" ? sector.slug : undefined))
      .filter((slug): slug is string => Boolean(slug)),
    featured: doc.featured ?? undefined,
  };
}

// Seam for a future CMS: keep this signature, swap the in-memory lookup for an API call.
export async function getAllProducts(division: Division): Promise<Product[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "products",
    where: { division: { equals: division } },
    depth: 1,
    limit: 0,
  });
  return docs.map(mapProduct);
}

export async function getProductBySlug(
  division: Division,
  slug: string
): Promise<Product | undefined> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "products",
    where: { division: { equals: division }, slug: { equals: slug } },
    depth: 1,
    limit: 1,
  });
  return docs[0] ? mapProduct(docs[0]) : undefined;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "products",
    where: { featured: { equals: true } },
    depth: 1,
    limit: 0,
  });
  return docs.map(mapProduct);
}
