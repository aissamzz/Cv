import type { CollectionConfig } from "payload";

export const LibraryEntries: CollectionConfig = {
  slug: "library-entries",
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
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Étude", value: "etude" },
        { label: "Article", value: "article" },
        { label: "Rapport", value: "rapport" },
        { label: "Norme", value: "norme" },
        { label: "Innovation", value: "innovation" },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      required: true,
    },
    {
      name: "file",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "tags",
      type: "text",
      hasMany: true,
    },
  ],
};
