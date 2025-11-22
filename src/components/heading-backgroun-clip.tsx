import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title: string;
  className?: string
}

export const HeadingClipText = ({ title, className }: Props) => {
  return (
    <h1
      className={cn(
        "text-5xl bg-[linear-gradient(181deg,#d2d2d2_0.8%,#474747_99.2%)] mb-6 text-[2.3rem] font-extrabold leading-[1.2] tracking-[-0.025em] bg-clip-text text-pretty text-transparent",
        className
      )}
    >
      {title}
    </h1>
  );
};
