export const footerLinks = [
  {
    section: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Community", href: "/community" },
      { label: "Labs", href: "/labs" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    section: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    section: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
    ],
  },
];
export interface TeamMember {
  name: string;
  country: string;
  role: string;
  img: string;
  bio: string;
  department?: FilterType;
}

// Filter options
export const FILTERS = {
  ALL: "All",
  TECH: "Tech team",
  OPERATIONS: "Operations",
  MENTORS: "Mentors",
  ADVISORS: "Advisors & Patrons",
  TRUSTEES: "Board of Trustees",
} as const;

export type Product = {
  icon: string;
  id: string;
  color: string;
  category: string;
  description: string;
  title: string;
  image: string;
  features: Array<string>;
  longDesc: string;
};

export type FilterType = keyof typeof FILTERS;

// Team data
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Khadijah Abdul Juma",
    department: "ADVISORS",
    country: "KE",
    role: "Advisor on Partnership and Growth Network",
    img: "/assets/images/Khadija-Abdul.png",
    bio: "Khadija Abdul Juma is a results-driven technology and media leader with over 12 years of experience advancing digital transformation and economic opportunities across Africa. She is passionate about improving lives and livelihoods through innovation, community empowerment, and strategic partnerships.",
  },
  {
    name: "Juliana Sarya",
    country: "TZ",
    department: "OPERATIONS",
    role: "Project Manager Associate",
    img: "/assets/images/Juliana-Sarya.jpg",
    bio: "I am Juliana Sarya, an IT professional, digital activist, and social innovator passionate about using technology to solve real community challenges. Over the past years, I have led initiatives that empower young people, women, and persons with disabilities through digital literacy, IoT, robotics, and human-centered design. I led IOTeach, an EdTech project that equips students with future-ready skills and encourages them to create solutions for issues such as education gaps, inclusion, and community development",
  },
  {
    role: "Secretary, Board of Trustees",
    department: "TRUSTEES",
    country: "NG",
    name: "Imam Bashir Abdulwahab",
    img: "/assets/images/Imam-Bashir.JPG",
    bio: "Imam Bashir serves as the Secretary of the Trustees, supporting the organization with clear communication, record stewardship, and dependable coordination. He is committed to using technology and organized systems to strengthen community service and improve how people connect with support resources. His work reflects a dedication to uplift humanity, encourage understanding, and promote meaningful social impact.",
  },

  {
    name: "Oluwasegun M. Olukayode",
    department: "OPERATIONS",
    country: "NG",
    role: "Founder & Executive Director",
    img: "/assets/images/20240726_164330.jpeg",
    bio: "Visionary leader with over 10 years of experience in sustainable technology and community development. Passionate about empowering African communities through innovative solutions.",
  },

  {
    name: "Irene Ezechi",
    role: "Program Management Lead",
    department: "OPERATIONS",
    country: "NG",
    img: "/assets/images/Irene-Ezechi.jpg",
    bio: "Program management lead coordinating planning, execution, and impact across initiatives.",
  },
  {
    name: " Okikiolu Eniola-Glory",
    department: "OPERATIONS",
    country: "NG",
    role: "Community Operations Lead",
    img: "/assets/images/eniola.jpeg",
    bio: "My name is Eniola-Glory, an Hr manager and vocal artist, an introvert who loves growing, learning and being impactful.",
  },
  {
    name: "Iretioluwa Ogunmola",
    department: "TECH",
    role: "Product Management Lead",
    country: "NG",
    img: "/assets/images/Ireti.jpeg",
    bio: "I'm a Product Manager who loves understanding user needs and turning them into products that feel effortless to use. I collaborate with designers and engineers to plan, build, and launch features that solve real problems and create value. I enjoy working with data, learning continuously, and shipping meaningful improvements one iteration at a time.",
  },
  {
    name: "Hammed Adedamola",
    department: "OPERATIONS",
    country: "NG",
    role: "Social Media Manager Lead",
    img: "/assets/images/Hammed.JPG",
    bio: "I am a Product Manager who is people-driven and passionate about exploring new ideas, connecting with others, and expanding my knowledge. Outside of work, I enjoy watching movies, learning new things, and meeting new people.",
  },
  {
    name: "Inioluwa Afolabi",
    department: "OPERATIONS",
    country: "NG",
    role: "Project Manager – 30 Days Reset Challenges",
    img: "/assets/images/afolabi.jpeg",
    bio: "My name is Inioluwa Afolabi. I'm a project manager passionate about learning, growth, leadership and making positive impact that leads to betterment of livelihood. In addition, I'm an advocate for sustainability and digital transformation.",
  },

  {
    name: "Ariyo Aresa",
    department: "TECH",
    country: "NG",
    role: "Frontend Developer",
    img: "/assets/images/Ariyo-Aresa.jpg",
    bio: "I'm Ariyo Olatunji-Aresa Aresa, a Frontend engineer with about 4 years of experience who has worked on several projects across several industries. I'm also an engineering student",
  },
  {
    name: "Mercy kalu",
    department: "TECH",
    country: "NG",
    role: "Product Designer",
    img: "/assets/images/Mercy-Kalu.jpg",
    bio: "I’m a product designer who creates simple, useful, and meaningful digital products",
  },
  {
    name: "Neh Glory",
    department: "OPERATIONS",
    country: "NG",
    role: "Project Manager – Digital Literacy (Cybersecurity)",
    img: "/assets/images/Neh-Glory.jpeg",
    bio: "I am a certified IT specialist and a tier1 SOC analyst. A tech enthusiast passionate about securing systems and empowering others through training programs.",
  },
  {
    name: "Chukwu Ajah Sebastian",
    department: "TECH",
    country: "NG",
    role: "Frontend Developer",
    img: "/assets/images/chukwu-ajah.jpg",
    bio: "I'm chukwu Ajah sabastine A front end developer with 2 years of experience. I love building products that solves real problems and participates actively when in a team to make sure the teams vision and mission are accomplished",
  },
  {
    name: "Boluwatife Adeleke",
    department: "TECH",
    role: "Product Marketing Manager",
    country: "NG",
    img: "/assets/images/Boluwatife-Mercy.jpeg",
    bio: "Boluwatife Adeleke is a purpose-driven social impact leader working at the intersection of education, youth empowerment, and operational systems building.",
  },
];

