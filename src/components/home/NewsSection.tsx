import { Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllNewsItems } from "@/lib/getNewsItem";
import { formatDate } from "@/lib/utils";

export async function NewsSection() {
  const companyNews = await getAllNewsItems();
  return (
    <Section tone="dark">
      <SectionHeading eyebrow="Actualités" title="Ce qui se passe chez CIEL VERT" light />
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {companyNews.map((news) => (
          <article key={news.id} className="rounded-2xl border border-paper/10 bg-paper/5 p-6">
            <span className="flex items-center gap-2 text-xs font-medium text-forest-300">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(news.date)}
            </span>
            <p className="mt-3 text-base font-semibold text-paper">{news.title}</p>
            <p className="mt-2 text-sm text-mist-300">{news.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
