"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
  ctaText1: string;
  ctaText2: string;
  alt?: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
  showDots?: boolean;
  height?: string;
  overlayOpacity?: number;
  className?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoPlayInterval = 7000,
  height = "h-screen",
  overlayOpacity = 0.55,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaTextRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hasAnimatedIn = useRef(false);

  useEffect(() => {
    if (slides.length === 0 || hasAnimatedIn.current) return;
    hasAnimatedIn.current = true;
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.inOut" })
      .fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(ctaTextRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  if (slides.length === 0) {
    return (
      <div className={`relative w-full ${height} flex items-center justify-center bg-gray-900`}>
        <p className="text-white text-xl">No slides available</p>
      </div>
    );
  }

  const { title, subtitle, ctaText1, ctaText2 } = slides[0];

  return (
    <div className={`relative w-full max-w-full rounded-br-4xl rounded-bl-4xl ${height} overflow-hidden ${className}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: currentIndex === index ? 1 : 0 }}
        >
          {slide.image.startsWith("http") ? (
            <Image
              src={slide.image}
              alt={slide.alt || slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              width={100}
              height={100}
            />
          ) : (
            <Image
              src={slide.image}
              alt={slide.alt || slide.title}
              fill
              priority={index === 0}
              quality={90}
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
        </div>
      ))}

      <div
        ref={overlayRef}
        className="relative z-10 flex flex-col justify-end h-full px-5 md:px-10 pb-16 md:pb-20"
      >
        <div className="max-w-3xl flex flex-col gap-5">

          {/* <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#5CE1E6] rounded-full" />
            <span className="text-[#5CE1E6] text-xs font-semibold tracking-[0.2em] uppercase">
              Mikaelson Initiative
            </span>
          </div> */}

          <h1
            ref={titleRef}
            className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-white leading-[1.15] tracking-[-0.025em]"
          >
            {title}
          </h1>

          <p
            ref={subtitleRef}
            className="text-[15px] md:text-[1.05rem] text-white/70 leading-relaxed max-w-xl"
          >
            {subtitle}
          </p>

          <div className="flex items-center gap-3 pt-1">
            <Link href="/community" >
            <button
              ref={ctaTextRef}
              className="px-6 py-3 text-sm font-semibold text-[#5CE1E6] border-2 border-[#5CE1E6]/60 rounded-full hover:border-[#5CE1E6] hover:bg-[#5CE1E6]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]"
            >
              {ctaText1}
            </button>
            
            </Link>

            <Link href="/about-us">
            
            <button className="px-6 py-3 text-sm font-semibold text-black bg-[#5CE1E6] rounded-full hover:bg-[#4bcdd2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]">
              {ctaText2}
            </button>
            </Link>
          </div>
        </div>

        <div className="flex mx-auto items-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentIndex === i ? "2rem" : "0.5rem",
                height: "0.5rem",
                background: currentIndex === i ? "#5CE1E6" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;