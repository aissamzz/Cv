import type { CollectionConfig } from "payload";

export const NewsItems: CollectionConfig = {
  slug: "news-items",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
  ],
};
