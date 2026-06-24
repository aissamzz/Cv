import { getPayload } from "payload";
import config from "@payload-config";
import type { LibraryEntry } from "@/data/types";
import type { LibraryEntry as LibraryEntryDoc } from "@/payload-types";

function mapLibraryEntry(doc: LibraryEntryDoc): LibraryEntry {
  return {
    slug: doc.slug,
    title: doc.title,
    summary: doc.summary,
    category: doc.category,
    publishedAt: doc.publishedAt,
    fileUrl: typeof doc.file === "object" ? doc.file?.url ?? undefined : undefined,
    tags: doc.tags ?? [],
  };
}

export async function getAllLibraryEntries(): Promise<LibraryEntry[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "library-entries",
    sort: "-publishedAt",
    depth: 1,
    limit: 0,
  });
  return docs.map(mapLibraryEntry);
}

export async function getLibraryEntryBySlug(slug: string): Promise<LibraryEntry | undefined> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "library-entries",
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  });
  return docs[0] ? mapLibraryEntry(docs[0]) : undefined;
}
