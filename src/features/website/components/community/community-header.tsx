import React from "react";

interface Props {
  label?: string;
  subtitle?: string;
  title: string;
}

export const CommunityHeader = ({ label, subtitle, title }: Props) => {
  return (
    <div className="mb-12 space-y-5 max-w-3xl mx-auto flex flex-col items-center px-4">
      {label && (
        <div className="text-sm w-fit font-semibold border px-5 py-3 bg-blue-500 uppercase tracking-wide mb-8 shadow-lg text-white rounded-full">
          {label}
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-center w-full text-gray-600 text-lg max-w-md">
        {subtitle}
      </p>
    </div>
  );
};
