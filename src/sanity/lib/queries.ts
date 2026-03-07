import { defineQuery } from "next-sanity";

export const postsQuery = defineQuery(
  `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    category,
    excerpt,
    publishedAt,
    coverImage
  }`
);