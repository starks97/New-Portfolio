import { createClient } from "next-sanity";

import ImageBuilder from "@sanity/image-url";

import { useNextSanityImage } from "next-sanity-image";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2023-12-07",
  useCdn: false,
});

const imageBuilder = ImageBuilder(client);

export const urlFor = (source: any) => {
  return imageBuilder.image(source);
};

export const useNextSanityImageCustom = useNextSanityImage;
