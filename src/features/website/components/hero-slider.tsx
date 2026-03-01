"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

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
  overlayOpacity = 0.5,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaTextRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hasAnimatedIn = useRef(false);

  // Animate text in only once on mount
  useEffect(() => {
    if (slides.length === 0 || hasAnimatedIn.current) return;
    hasAnimatedIn.current = true;
    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.inOut" },
    )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        ctaTextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );
  }, [slides.length]);

  // Auto-rotate background images only
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  if (slides.length === 0) {
    return (
      <div
        className={`relative w-full ${height} flex items-center justify-center bg-gray-900`}
      >
        <p className="text-white text-xl">No slides available</p>
      </div>
    );
  }

  // Use the first slide's text (or whichever you want to display statically)
  const { title, subtitle, ctaText1, ctaText2 } = slides[0];

  return (
    <div
      className={`relative w-full max-w-full rounded-br-4xl rounded-bl-4xl ${height} overflow-hidden ${className}`}
    >
      {/* Background Images — only these cycle */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentIndex === index ? 1 : 0,
          }}
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
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        </div>
      ))}

      {/* Content Container — text stays static */}
      <div
        ref={overlayRef}
        className="relative z-10 flex flex-col space-y-6 justify-center h-full md:pl-10 pl-4 text-center"
      >
        <h1
          ref={titleRef}
          className="text-3xl md:text-[2.1rem]  font-bold text-white mb-6 max-w-3xl text-left leading-[1.2]"
        >
          {title}
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-[1.1rem] text-left  text-gray-200 max-w-2xl"
        >
          {subtitle}
        </p>

        {/* cta */}
        <div className="flex md:gap-2 gap-4 ">
          {/* 1 */}
          <button className="text-left rounded-md md:px-4 md:py-2 px-2 py-1 text-sm font-semibold bg-transparent hover:border-cyan-300/50  text-white  transition-colors duration-300 text-cyan-300/50 border-2 hover:border-cyan-300/50 focus:outline-none focus:ring-2  focus:ring-cyan-300/60" ref={ctaTextRef}>
           
              {ctaText1}
           
          </button>
          {/* 2 */}
          <button
            ref={ctaTextRef}
            className="text-left rounded-md md:px-4 md:py-2 px-2 py-1 text-sm font-semibold  text-white  transition-colors duration-300 bg-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
          >
            {ctaText2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
