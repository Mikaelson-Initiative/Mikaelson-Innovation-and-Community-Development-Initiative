import { footerLinks } from "@/constants";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReportsDropdown from "./annual-report";
import { XformerlyTwitter } from "./icons/Twitter";
import { Instagram } from "./icons/Instagram";
import { LinkedIn } from "./icons/LinkedIn";
import { YouTube } from "./icons/Youtube";
import { NewsletterForm } from "./newsletter-form";

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
    <footer className="bg-white text-black  mt-10">

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-12">

        {/* Brand + Newsletter row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 pb-12 border-b border-black/10">

          {/* Brand */}
          <div className="flex flex-col gap-5 max-w-xs">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/images/mikaelsonlogo.png"
                alt="Mikaelson Initiative"
                width={36}
                height={36}
                className="rounded-md"
              />
              <span className="font-extrabold text-lg tracking-tight text-black ">
                Mikaelson Initiative
              </span>
            </Link>
            <p className="text-sm text-black/60  leading-relaxed">
              Elevating humanity through leadership, technology, and community — one student at a time.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:mikaelsoninitiative@gmail.com"
                className="flex items-center gap-2.5 text-sm text-black/50  hover:text-[#5CE1E6] dark:hover:text-[#5CE1E6] transition-colors duration-200 group"
              >
                <Mail size={14} />
                mikaelsoninitiative@gmail.com
              </a>
              <a
                href="https://www.google.com/maps"
                className="flex items-center gap-2.5 text-sm text-black/50 hover:text-[#5CE1E6] dark:hover:text-[#5CE1E6] transition-colors duration-200"
              >
                <MapPin size={14} />
                Nigeria, Africa
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 max-w-md w-full">
            <div>
              <p className="text-[#5CE1E6] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Stay in the loop
              </p>
              <h3 className="text-xl font-bold text-black  leading-snug">
                Get updates from Mikaelson
              </h3>
              <p className="text-sm text-black/60  mt-1">
                Stories, program launches, and leadership resources — straight to your inbox.
              </p>
            </div>
            <NewsletterForm />
            <p className="text-xs text-black ">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pt-12">
          {footerLinks.map((section) => (
            <div key={section.section}>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-black/40  mb-4">
                {section.section}
              </h3>
              <nav className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-black/60  hover:text-[#5CE1E6] dark:hover:text-[#5CE1E6] hover:translate-x-0.5 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          {/* Social + Reports */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-black/40 ">
              Follow Us
            </h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.ariaLabel}
                  title={item.label}
                  className="
                    flex items-center justify-center
                    w-9 h-9 rounded-lg
                    
                    text-white/60 
                     hover:text-[#5CE1E6]
                    dark:hover:text-[#5CE1E6]
                    transition-all duration-200
                  "
                >
                  <item.icon className="w-3 h-3" />
                </a>
              ))}
            </div>
            <ReportsDropdown />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 dark:border-black/8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-black">
            © {new Date().getFullYear()} Mikaelson Initiative. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6]" />
            <span className="text-xs text-black ">
              Building Africa's next generation of leaders
            </span>
          </div>
        </div>
      </div>
      <hr />
      
    </footer>
  );
};
