// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { client } from "@/lib/sanity";
// import { postsQuery } from "@/lib/queries";

// interface Post {
//   _id: string;
//   title: string;
//   slug: { current: string };
//   category: string;
//   excerpt: string;
//   publishedAt: string;
// }

// async function getPosts(): Promise<Post[]> {
//   try {
//     return await client.fetch(postsQuery);
//   } catch {
//     return [];
//   }
// }

// function formatDate(dateStr: string) {
//   return new Date(dateStr).toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });
// }

// const FALLBACK_POSTS: Post[] = [
//   {
//     _id: "1",
//     title: "Why Leadership Begins With Discipline",
//     slug: { current: "#" },
//     category: "Leadership",
//     excerpt:
//       "True leadership is built on small daily habits. Discipline shapes the mindset required to influence others and create meaningful impact.",
//     publishedAt: new Date().toISOString(),
//   },
//   {
//     _id: "2",
//     title: "The Power of Student Communities",
//     slug: { current: "#" },
//     category: "Community",
//     excerpt:
//       "When students surround themselves with people who challenge them to grow, their potential expands far beyond the classroom.",
//     publishedAt: new Date().toISOString(),
//   },
//   {
//     _id: "3",
//     title: "Ideas That Can Transform a School",
//     slug: { current: "#" },
//     category: "Innovation",
//     excerpt:
//       "Change often begins with simple ideas. Here are ways students can create positive impact within their own schools.",
//     publishedAt: new Date().toISOString(),
//   },
// ];

// function BlogCard({ post, index }: { post: Post; index: number }) {
//   const isFeature = index === 0;

//   return (
//     <Link
//       href={post.slug.current === "#" ? "#" : `/blog/${post.slug.current}`}
//       className={`group flex flex-col gap-5 ${isFeature ? "lg:flex-row lg:gap-8 lg:col-span-2" : ""}`}
//     >
//       {/* Category + date */}
//       <div className={`flex flex-col gap-4 justify-between flex-1 ${isFeature ? "lg:border-r lg:border-[#5CE1E6]/15 lg:pr-8" : ""}`}>
//         <div className="flex items-center justify-between">
//           <span className="text-[#5CE1E6] text-xs font-semibold tracking-[0.18em] uppercase">
//             {post.category}
//           </span>
//           <span className="text-xs text-[#999] dark:text-white/30">
//             {formatDate(post.publishedAt)}
//           </span>
//         </div>

//         <div className="flex flex-col gap-3">
//           <h3
//             className={`font-bold leading-[1.2] tracking-[-0.02em] dark:text-white text-[#111] group-hover:text-[#5CE1E6] transition-colors duration-200 ${
//               isFeature ? "text-[clamp(1.5rem,3vw,2rem)]" : "text-lg"
//             }`}
//           >
//             {post.title}
//           </h3>
//           <p className="text-sm text-[#666] dark:text-white/50 leading-relaxed line-clamp-3">
//             {post.excerpt}
//           </p>
//         </div>

//         <div className="flex items-center gap-2 text-sm font-semibold text-[#5CE1E6] group-hover:gap-3 transition-all duration-200">
//           Read article
//           <ArrowRight size={14} />
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default async function BlogSection() {
//   const posts = await getPosts();
//   const displayPosts = posts.length > 0 ? posts : null;
//   const isEmpty = posts.length === 0;

//   return (
//     <section className="py-24 px-5 md:px-10">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
//           <div>
//             <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
//               Insights
//             </p>
//             <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em] dark:text-white text-[#111]">
//               Ideas, Leadership,<br />and Growth
//             </h2>
//           </div>
//           <p className="text-sm text-[#666] dark:text-white/50 leading-relaxed max-w-sm md:text-right">
//             Articles written to inspire students to think bigger, grow intentionally, and take meaningful action.
//           </p>
//         </div>

//         {isEmpty ? (
//           /* ── Empty state ── */
//           <div className="flex flex-col items-center justify-center py-24 gap-5 rounded-2xl border border-dashed border-[#5CE1E6]/25 bg-[#5CE1E6]/[0.02]">
//             <div className="w-12 h-12 rounded-full border border-[#5CE1E6]/30 bg-[#5CE1E6]/5 flex items-center justify-center">
//               <span className="text-[#5CE1E6] text-xl font-bold">✦</span>
//             </div>
//             <div className="text-center">
//               <p className="font-semibold dark:text-white text-[#111] mb-1">No articles yet</p>
//               <p className="text-sm text-[#999] dark:text-white/40">
//                 Check back soon — insights are on the way.
//               </p>
//             </div>
//           </div>
//         ) : (
//           /* ── Blog grid — feature post + two secondary ── */
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#5CE1E6]/10 dark:bg-[#5CE1E6]/10 rounded-2xl overflow-hidden border border-[#5CE1E6]/15">
//             {(displayPosts ?? FALLBACK_POSTS).map((post, i) => (
//               <div
//                 key={post._id}
//                 className={`bg-white dark:bg-[#111] p-8 ${i === 0 ? "lg:col-span-2" : ""}`}
//               >
//                 <BlogCard post={post} index={i} />
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Preview fallback note */}
//         {isEmpty && (
//           <div className="mt-8">
//             <p className="text-xs text-center text-[#aaa] dark:text-white/25 mb-10">
//               Preview — sample articles shown below
//             </p>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#5CE1E6]/10 rounded-2xl overflow-hidden border border-[#5CE1E6]/15 opacity-50 pointer-events-none select-none">
//               {FALLBACK_POSTS.map((post, i) => (
//                 <div
//                   key={post._id}
//                   className={`bg-white dark:bg-[#111] p-8 ${i === 0 ? "lg:col-span-2" : ""}`}
//                 >
//                   <BlogCard post={post} index={i} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* CTA */}
//         <div className="flex flex-col items-center gap-3 mt-14">
//           <Link
//             href="/blog"
//             className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#5CE1E6] text-black text-sm font-semibold hover:bg-[#4bcdd2] transition-all duration-200 group"
//           >
//             Explore the Blog
//             <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
//           </Link>
//           <p className="text-xs text-[#999] dark:text-white/30">
//             Read insights from the Mikaelson Initiative
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }