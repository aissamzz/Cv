"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { LibraryEntryCard, categoryLabels } from "./LibraryEntryCard";
import type { LibraryCategory, LibraryEntry } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";

const categories: LibraryCategory[] = ["etude", "article", "rapport", "norme", "innovation"];

export function LibraryExplorer({ entries, dict }: { entries: LibraryEntry[]; dict: Dictionary }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<LibraryCategory | null>(null);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return entries.filter((entry) => {
      const matchesCategory = activeCategory ? entry.category === activeCategory : true;
      const matchesQuery = normalizedQuery
        ? entry.title.toLowerCase().includes(normalizedQuery) ||
          entry.summary.toLowerCase().includes(normalizedQuery) ||
          entry.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [entries, query, activeCategory]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40 ltr:left-3 rtl:right-3" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={dict.common.search}
            className="w-full rounded-full border border-mist-300 py-2.5 text-sm ltr:pl-10 ltr:pr-4 rtl:pr-10 rtl:pl-4"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === null ? "bg-forest-500 text-paper" : "bg-mist-100 text-ink/70 hover:bg-mist-200"
            )}
          >
            {dict.common.allCategories}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category ? "bg-forest-500 text-paper" : "bg-mist-100 text-ink/70 hover:bg-mist-200"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((entry) => <LibraryEntryCard key={entry.slug} entry={entry} />)
        ) : (
          <p className="text-sm text-ink/60">Aucun document ne correspond à votre recherche.</p>
        )}
      </div>
    </div>
  );
}
