import { defineQuery } from "next-sanity";

// home page
export const postsQuery = defineQuery(
  `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id, title, slug, category, excerpt, publishedAt, coverImage
  }`
);

// all posts for blog index
export const allPostsQuery = defineQuery(
  `*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, category, excerpt, publishedAt, coverImage
  }`
);

// post by slug for individual post page
export const postBySlugQuery = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, category, excerpt, publishedAt, coverImage, body
  }`
);

// related post
export const relatedPostsQuery = defineQuery(
  `*[_type == "post" && category == $category && slug.current != $slug] | order(publishedAt desc)[0...3] {
    _id, title, slug, category, excerpt, publishedAt, coverImage
  }`
);