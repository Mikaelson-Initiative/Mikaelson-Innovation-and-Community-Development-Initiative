"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: any;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col rounded-2xl border border-[#5CE1E6]/20 overflow-hidden bg-white dark:bg-[#0f0f0f] hover:border-[#5CE1E6]/50 hover:shadow-[0_0_30px_rgba(92,225,230,0.06)] transition-all duration-300"
    >
      {/* Cover image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#5CE1E6]/5">
        {post.coverImage ? (
          <Image
            src={urlFor(post.coverImage).width(600).height(375).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(#5CE1E6 1px, transparent 1px), linear-gradient(90deg, #5CE1E6 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <span className="text-[#5CE1E6]/20 font-black text-[6rem] leading-none select-none">
              {post.category?.charAt(0) ?? "M"}
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#5CE1E6] text-black">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center gap-2 text-xs text-[#999] dark:text-white/30">
          <Clock size={11} />
          {formatDate(post.publishedAt)}
        </div>
        <h3 className="text-base font-bold leading-snug tracking-[-0.02em] dark:text-white text-[#111] group-hover:text-[#5CE1E6] transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-[#666] dark:text-white/50 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-[#5CE1E6] mt-1 group-hover:gap-2.5 transition-all duration-200">
          Read article <ArrowRight size={13} />
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
        }}
      />
    </Link>
  );
}

function EmptyState({ filtered }: { filtered: boolean }) {
  return (
    <div className="col-span-3 flex flex-col items-center justify-center py-32 gap-5 rounded-2xl border border-dashed border-[#5CE1E6]/20 bg-[#5CE1E6]/[0.02]">
      <div className="w-14 h-14 rounded-2xl border border-[#5CE1E6]/25 bg-[#5CE1E6]/5 flex items-center justify-center">
        <span className="text-[#5CE1E6] font-black text-2xl leading-none">✦</span>
      </div>
      <div className="text-center">
        <p className="font-bold dark:text-white text-[#111] mb-2">
          {filtered ? "No articles in this category" : "No articles yet"}
        </p>
        <p className="text-sm text-[#999] dark:text-white/40 max-w-xs leading-relaxed">
          {filtered ? "Try selecting a different category." : "Insights and leadership stories are on the way."}
        </p>
      </div>
    </div>
  );
}

export default function BlogIndexClient({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))];
  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Insights
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] dark:text-white text-[#111]">
              Ideas, Leadership,<br className="hidden md:block" /> and Growth
            </h1>
            <p className="text-sm text-[#666] dark:text-white/50 leading-relaxed max-w-sm md:text-right">
              Articles written to inspire students to think bigger, grow intentionally, and take meaningful action.
            </p>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-[#5CE1E6] text-black border-[#5CE1E6]"
                  : "border-[#5CE1E6]/25 dark:text-white/60 text-[#555] hover:border-[#5CE1E6]/60 hover:text-[#111] dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post count */}
        {posts.length > 0 && (
          <p className="text-xs text-[#aaa] dark:text-white/30 mb-8">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <EmptyState filtered={activeCategory !== "All"} />
          ) : (
            filtered.map((post) => <BlogCard key={post._id} post={post} />)
          )}
        </div>

      </div>
    </main>
  );
}