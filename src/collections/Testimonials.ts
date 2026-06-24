import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "authorName",
  },
  fields: [
    {
      name: "authorName",
      type: "text",
      required: true,
    },
    {
      name: "authorRole",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "company",
      type: "text",
    },
    {
      name: "quote",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "division",
      type: "select",
      options: [
        { label: "Professionnel", value: "professionnel" },
        { label: "Grand public", value: "grand-public" },
      ],
    },
  ],
};
