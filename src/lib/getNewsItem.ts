import { getPayload } from "payload";
import config from "@payload-config";
import type { NewsItem } from "@/data/types";
import type { NewsItem as NewsItemDoc } from "@/payload-types";

function mapNewsItem(doc: NewsItemDoc): NewsItem {
  return {
    id: String(doc.id),
    title: doc.title,
    excerpt: doc.excerpt,
    date: doc.date,
  };
}

export async function getAllNewsItems(): Promise<NewsItem[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "news-items", sort: "-date", limit: 0 });
  return docs.map(mapNewsItem);
}
