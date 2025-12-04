// components/SdgSection.tsx
import Image from "next/image";

type Sdg = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  color: string;
};

const sdgs: Sdg[] = [
  {
    id: 4,
    title: "SDG 4",
    subtitle: "Quality Education",
    description:
      "Empowering students and educators with technology-driven learning solutions and productivity tools",
    imgSrc: "/sdg/sdg-4.png",

    color: "text-[#c5192d]",
  },
  {
    id: 8,
    title: "SDG 8",
    subtitle: "Decent Work & Economic Growth",
    description:
      "Creating opportunities for skill development and fostering entrepreneurship in African communities",
    imgSrc: "/sdg/sdg-8.png",
    color: "text-[#a21942]",
  },
  {
    id: 9,
    title: "SDG 9",
    subtitle: "Industry, Innovation & Infrastructure",
    description:
      "Building innovative technology solutions and digital infrastructure for sustainable development",
    imgSrc: "/sdg/sdg-9.png",
    color: "text-[#fd6925]",
  },
  {
    id: 11,
    title: "SDG 11",
    subtitle: "Sustainable Cities & Communities",
    description:
      "Fostering community collaboration and building sustainable, inclusive local ecosystems",
    imgSrc: "/sdg/sdg-11.png",
    color: "text-[#fd9d24]",
  },
  {
    id: 17,
    title: "SDG 17",
    subtitle: "Partnerships for the Goals",
    description:
      "Building strategic partnerships with organizations, institutions, and communities for collective impact",
    imgSrc: "/sdg/sdg-17.png",
    color: "text-[#19486a]",
  },
];

export default function SdgSection() {
  return (
    <section className="bg-white py-20 px-6 dark:bg-brand-dark-bg-nav">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 dark:text-brand-text-dark">
          Contributing to the UN Sustainable Development Goals
        </h2>
        <p className="text-lg text-gray-500 mb-12 dark:text-brand-text-dark">
          Our work directly aligns with and contributes to achieving these
          global goals
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {sdgs.map((sdg) => (
            <div
              key={sdg.id}
              className="bg-white relative border-2 group border-gray-200 rounded-xl p-8 text-center hover:shadow hover:shadow-[#c4f1f3] hover:border-brand-primary transition-all hover:scale-105 cursor-pointer"
            >
              <div className="group-hover:-translate-y-1.5 transition-transform duration-300">
                <div className="w-32 h-32 group-hover:scale-105 transition-transform duration-200 mx-auto mb-6 relative">
                  <Image
                    src={sdg.imgSrc}
                    alt={`${sdg.title}: ${sdg.subtitle}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {sdg.title}
                </h3>
                <h4 className={`text-lg font-semibold mb-3 ${sdg.color}`}>
                  {sdg.subtitle}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {sdg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
