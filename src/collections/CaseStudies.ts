import type { CollectionConfig } from "payload";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "clientName",
      type: "text",
      required: true,
    },
    {
      name: "sector",
      type: "relationship",
      relationTo: "sectors",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "challenge",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "solution",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "results",
      type: "text",
      hasMany: true,
      localized: true,
    },
    {
      name: "beforeImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "afterImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "testimonial",
      type: "relationship",
      relationTo: "testimonials",
    },
    {
      name: "images",
      type: "upload",
      relationTo: "media",
      hasMany: true,
    },
  ],
};
