import { footerLinks } from "@/constants";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReportsDropdown from "./annual-report";
import { XformerlyTwitter } from "./icons/Twitter";
import { Instagram } from "./icons/Instagram";
import { LinkedIn } from "./icons/LinkedIn";
import { YouTube } from "./icons/Youtube";

export const socialLinks = [
  {
    label: "X (formerly Twitter)",
    href: "https://x.com/mcdti_org",
    ariaLabel: "X",
    icon: XformerlyTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mikaelson_initiative/",
    ariaLabel: "Instagram",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mikaelson-initiative/",
    ariaLabel: "LinkedIn",
    icon: LinkedIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheMikaelsonCommunity",
    ariaLabel: "YouTube",
    icon: YouTube,
  },
];

export const Footer = () => {
  return (
    <footer className="pt-10 mt-5 pb-5 px-10 md:px-5 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="w-full max-w-sm py-10 mx-auto space-y-4 text-center">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/assets/images/mikaelsonlogo.png"
              alt="mikaelinitiativelogo"
              width={50}
              height={50}
              className="rounded-md"
            />
            <h1 className="font-extrabold text-2xl">Mikaelson Initiative</h1>
          </div>
          <p className="">
            Elevating humanity through technology and community.
          </p>
        </div>

        {/* other links */}
        <div className="py-20">
          <div className="">
            <div className="">
              <div className="max-w-80 hidden flex-col gap-2">
                <div className="flex md:items-center gap-2 flex-col md:flex-row items-start">
                  <Image
                    src="/assets/images/mikaelsonlogo.png"
                    alt="mikaelinitiativelogo"
                    width={50}
                    height={50}
                  />
                  <h1 className="font-extrabold text-xl">
                    Mikaelson Initiative
                  </h1>
                </div>
                <p className="text-sm">
                  Elevating humanity through technology and community.
                </p>
                <div className="flex flex-row md:flex-col gap-2">
                  <a
                    href="mailto:mikaelsoninitiative@gmail.com"
                    className="flex flex-row items-center gap-2 hover:text-blue-400"
                  >
                    <Mail className="text-2xl" />
                    <span className="text-sm hidden md:flex">
                      mikaelsoninitiative@gmail.com
                    </span>
                  </a>
                  <a
                    href="https://www.google.com/maps"
                    className="flex flex-row items-center gap-2 hover:text-blue-400"
                  >
                    <MapPin className="text-2xl" />
                    <span className="text-sm hidden md:flex">
                      Location here
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {footerLinks.map((section) => (
                <div key={section.section} className="">
                  <h3 className="mb-2 font-extrabold text-lg md:text-2xl">
                    {section.section}
                  </h3>
                  <nav className="flex flex-col gap-2 text-sm text-gray-700">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="hover:text-blue-500"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
              <div className="social-links col-span-2 md:col-span-1 flex flex-col items-center gap-4">
                <h1 className="font-extrabold text-lg md:text-2xl">Connect With Us</h1>
                <div className="gap-4 flex">
                  {socialLinks.map((item) => (
                    <a
                      key={item.href}
                      target="_blank"
                      rel="noreferrer"
                      title={item.label}
                      aria-label={item.ariaLabel}
                      href={item.href}
                    >
                      <div className="">
                        {item.label === "Instagram" ? (
                          <Image
                            src={"/assets/images/instagram-icon.svg"}
                            width={30}
                            height={20}
                            alt="instagram"
                          />
                        ) : (
                          <item.icon className="w-8 h-8" />
                        )}
                      </div>
                    </a>
                  ))}
                </div>
                <ReportsDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center mt-5">
        © 2025 Mikaelson Initiative. All rights reserved.
      </p>
    </footer>
  );
};
