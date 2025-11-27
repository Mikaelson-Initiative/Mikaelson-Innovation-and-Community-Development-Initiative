import React from 'react'
import type { Metadata } from "next";
import LeftSidebar from '@/features/website/components/challenges/LeftSidebar'
import RightSidebar from '@/features/website/components/challenges/RightSidebar'
import MainFeed from '@/features/website/components/challenges/MainFeed'

export const metadata: Metadata = {
  title: "Challenges | Mikaelson Initiative",
  description:
    "Challenge yourself to complete tasks and see feats others are acheiving.",
  openGraph: {
    title: "Challenges | Mikaelson Initiative",
    description:
      "Challenge yourself to complete tasks and see feats others are acheiving.",
    url: "https://mikaelsoninitiative.org/challenges",
    images: [
      {
        url: "/assets/images/mikaelsonlogo.png",
        width: 1200,
        height: 630,
        alt: "Mikaelson Initiative Challenges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Challenges | Mikaelson Initiative",
    description:
      "Challenge yourself to complete tasks and see feats others are acheiving.",
    images: ["/assets/images/mikaelsonlogo.png"],
  },
};

const page = () => {
  return (
    <section className='grid md:grid-cols-8 gap-4 bg-gray-50 md:p-8'>
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
    </section>
  )
}

export default page