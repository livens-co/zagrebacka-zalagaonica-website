import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const brand = {
  name: "brand",
  title: "Brendovi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naziv brenda",
      type: "string",
      required: true,
    },
    {
      name: "brandSlug",
      title: "URL brenda",
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
      name: "imageUrl",
      title: "Slika brenda",
      type: "image",
    },
    {
      name: "categories",
      title: "Kategorije",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "isActive",
      title: "Prikaži brend",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
  ],
};

export default brand;
