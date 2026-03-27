"use client";

import Link from "next/link";
import Image from "next/image";
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

interface BlogSectionProps {
  posts: Post[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}


function FeatureCard({ post }: { post: Post }) {
  return (
    <Link
      href={post.slug.current === "#" ? "#" : `/blog/${post.slug.current}`}
      className="group flex flex-col h-full"
    >
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-[#5CE1E6]/5 border border-[#5CE1E6]/15">
        {post.coverImage ? (
          <Image
            src={urlFor(post.coverImage).width(800).height(450).url()}
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
            <span className="text-[#5CE1E6]/20 font-black text-[8rem] leading-none select-none">
              {post.category?.charAt(0) ?? "M"}
            </span>
          </div>
        )}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#5CE1E6] text-black">
          {post.category}
        </span>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 text-xs text-[#999] dark:text-white/30">
          <Clock size={11} />
          {formatDate(post.publishedAt)}
        </div>
        <h3 className="text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold leading-[1.2] tracking-[-0.02em] dark:text-white text-[#111] group-hover:text-[#5CE1E6] transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-sm text-[#666] dark:text-white/50 leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-[#5CE1E6] mt-2 group-hover:gap-2.5 transition-all duration-200">
          Read article <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  );
}

function SecondaryCard({ post }: { post: Post }) {
  return (
    <Link
      href={post.slug.current === "#" ? "#" : `/blog/${post.slug.current}`}
      className="group flex gap-5 items-start py-6 border-b border-[#5CE1E6]/10 last:border-0 last:pb-0 first:pt-0"
    >
      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#5CE1E6]/5 border border-[#5CE1E6]/15 flex items-center justify-center">
        {post.coverImage ? (
          <Image
            src={urlFor(post.coverImage).width(160).height(160).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <span className="text-[#5CE1E6]/40 font-black text-3xl leading-none select-none">
            {post.category?.charAt(0) ?? "M"}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        <span className="text-[#5CE1E6] text-[10px] font-bold tracking-[0.15em] uppercase">
          {post.category}
        </span>
        <h4 className="text-sm font-bold leading-snug tracking-[-0.01em] dark:text-white text-[#111] group-hover:text-[#5CE1E6] transition-colors duration-200 line-clamp-2">
          {post.title}
        </h4>
        <p className="text-xs text-[#888] dark:text-white/40 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <span className="text-[10px] text-[#bbb] dark:text-white/25 mt-0.5">
          {formatDate(post.publishedAt)}
        </span>
      </div>
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-28 gap-6 rounded-2xl border border-dashed border-[#5CE1E6]/20 bg-[#5CE1E6]/[0.02]">
      <div className="w-14 h-14 rounded-2xl border border-[#5CE1E6]/25 bg-[#5CE1E6]/5 flex items-center justify-center">
        <span className="text-[#5CE1E6] font-black text-2xl leading-none">✦</span>
      </div>
      <div className="text-center">
        <p className="font-bold dark:text-white text-[#111] mb-2 text-lg">No articles yet</p>
        <p className="text-sm text-[#999] dark:text-white/40 max-w-xs leading-relaxed">
          Insights, ideas, and leadership stories are on the way. Check back soon.
        </p>
      </div>
    </div>
  );
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const hasPosts = posts.length > 0;
  const [feature, ...rest] = posts;

  return (
    <section className="py-24 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Insights
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em] dark:text-white text-[#111]">
              Ideas, Leadership,<br className="hidden md:block" /> and Growth
            </h2>
          </div>
          <div className="max-w-sm md:text-right">
            <p className="text-sm text-[#666] dark:text-white/50 leading-relaxed">
              Articles written to inspire students to think bigger, grow intentionally, and take meaningful action.
            </p>
          </div>
        </div>

        {!hasPosts ? (
          <EmptyState />
        ) : (
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-px rounded-2xl overflow-hidden border border-[#5CE1E6]/12"
            style={{ background: "rgba(92,225,230,0.08)" }}
          >
            <div className="bg-white dark:bg-[#0f0f0f] p-8 md:p-10">
              <FeatureCard post={feature} />
            </div>
            <div className="bg-white dark:bg-[#0f0f0f] p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-[#5CE1E6]/12">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#bbb] dark:text-white/25 mb-2">
                More articles
              </p>
              {rest.map((post) => (
                <SecondaryCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-3 mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#5CE1E6] text-black text-sm font-semibold hover:bg-[#4bcdd2] transition-all duration-200 group"
          >
            Explore the Blog
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <p className="text-xs text-[#aaa] dark:text-white/30">
            Read insights from the Mikaelson Initiative
          </p>
        </div>

      </div>
    </section>
  );
}