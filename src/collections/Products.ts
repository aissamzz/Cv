import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
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
      name: "division",
      type: "select",
      required: true,
      options: [
        { label: "Professionnel", value: "professionnel" },
        { label: "Grand public", value: "grand-public" },
      ],
    },
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "shortDescription",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
      localized: true,
    },
    {
      name: "applications",
      type: "text",
      hasMany: true,
      localized: true,
    },
    {
      name: "usageInstructions",
      type: "text",
      hasMany: true,
      localized: true,
    },
    {
      name: "advantages",
      type: "text",
      hasMany: true,
      localized: true,
    },
    {
      name: "specs",
      type: "array",
      localized: true,
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "images",
      type: "upload",
      relationTo: "media",
      hasMany: true,
    },
    {
      name: "videoPlaceholder",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "pdfSpecSheet",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "faq",
      type: "array",
      localized: true,
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "sectors",
      type: "relationship",
      relationTo: "sectors",
      hasMany: true,
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
