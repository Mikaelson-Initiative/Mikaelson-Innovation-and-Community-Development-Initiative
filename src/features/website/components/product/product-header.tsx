import React from "react";

interface Props {
  title: string;
  subTitle?: string;
}

export const ProductHeader = ({ title, subTitle }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 mb-10">
      <h1 className="text-2xl lg:text-[48px] text-black font-extrabold">{title}</h1>
      <div className="bg-linear-to-r from-[#5ce1e6] to-[#3b82f6] w-[100px] h-1 rounded-full" />
      <p className="max-w-md text-sm md:text-xl text-center text-muted-foreground">{subTitle}</p>
    </div>
  );
};
