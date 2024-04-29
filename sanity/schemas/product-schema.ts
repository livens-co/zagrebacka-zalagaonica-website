import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const product = {
  name: "products",
  title: "Proizvodi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naziv proizvoda",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL proizvoda",
      type: "slug",
      options: {
        source: "title",
        isUnique: isUniqueAcrossAllDocuments,
        slugify: async (input: string) => {
          const normalizedInput = await normalize(input);
          return normalizedInput
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_]+/g, "-");
        },
      },
      required: true,
    },
    {
      name: "description",
      title: "Opis proizvoda",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      title: "Slike",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "price",
      title: "Cijena",
      type: "number",
    },
    {
      name: "paymentMethod",
      title: "Način plaćanja",
      type: "array",
      of: [{ type: "block" }],
    },
    // KATEGORIJA
    {
      name: "categories",
      title: "Kategorije",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    // BREND
    {
      name: "brands",
      title: "Brend",
      type: "array",
      of: [{ type: "reference", to: [{ type: "brand" }] }],
    },

    {
      name: "isArchived",
      title: "Arhivirano",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "isFeatured",
      title: "Proizvod na početnoj",
      type: "boolean",
      initialValue: false,
    },
  ],
};

export default product;
