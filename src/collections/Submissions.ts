import type { CollectionConfig } from "payload";

export const Submissions: CollectionConfig = {
  slug: "submissions",
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: () => false,
    delete: ({ req }) => Boolean(req.user),
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "type", "email", "createdAt"],
  },
  fields: [
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Devis produit", value: "quote" },
        { label: "Contact rapide produit", value: "quick-contact" },
        { label: "Formulaire contact", value: "contact" },
      ],
    },
    {
      name: "requestType",
      type: "select",
      options: [
        { label: "Information", value: "info" },
        { label: "Devis", value: "devis" },
        { label: "Partenariat", value: "partenariat" },
      ],
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "company",
      type: "text",
    },
    {
      name: "productName",
      type: "text",
    },
    {
      name: "message",
      type: "textarea",
    },
    {
      name: "locale",
      type: "text",
    },
  ],
};
