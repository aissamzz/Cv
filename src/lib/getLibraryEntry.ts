import { libraryEntries } from "@/data/library-entries";
import type { LibraryEntry } from "@/data/types";

export function getAllLibraryEntries(): LibraryEntry[] {
  return [...libraryEntries].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getLibraryEntryBySlug(slug: string): LibraryEntry | undefined {
  return libraryEntries.find((entry) => entry.slug === slug);
}
