import { getPayload } from "payload";
import config from "@payload-config";
import type { Sector } from "@/data/types";
import type { Sector as SectorDoc } from "@/payload-types";

function mapSector(doc: SectorDoc): Sector {
  return {
    slug: doc.slug,
    name: doc.name,
    description: doc.description,
    icon: doc.icon,
  };
}

export async function getAllSectors(): Promise<Sector[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "sectors", limit: 0 });
  return docs.map(mapSector);
}

export async function getSectorBySlug(slug: string): Promise<Sector | undefined> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "sectors",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0] ? mapSector(docs[0]) : undefined;
}
