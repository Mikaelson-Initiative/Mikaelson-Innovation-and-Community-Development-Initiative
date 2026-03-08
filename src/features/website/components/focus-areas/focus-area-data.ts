import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  Brain,
  Compass,
  Cpu,
  Globe,
  GraduationCap,
  Handshake,
  Lightbulb,
  LineChart,
  Network,
  Rocket,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

export type FocusAreaSlug =
  | "self-development"
  | "youth-empowerment"
  | "community"
  | "habit-leadership-sustainable-growth-in-education"
  | "technology-infrastructure-for-discipline";

export interface FocusAreaMetric {
  label: string;
  value: string;
}

export interface FocusAreaPillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FocusAreaInitiative {
  title: string;
  description: string;
  cadence: string;
  icon: LucideIcon;
}

export interface FocusAreaOutcome {
  title: string;
  description: string;
}

export interface FocusAreaTheme {
  accent: string;
  gradientStart: string;
  gradientEnd: string;
}

export interface FocusAreaContent {
  slug: FocusAreaSlug;
  title: string;
  eyebrow: string;
  description: string;
  shortDescription: string;
  tags: string[];
  metrics: FocusAreaMetric[];
  pillars: FocusAreaPillar[];
  initiatives: FocusAreaInitiative[];
  outcomes: FocusAreaOutcome[];
  ctaLabel: string;
  ctaHref: string;
  theme: FocusAreaTheme;
}

