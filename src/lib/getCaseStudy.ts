import { getPayload } from "payload";
import config from "@payload-config";
import type { CaseStudy } from "@/data/types";
import type { CaseStudy as CaseStudyDoc } from "@/payload-types";

function mapCaseStudy(doc: CaseStudyDoc): CaseStudy {
  return {
    slug: doc.slug,
    clientName: doc.clientName,
    sector: typeof doc.sector === "object" && doc.sector ? doc.sector.slug : "",
    title: doc.title,
    challenge: doc.challenge,
    solution: doc.solution,
    results: doc.results ?? [],
    testimonialId:
      typeof doc.testimonial === "object" && doc.testimonial ? String(doc.testimonial.id) : undefined,
    images: [],
  };
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "case-studies", depth: 1, limit: 0 });
  return docs.map(mapCaseStudy);
}
