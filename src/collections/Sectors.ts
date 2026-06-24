import type { CollectionConfig } from "payload";

export const Sectors: CollectionConfig = {
  slug: "sectors",
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
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "icon",
      type: "text",
      required: true,
      admin: {
        description: "lucide-react icon name (e.g. \"Leaf\", \"Factory\")",
      },
    },
  ],
};
