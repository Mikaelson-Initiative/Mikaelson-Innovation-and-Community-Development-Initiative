import HeroSlider, { HeroSlide } from "./hero-slider";

// we need more photos actually ..... 
const heroSlides: HeroSlide[] = [
   {
      image: '/assets/images/mikealson-hero.png',
      title: `Youth Leadership & Personal Development Programs for African Students`,
      subtitle: `The Mikaelson Initiative is a youth development organization equipping African students with practical leadership skills, personal growth systems, and structured accountability.`,
      ctaText1: "Join The Community",
      ctaText2: "Read More",
    },
   {
      image: '/assets/images/mikaelson-landing.png',
      title: '',
      ctaText1: "",
      ctaText2: "",
    },
   {
      image: '/assets/images/hero-img-ii.png',
      title: '',
      ctaText1: "",
      ctaText2: "",
    },
  //  {
  //     image: '/assets/images/hero-image-i.png',
  //     title: '',
  //     ctaText1: "",
  //     ctaText2: "",
  //   },
   {
      image: '/assets/images/mikaelson-landing-ii.png',
      title: '',
      ctaText1: "",
      ctaText2: "",
      
    },   
];


export default function HomePage() {
  return (
    <main>
      <HeroSlider slides={heroSlides} />
    </main>
  );
}



