import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { postBySlugQuery, relatedPostsQuery, allPostsQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: any;
  body?: any[];
}

// Pre-generate all post slugs at build time
export async function generateStaticParams() {
  const posts = await client.fetch(allPostsQuery);
  return posts.map((post: Post) => ({ slug: post.slug.current }));
}

// Dynamic metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post: Post = await client.fetch(postBySlugQuery, { slug });

  if (!post) return { title: "Post Not Found" };

  const ogImage = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : "https://mikaelsoninitiative.org/assets/images/og-blog.png";

  return {
    title: `${post.title} — Mikaelson Initiative`,
    description: post.excerpt,
    keywords: [
      post.category,
      "Mikaelson Initiative",
      "African student leadership",
      "youth development Africa",
      "student growth",
    ],
    authors: [{ name: "Mikaelson Initiative", url: "https://mikaelsoninitiative.org" }],
    alternates: {
      canonical: `https://mikaelsoninitiative.org/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} — Mikaelson Initiative`,
      description: post.excerpt,
      url: `https://mikaelsoninitiative.org/blog/${slug}`,
      siteName: "Mikaelson Initiative",
      type: "article",
      locale: "en_NG",
      publishedTime: post.publishedAt,
      tags: [post.category],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Mikaelson Initiative`,
      description: post.excerpt,
      site: "@mcdti_org",
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-base md:text-[1.05rem] text-[#444] dark:text-white/70 leading-[1.9] mb-6">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-[#111] tracking-[-0.02em] leading-snug mt-12 mb-5">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-bold dark:text-white text-[#111] tracking-[-0.02em] leading-snug mt-10 mb-4">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-[#5CE1E6] pl-6 my-8 italic text-[#555] dark:text-white/60 text-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-none space-y-2 mb-6">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-[#444] dark:text-white/70">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3 text-[#444] dark:text-white/70">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shrink-0" />
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold dark:text-white text-[#111]">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#5CE1E6] underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-10 border border-[#5CE1E6]/15">
        <Image
          src={urlFor(value).width(900).url()}
          alt={value.alt || ""}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
};

function RelatedCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col rounded-2xl border border-[#5CE1E6]/20 overflow-hidden bg-white dark:bg-[#0f0f0f] hover:border-[#5CE1E6]/50 transition-all duration-300"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#5CE1E6]/5">
        {post.coverImage ? (
          <Image
            src={urlFor(post.coverImage).width(500).height(312).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#5CE1E6]/20 font-black text-[5rem] leading-none select-none">
              {post.category?.charAt(0) ?? "M"}
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#5CE1E6] text-black">
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2 text-xs text-[#999] dark:text-white/30">
          <Clock size={11} /> {formatDate(post.publishedAt)}
        </div>
        <h4 className="text-sm font-bold dark:text-white text-[#111] group-hover:text-[#5CE1E6] transition-colors duration-200 line-clamp-2 leading-snug">
          {post.title}
        </h4>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5CE1E6] mt-auto pt-2 group-hover:gap-2 transition-all duration-200">
          Read article <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post: Post = await client.fetch(postBySlugQuery, { slug });
  if (!post) notFound();

  const related: Post[] = await client.fetch(relatedPostsQuery, {
    category: post.category,
    slug,
  });

  const ogImage = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : "https://mikaelsoninitiative.org/assets/images/og-blog.png";

  return (
    <main className="min-h-screen py-16 px-5 md:px-10">
      {/* JSON-LD Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            image: ogImage,
            url: `https://mikaelsoninitiative.org/blog/${slug}`,
            author: {
              "@type": "Organization",
              name: "Mikaelson Initiative",
              url: "https://mikaelsoninitiative.org",
            },
            publisher: {
              "@type": "Organization",
              name: "Mikaelson Initiative",
              logo: {
                "@type": "ImageObject",
                url: "https://mikaelsoninitiative.org/assets/images/mikaelsonlogo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://mikaelsoninitiative.org/blog/${slug}`,
            },
            keywords: post.category,
          }),
        }}
      />

      <div className="max-w-7xl mx-auto">

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#999] dark:text-white/40 hover:text-[#5CE1E6] dark:hover:text-[#5CE1E6] transition-colors duration-200 mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">

          <article>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#5CE1E6] text-black">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#999] dark:text-white/30">
                <Clock size={11} />
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <h1 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] dark:text-white text-[#111] mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-[#555] dark:text-white/60 leading-relaxed mb-10 border-l-2 border-[#5CE1E6] pl-5">
              {post.excerpt}
            </p>

            {post.coverImage && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-[#5CE1E6]/15">
                <Image
                  src={urlFor(post.coverImage).width(1200).height(675).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-[#5CE1E6]/10" />
              <span className="text-[#5CE1E6] text-xs font-bold tracking-widest uppercase">Article</span>
              <div className="h-px flex-1 bg-[#5CE1E6]/10" />
            </div>

            {post.body && (
              <PortableText value={post.body} components={portableTextComponents} />
            )}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#bbb] dark:text-white/25 mb-4">
                  About this article
                </p>
                <div className="flex flex-col gap-4 p-5 rounded-2xl border border-[#5CE1E6]/15 bg-[#5CE1E6]/[0.02]">
                  <div>
                    <p className="text-xs text-[#999] dark:text-white/30 mb-1.5">Category</p>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#5CE1E6]/10 text-[#5CE1E6] border border-[#5CE1E6]/30">
                      {post.category}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-[#999] dark:text-white/30 mb-1.5">Published</p>
                    <p className="text-sm font-medium dark:text-white text-[#111]">
                      {formatDate(post.publishedAt)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[#5CE1E6]/10" />

              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#bbb] dark:text-white/25 mb-2">
                  Mikaelson Initiative
                </p>
                <p className="text-xs text-[#999] dark:text-white/40 leading-relaxed">
                  Equipping African students with structured systems for growth, leadership, and meaningful impact.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5CE1E6] mt-3 hover:gap-2.5 transition-all duration-200"
                >
                  Learn more <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </aside>

        </div>

        {related.length > 0 && (
          <div className="mt-24 pt-12 border-t border-[#5CE1E6]/10">
            <p className="text-[#5CE1E6] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Continue Reading
            </p>
            <h2 className="text-2xl font-bold dark:text-white text-[#111] tracking-[-0.02em] mb-8">
              More in {post.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r: Post) => (
                <RelatedCard key={r._id} post={r} />
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}