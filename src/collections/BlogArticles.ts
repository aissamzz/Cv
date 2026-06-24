import type { CollectionConfig } from "payload";

export const BlogArticles: CollectionConfig = {
  slug: "blog-articles",
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
      name: "excerpt",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "body",
      type: "richText",
      required: true,
      localized: true,
    },
    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "tags",
      type: "text",
      hasMany: true,
    },
    {
      name: "publishedAt",
      type: "date",
      required: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "readingTimeMinutes",
      type: "number",
      required: true,
    },
  ],
};
