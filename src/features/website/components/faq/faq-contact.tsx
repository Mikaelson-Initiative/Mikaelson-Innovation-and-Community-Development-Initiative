import Link from "next/link";
import React from "react";

const FaqContactSection: React.FC = () => {
  return (
    <div className="text-center max-w-6xl mx-auto mt-16 p-8 bg-gradient-to-br from-slate-50 to-slate-200 rounded-2xl shadow-sm">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Still have questions?
      </h3>
      <p className="text-gray-600 mb-8">
        Can&apos;t find the answer you&apos;re looking for? We&apos;d love to
        help you out.
      </p>
      <Link href="/contact">
        <button className="bg-teal-500/80 hover:bg-teal-600 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 cursor-pointer">
          Contact Support
        </button>
      </Link>
    </div>
  );
};

export default FaqContactSection;
