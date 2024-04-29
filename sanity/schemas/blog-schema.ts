import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naslov",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL bloga",
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
      name: "date",
      title: "Datum",
      type: "date",
      options: {
        dateFormat: "D.M.YYYY",
      },
    },
    {
      name: "description",
      title: "Kratak opis",
      type: "string",
    },
    {
      name: "content",
      title: "Članak",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "imageUrl",
      title: "Naslovna slika",
      type: "image",
      options: {
        hotspot: true,
      },
      required: true,
    },
  ],
};

export default blog;
