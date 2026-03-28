"use client";

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import Image from "next/image";

const Maintenance: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-sky-50 via-sky-100 to-slate-50">
      <main className="flex flex-1 items-center justify-center px-4 py-10 mt-16">
        <div className="w-full max-w-lg">
          <div className="relative overflow-hidden rounded-2xl border border-sky-200 bg-white p-10 text-center shadow-lg">
            {/* Top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-300 to-blue-500 rounded-t-2xl" />

            {/* Logo Section */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex rounded-full bg-teal-50 p-4">
                <Image
                  height={64}
                  width={64}
                  src="/assets/images/mikaelsonlogo.png"
                  alt="Mikaelson Initiative"
                  className="h-16 w-auto drop-shadow-md"
                />
              </div>
            </div>

            {/* Message Section */}
            <div className="space-y-6">
              <div>
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
                  We&apos;re updating features
                </h1>
                <p className="text-lg font-normal text-gray-600">
                  Kindly wait while we enhance your experience
                </p>
              </div>

              {/* Progress Section */}
              <div className="space-y-3 rounded-md border border-gray-200 bg-slate-50 p-4">
                <div className="h-2 w-full overflow-hidden rounded bg-gray-200 shadow-inner">
                  <div className="h-full animate-progress rounded bg-gradient-to-r from-teal-300 to-blue-500 shadow" />
                </div>
                <p className="text-sm font-medium text-gray-500">
                  Updates in progress...
                </p>
              </div>

              {/* Action Section */}
              <div className="pt-4">
                <Link
                  href="/"
                  className="group relative inline-flex min-h-[48px] items-center justify-center gap-2 overflow-hidden rounded-md bg-gradient-to-br from-teal-300 to-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <Home className="text-sm" />
                  <span>Return to Homepage</span>
                  <span className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Maintenance;
