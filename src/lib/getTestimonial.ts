import { getPayload } from "payload";
import config from "@payload-config";
import type { Testimonial } from "@/data/types";
import type { Testimonial as TestimonialDoc } from "@/payload-types";

function mapTestimonial(doc: TestimonialDoc): Testimonial {
  return {
    id: String(doc.id),
    authorName: doc.authorName,
    authorRole: doc.authorRole,
    company: doc.company ?? undefined,
    quote: doc.quote,
    division: doc.division ?? undefined,
  };
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "testimonials", limit: 0 });
  return docs.map(mapTestimonial);
}

export async function getTestimonialById(id: string): Promise<Testimonial | undefined> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "testimonials",
    where: { id: { equals: id } },
    limit: 1,
  });
  return docs[0] ? mapTestimonial(docs[0]) : undefined;
}