export const products: Product[] = [
  {
    id: "hub-education",
    icon: "🎓",
    title: "RIO Hub for Education",
    category: "Education & Learning",
    color: "blue",
    description:
      "Track academic progress, study habits, and engagement. Empower students and educators with data-driven insights for better learning outcomes.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Student progress tracking",
      "Educator effectiveness analytics",
      "Institutional insights dashboard",
    ],
    longDesc:
      "RIO Hub for Education transforms learning environments by providing real-time analytics on student engagement, progress tracking, and personalized learning paths. Educators gain actionable insights to improve teaching effectiveness while students stay motivated through gamified challenges and peer accountability.",
  },
  {
    id: "hub-corporate",
    title: "RIO Hub for Companies",
    category: "Business & Enterprise",
    color: "cyan",
    icon: "🏢",
    description:
      "Boost workplace productivity and employee engagement. Track team performance, collaboration metrics, and professional development goals.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Team productivity analytics",
      "Employee engagement tracking",
      "Performance insights dashboard",
    ],
    longDesc:
      "RIO Hub for Companies revolutionizes workplace productivity by tracking team collaboration, project milestones, and employee wellness. Our AI-driven insights help managers identify bottlenecks, optimize workflows, and foster a culture of continuous improvement and accountability.",
  },
  {
    id: "hub-creators",
    title: "RIO Hub for Content Creators",
    category: "Content & Media",
    color: "purple",
    icon: "🎬",
    description:
      "Manage content schedules, track creative output, and build consistent habits. Stay accountable to your audience and creative goals.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Content calendar management",
      "Creative habit tracking",
      "Audience engagement metrics",
    ],
    longDesc:
      "RIO Hub for Content Creators streamlines content production with intelligent scheduling, audience analytics, and creative habit tracking. Stay consistent with your content calendar while building sustainable creative practices that keep your audience engaged.",
  },
  {
    id: "hub-developers",
    title: "RIO Hub for Developers",
    color: "green",
    category: "Technology & Dev",
    icon: "💻",
    description:
      "Track coding habits, project milestones, and technical skill development. Build consistent development practices and collaborate effectively.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Code contribution tracking",
      "Project milestone management",
      "Technical skill progression",
    ],
    longDesc:
      "RIO Hub for Developers enhances coding productivity through commit tracking, project milestone management, and skill progression analytics. Build better coding habits, collaborate effectively with your team, and advance your technical expertise systematically.",
  },
  {
    id: "hub-startups",
    title: "RIO Hub for Startups",
    category: "Innovation & Startups",
    icon: "🚀",
    color: "orange",
    description:
      "Monitor innovation cycles, team productivity, and startup growth metrics. Foster a culture of accountability and rapid iteration.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Sprint tracking",
      "Team velocity metrics",
      "Innovation pipeline management",
    ],
    longDesc:
      "RIO Hub for Startups accelerates innovation by tracking sprint velocity, team productivity, and product development cycles. Foster a culture of rapid iteration and accountability while maintaining clear visibility into your startup's growth metrics.",
  },
  {
    id: "hub-government",
    title: "RIO Hub for Government",
    category: "Public Sector",
    color: "red",
    icon: "🏛️",
    description:
      "Enhance public sector productivity and service delivery. Track project timelines, citizen engagement, and departmental performance.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Project timeline tracking",
      "Service delivery metrics",
      "Departmental analytics",
    ],
    longDesc:
      "RIO Hub for Government improves public sector efficiency through project timeline tracking, service delivery metrics, and departmental performance analytics. Enhance transparency, accountability, and citizen engagement with data-driven governance.",
  },
  {
    id: "hub-nonprofit",
    title: "RIO Hub for Nonprofits",
    category: "Social Impact",
    color: "pink",
    icon: "🤝",
    description:
      "Maximize impact with volunteer management, program tracking, and donor engagement insights. Build sustainable community initiatives.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Volunteer coordination",
      "Program impact tracking",
      "Donor engagement analytics",
    ],
    longDesc:
      "RIO Hub for Nonprofits maximizes social impact through volunteer coordination, program effectiveness tracking, and donor engagement analytics. Build sustainable community initiatives with clear metrics that demonstrate your organization's impact.",
  },
  {
    id: "hub-sports",
    title: "RIO Hub for Sports & Fitness",
    icon: "⚽",
    category: "Sports & Wellness",
    color: "teal",
    description:
      "Track training routines, athletic performance, and team coordination. Build winning habits and achieve fitness goals consistently.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Training schedule management",
      "Performance metrics tracking",
      "Team coordination tools",
    ],
    longDesc:
      "RIO Hub for Sports & Fitness optimizes athletic performance through training schedule management, performance metrics tracking, and team coordination tools. Build winning habits, track progress, and achieve fitness goals with data-driven insights.",
  },
  {
    id: "hub-creative",
    title: "RIO Hub for Creative Media",
    category: "Creative Industries",
    color: "indigo",
    icon: "🎨",
    description:
      "Manage creative projects, track production workflows, and collaborate with teams. Deliver creative excellence on schedule.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Production workflow tracking",
      "Creative project management",
      "Team collaboration tools",
    ],
    longDesc:
      "RIO Hub for Creative Media streamlines production workflows with project management, creative collaboration tools, and deadline tracking. Deliver creative excellence on schedule while maintaining team coordination and quality standards.",
  },
  {
    id: "hub-research",
    title: "RIO Hub for Research",
    category: "Research & Academia",
    color: "violet",
    icon: "🔬",
    description:
      "Track research milestones, manage academic collaborations, and monitor publication progress. Advance knowledge systematically.",
    image: "/assets/images/product-hub.svg",
    features: [
      "Research milestone tracking",
      "Collaboration management",
      "Publication progress monitoring",
    ],
    longDesc:
      "RIO Hub for Research advances academic excellence through milestone tracking, collaboration management, and publication progress monitoring. Systematically advance knowledge while maintaining clear visibility into research outcomes and team contributions.",
  },
];
