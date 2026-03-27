export interface ImpactItem {
  number: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  school: string;
}

import { BookOpen, Users } from "lucide-react";
import { ShieldCheck, GraduationCap, Lightbulb, Globe } from "lucide-react";

export const pillars = [

  {
    title: "Leadership Development Programs",
    description:
      "Structured training that builds communication skills, decision-making ability, and execution discipline.",
    image: "/assets/images/leadership.png",
  },
  {
    title: "Personal Growth Systems",
    description:
      "Habit tracking frameworks and accountability models that strengthen discipline and consistency.",
    image: "/assets/images/habit-tracking.png",
  },
  {
    title: "Innovation & Technology Exposure",
    description:
      "Creative problem-solving models and technology awareness for Africa’s modern economy.",
    image: "/assets/images/technology.png",
  },
  {
    title: "Accountability Communities",
    description:
      "Structured peer networks that reinforce leadership practice and measurable growth.",
    image: "/assets/images/community-pillar.png",
  },
];


export const steps = [
{
number: "01",
title: "Join the Initiative",
tags: ["APPLICATION", "SCHOOLS", "COMMUNITY"],
description:
"Students connect with the Mikaelson Initiative through school partnerships or open applications."
},
{
number: "02",
title: "Build Growth Systems",
tags: ["HABIT TRACKING", "ACCOUNTABILITY", "DISCIPLINE"],
description:
"Participants build structured personal development systems that reinforce discipline."
},
{
number: "03",
title: "Practice Leadership",
tags: ["COLLABORATION", "PROJECTS", "PROBLEM SOLVING"],
description:
"Students apply leadership through collaborative challenges and community initiatives."
},
{
number: "04",
title: "Create Real Impact",
tags: ["COMMUNITY", "INNOVATION", "CHANGE"],
description:
"Participants launch initiatives that influence their schools and communities."
}
]


export const audience = [
  {
    number: "01",
    title: "High School Students",
    description:
      "Students who want to develop strong habits, confidence, and leadership skills early. Mikaelson helps secondary school students build discipline, curiosity, and a mindset for long-term growth.",
    icon: ShieldCheck,
    image: "/assets/images/mikaelson-landing.png",
  },
  {
    number: "02",
    title: "University Students",
    description:
      "Undergraduate students looking for structure, accountability, and a community focused on personal development. Mikaelson supports students in building leadership capacity and real-world skills beyond the classroom.",
    icon: GraduationCap,
    image: "/assets/images/mikealson-hero.png",
  },
  {
    number: "03",
    title: "Young Innovators",
    description:
      "Students interested in exploring ideas, technology, and problem-solving. Mikaelson encourages creative thinking and helps young innovators turn curiosity into meaningful projects and solutions.",
    icon: Lightbulb,
    image: "/assets/images/mikaelson-landing-ii.png",
  },
  {
    number: "04",
    title: "Future African Leaders",
    description:
      "Young Africans who believe leadership begins with responsibility, discipline, and service. Mikaelson connects students who want to grow personally while contributing positively to their communities.",
    icon: Globe,
    image: "/assets/images/leadership.png",
  },
];


export const IMPACT_ITEMS: ImpactItem[] = [
  { number: "4+", label: "Educational Institutions" },
  { number: "3,000+", label: "Students Reached" },
  { number: "6", label: "Personal Growth Campaigns Run" },
  { number: "12+", label: "Strategic Collaborators and Volunteers" },
  { number: "10+", label: "Student Stories Captured" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The Initiative gave me the structure I needed to finally take my life seriously.",
    name: "Adaeze O.",
    school: "Wesley University",
  },
  {
    quote: "Mikaelson helped me build habits I never thought I was capable of maintaining.",
    name: "Emeka T.",
    school: "University of Lagos",
  },
  {
    quote: "I found a community that held me accountable and pushed me to lead with purpose.",
    name: "Fatima A.",
    school: "Ahmadu Bello University",
  },
  {
    quote: "Before Mikaelson, I had ambition but no direction. Now I have both.",
    name: "Chukwuemeka N.",
    school: "Covenant University",
  },
  {
    quote: "The personal growth systems changed how I approach every single day.",
    name: "Blessing I.",
    school: "University of Ibadan",
  },
];

// community section data
export const communityPillars = [
  {
    icon: BookOpen,
    title: "Learn Together",
    description:
      "Members share insights, resources, and ideas that help everyone grow academically and personally.",
  },
  {
    icon: Lightbulb,
    title: "Build Meaningful Ideas",
    description:
      "Students collaborate on initiatives, projects, and discussions that encourage creativity and leadership.",
  },
  {
    icon: Users,
    title: "Support Each Other",
    description:
      "Growth is easier with the right people around you. The community encourages accountability, support, and shared ambition.",
  },
];

export const communityImages = [
  { src: "/assets/images/community-1.png", alt: "Community members collaborating" },
  { src: "/assets/images/community-2.png", alt: "Students at a leadership session" },
  { src: "/assets/images/community-3.png", alt: "Group discussion" },
  { src: "/assets/images/community-4.png", alt: "Workshop event" },
];
export const memberImages = [
  { src: "/assets/images/Michael.png", alt: "Mikaelson member" },
  { src: "/assets/images/Ireti.png", alt: "Mikaelson member" },
  { src: "/assets/images/Khadija-Abdul.png", alt: "Mikaelson member" },
  { src: "/assets/images/Olamilekan-Aremu.png", alt: "Mikaelson member" },
];

export const floatingCards = [
  { label: "Student Discussions", count: "6+" },
  { label: "Projects Built", count: "10+" },
  { label: "Schools Represented", count: "4+" },
  { label: "Leadership Sessions", count: "30+" },
];



export const ecosystems = [
  {
    id: "community",
    label: "The Mikaelson Community",

    title: "A growth-driven environment for discipline, clarity, and personal development",
    subtitle: "This is where the journey begins:",
    bullets: [
      "A structured community where students build discipline through daily systems and shared accountability.",
      "An environment designed to help you develop focus, consistency, and a growth-oriented mindset.",
      "A space where young people challenge themselves and each other to become better every day.",
      "The foundation layer where habits, thinking, and identity are shaped.",
    ],
    cta: { label: "Enter the Community", href: "/community" },
    accent: "#5CE1E6",
    number: "01",
  },

  {
    id: "labs",
    label: "Mikaelson Labs",

    title: "A space for building ideas, exploring technology, and creating real-world solutions",
    subtitle: "Where thinking turns into execution:",
    bullets: [
      "Students move from learning to building through structured projects and guided exploration.",
      "A hands-on environment for developing skills in technology, innovation, and problem-solving.",
      "Opportunities to experiment, collaborate, and bring ideas to life.",
      "A system that transforms curiosity into tangible output and real-world value.",
    ],
    cta: { label: "Explore the Labs", href: "/labs" },
    accent: "#7DA2FF",
    number: "02",
  },

  {
    id: "network",
    label: "Partnership & Growth Network",

    title: "Expanding opportunities through schools, collaborations, and strategic partnerships",
    subtitle: "This is where growth scales:",
    bullets: [
      "Connections with schools, communities, and organizations that support student development.",
      "Access to opportunities, mentorship, and environments that accelerate growth.",
      "A network designed to expand impact beyond individuals into systems and institutions.",
      "The layer that turns personal growth into collective progress across communities.",
    ],
    cta: { label: "Join the Network", href: "/network" },
    accent: "#6B6B6B",
    number: "03",
  },
];