export const focusAreaContent: Record<FocusAreaSlug, FocusAreaContent> = {
  "self-development": {
    slug: "self-development",
    title: "Self Development",
    eyebrow: "Focus Area 01",
    description:
      "A practical growth path that helps learners strengthen self-awareness, discipline, and personal accountability through structured routines and coaching.",
    shortDescription:
      "Structured routines, coaching, and reflective tools for personal growth.",
    tags: ["Mindset", "Accountability", "Coaching"],
    metrics: [
      { label: "Active Learners", value: "2,500+" },
      { label: "Habit Completion", value: "87%" },
      { label: "Mentorship Circles", value: "40" },
      { label: "Confidence Growth", value: "+34%" },
    ],
    pillars: [
      {
        title: "Mindset Reset",
        description:
          "Weekly reflection and mindset sessions that turn setbacks into learning loops.",
        icon: Brain,
      },
      {
        title: "Goal Architecture",
        description:
          "Simple planning systems that break long-term growth into measurable daily actions.",
        icon: Target,
      },
      {
        title: "Growth Navigation",
        description:
          "Personal roadmaps and check-ins that keep each learner focused and consistent.",
        icon: Compass,
      },
    ],
    initiatives: [
      {
        title: "30-Day Personal Sprint",
        description:
          "Participants build one high-impact habit with clear prompts and weekly scorecards.",
        cadence: "Monthly",
        icon: Rocket,
      },
      {
        title: "Reflection Circles",
        description:
          "Small peer groups run guided reflection sessions and support behavior change.",
        cadence: "Weekly",
        icon: Users,
      },
      {
        title: "Milestone Coaching",
        description:
          "Mentors review progress, remove blockers, and define the next growth milestone.",
        cadence: "Bi-weekly",
        icon: BadgeCheck,
      },
    ],
    outcomes: [
      {
        title: "Higher consistency",
        description:
          "Participants sustain focused routines for longer and recover faster from disruptions.",
      },
      {
        title: "Stronger self-leadership",
        description:
          "Learners become better at making intentional choices under pressure.",
      },
      {
        title: "Better personal direction",
        description:
          "Individuals build clear goals tied to measurable progress in daily life.",
      },
    ],
    ctaLabel: "Join Self Development Programs",
    ctaHref: "/contact",
    theme: {
      accent: "#0EA5A4",
      gradientStart: "#ECFEFF",
      gradientEnd: "#F0F9FF",
    },
  },
  "youth-empowerment": {
    slug: "youth-empowerment",
    title: "Youth Empowerment",
    eyebrow: "Focus Area 02",
    description:
      "A leadership and opportunity engine that equips young people with confidence, practical skills, and clear pathways to civic and economic impact.",
    shortDescription:
      "Leadership, opportunity access, and practical skills for young changemakers.",
    tags: ["Leadership", "Employability", "Civic Impact"],
    metrics: [
      { label: "Young Leaders Trained", value: "1,800+" },
      { label: "Career Placements", value: "320" },
      { label: "Partner Organizations", value: "55" },
      { label: "Community Projects", value: "140" },
    ],
    pillars: [
      {
        title: "Leadership Development",
        description:
          "Youth-led sessions that build confidence, communication, and responsible decision-making.",
        icon: Lightbulb,
      },
      {
        title: "Skills for Work",
        description:
          "Hands-on tracks in digital skills, project delivery, and collaboration.",
        icon: BookOpen,
      },
      {
        title: "Opportunity Access",
        description:
          "Career guidance, internship pipelines, and partner introductions for real outcomes.",
        icon: Handshake,
      },
    ],
    initiatives: [
      {
        title: "Youth Leadership Bootcamp",
        description:
          "Intensive leadership training with challenge-based team projects.",
        cadence: "Quarterly",
        icon: Rocket,
      },
      {
        title: "Career Readiness Clinics",
        description:
          "CV labs, interview drills, and workplace readiness coaching for early professionals.",
        cadence: "Monthly",
        icon: GraduationCap,
      },
      {
        title: "Changemaker Grants",
        description:
          "Micro-grants and mentor support for youth-led solutions in local communities.",
        cadence: "Bi-annual",
        icon: Globe,
      },
    ],
    outcomes: [
      {
        title: "Increased employability",
        description:
          "Participants gain practical experience and stronger pathways into work or entrepreneurship.",
      },
      {
        title: "Stronger civic leadership",
        description:
          "Youth become active contributors to local problem solving and policy conversations.",
      },
      {
        title: "Sustained impact networks",
        description:
          "Graduates continue collaborating through mentorship and peer accountability circles.",
      },
    ],
    ctaLabel: "Partner for Youth Empowerment",
    ctaHref: "/sponsor",
    theme: {
      accent: "#0284C7",
      gradientStart: "#ECFEFF",
      gradientEnd: "#EFF6FF",
    },
  },
  community: {
    slug: "community",
    title: "Community",
    eyebrow: "Focus Area 03",
    description:
      "A trust-centered ecosystem where students, mentors, and local leaders collaborate to solve shared problems and build resilient support systems.",
    shortDescription:
      "Collective growth through collaboration, trust, and local action.",
    tags: ["Belonging", "Collaboration", "Impact"],
    metrics: [
      { label: "Community Members", value: "4,200+" },
      { label: "Local Chapters", value: "24" },
      { label: "Volunteer Hours", value: "12,500+" },
      { label: "Joint Projects", value: "210" },
    ],
    pillars: [
      {
        title: "Belonging Networks",
        description:
          "Inclusive spaces that connect learners across regions and shared goals.",
        icon: Users,
      },
      {
        title: "Shared Responsibility",
        description:
          "Peer accountability models where members support one another's commitments.",
        icon: Handshake,
      },
      {
        title: "Local Problem Solving",
        description:
          "Community teams identify needs and run practical interventions that scale.",
        icon: Target,
      },
    ],
    initiatives: [
      {
        title: "Chapter Activation Program",
        description:
          "Launch kits and operating playbooks for new regional community chapters.",
        cadence: "Rolling",
        icon: Globe,
      },
      {
        title: "Peer Accountability Pods",
        description:
          "Small circles with weekly goals, support check-ins, and shared progress updates.",
        cadence: "Weekly",
        icon: BadgeCheck,
      },
      {
        title: "Community Service Challenges",
        description:
          "Collaborative campaigns that mobilize youth around education and wellbeing goals.",
        cadence: "Monthly",
        icon: Rocket,
      },
    ],
    outcomes: [
      {
        title: "Deeper social trust",
        description:
          "Members report stronger belonging and reliable support for growth decisions.",
      },
      {
        title: "More coordinated action",
        description:
          "Chapters run recurring initiatives with shared standards and measurable targets.",
      },
      {
        title: "Sustainable local leadership",
        description:
          "Community volunteers transition into long-term leadership roles over time.",
      },
    ],
    ctaLabel: "Join the Community Network",
    ctaHref: "/sign-up",
    theme: {
      accent: "#0891B2",
      gradientStart: "#F0FDFA",
      gradientEnd: "#ECFEFF",
    },
  },
  "habit-leadership-sustainable-growth-in-education": {
    slug: "habit-leadership-sustainable-growth-in-education",
    title: "Habit Leadership & Sustainable Growth in Education",
    eyebrow: "Focus Area 04",
    description:
      "A school-centered model that combines habit science, leadership practice, and evidence-based coaching to improve student outcomes over time.",
    shortDescription:
      "Long-term educational outcomes powered by disciplined habits and leadership systems.",
    tags: ["Education", "Habits", "Sustainable Growth"],
    metrics: [
      { label: "Schools Engaged", value: "62" },
      { label: "Student Habit Scores", value: "+41%" },
      { label: "Teacher Coaches", value: "190" },
      { label: "Retention Improvement", value: "+18%" },
    ],
    pillars: [
      {
        title: "Habit Leadership Curriculum",
        description:
          "Daily and weekly routines that teach students how to lead themselves first.",
        icon: BookOpen,
      },
      {
        title: "Teacher-Led Coaching",
        description:
          "Educators track behavior patterns and guide sustainable learning practices.",
        icon: GraduationCap,
      },
      {
        title: "Growth Measurement",
        description:
          "Simple indicators that monitor consistency, engagement, and long-term progress.",
        icon: LineChart,
      },
    ],
    initiatives: [
      {
        title: "Classroom Habit Tracker",
        description:
          "Structured routines and scoreboards that make discipline visible and measurable.",
        cadence: "Daily",
        icon: BadgeCheck,
      },
      {
        title: "Student Leadership Labs",
        description:
          "Practical activities where learners own projects and reflect on outcomes.",
        cadence: "Weekly",
        icon: Lightbulb,
      },
      {
        title: "School Growth Review",
        description:
          "Termly reviews to refine instruction strategies and sustain healthy habits.",
        cadence: "Per Term",
        icon: Compass,
      },
    ],
    outcomes: [
      {
        title: "Improved learning discipline",
        description:
          "Students build routines that strengthen focus, attendance, and performance.",
      },
      {
        title: "Teacher confidence at scale",
        description:
          "Educators use clear behavior data to coach students more effectively.",
      },
      {
        title: "Durable education growth",
        description:
          "Schools sustain performance improvements through repeatable systems.",
      },
    ],
    ctaLabel: "Request an Education Partnership",
    ctaHref: "/contact",
    theme: {
      accent: "#2563EB",
      gradientStart: "#EFF6FF",
      gradientEnd: "#F0F9FF",
    },
  },
  "technology-infrastructure-for-discipline": {
    slug: "technology-infrastructure-for-discipline",
    title: "Technology Infrastructure for Discipline",
    eyebrow: "Focus Area 05",
    description:
      "Digital systems and accountability architecture that turn discipline into a repeatable process through transparent tracking, alerts, and dashboards.",
    shortDescription:
      "Technology systems that make discipline trackable, transparent, and repeatable.",
    tags: ["Infrastructure", "Data", "Accountability"],
    metrics: [
      { label: "Platforms Deployed", value: "17" },
      { label: "Active Daily Users", value: "9,000+" },
      { label: "Automated Alerts", value: "120k+" },
      { label: "Process Compliance", value: "92%" },
    ],
    pillars: [
      {
        title: "Digital Discipline Workflows",
        description:
          "Structured check-ins, reminders, and escalation paths built into daily operations.",
        icon: Cpu,
      },
      {
        title: "Data Integrity & Trust",
        description:
          "Reliable data pipelines, role-based access, and transparent reporting standards.",
        icon: ShieldCheck,
      },
      {
        title: "Connected Infrastructure",
        description:
          "Integrated tools that align educators, leaders, and teams around the same signals.",
        icon: Network,
      },
    ],
    initiatives: [
      {
        title: "Discipline Command Dashboard",
        description:
          "Unified dashboard for attendance, task completion, and behavior trend analysis.",
        cadence: "Real-time",
        icon: LineChart,
      },
      {
        title: "Accountability Notification Engine",
        description:
          "Automated nudges and escalation alerts to reduce delays and missed commitments.",
        cadence: "Always-on",
        icon: Rocket,
      },
      {
        title: "Policy-to-Platform Mapping",
        description:
          "Convert institutional policies into clear workflows and digital checkpoints.",
        cadence: "Quarterly",
        icon: BadgeCheck,
      },
    ],
    outcomes: [
      {
        title: "Faster operational response",
        description:
          "Leaders detect discipline gaps early and intervene before issues scale.",
      },
      {
        title: "Reduced process friction",
        description:
          "Automation removes repetitive follow-ups and improves execution speed.",
      },
      {
        title: "Higher accountability culture",
        description:
          "Teams align around the same expectations with consistent visibility.",
      },
    ],
    ctaLabel: "Build the Infrastructure with Us",
    ctaHref: "/product",
    theme: {
      accent: "#0F766E",
      gradientStart: "#F0FDFA",
      gradientEnd: "#F8FAFC",
    },
  },
};

export const focusAreaOrder: FocusAreaSlug[] = [
  "self-development",
  "youth-empowerment",
  "community",
  "habit-leadership-sustainable-growth-in-education",
  "technology-infrastructure-for-discipline",
];

export const createFocusAreaMetadata = (slug: FocusAreaSlug): Metadata => {
  const content = focusAreaContent[slug];
  const url = `https://mikaelsoninitiative.org/${slug}`;

  return {
    title: `${content.title} | Mikaelson Initiative`,
    description: content.shortDescription,
    openGraph: {
      title: `${content.title} | Mikaelson Initiative`,
      description: content.shortDescription,
      url,
      images: [
        {
          url: "/assets/images/mikaelsonlogo.png",
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.title} | Mikaelson Initiative`,
      description: content.shortDescription,
      images: ["/assets/images/mikaelsonlogo.png"],
    },
  };
};