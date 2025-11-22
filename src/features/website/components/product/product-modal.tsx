"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Product } from "@/constants";
import { Check } from "lucide-react";
import Link from "next/link";

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, open, onClose }: Props) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center flex-col gap-3 text-2xl font-bold">
            <span className="text-3xl lg:text-8xl">{product.icon}</span>
            <span className="">{product.title}</span>

            <p className="bg-gray-50 py-1 px-3 text-brand-primary rounded-full text-sm text-center w-max">
              {product.category}
            </p>
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable Section */}
        <ScrollArea className="h-[300px] pr-3 mt-4 space-y-4">
          <div className="text-center mb-10">
            <p className="font-bold text-2xl mb-3">How RIO Hub Solves This</p>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div>
            <h3 className="font-semibold">Features:</h3>
            <ul className=" text-gray-700 space-y-2">
              {product.features.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 border-t first:border-t-0 p-2"
                >
                  <div className="h-4 w-4 bg-brand-primary rounded-full text-white flex-center">
                    <Check className="size-3" strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#edf7fe] p-5 text-center rounded-2xl border-l-4 border-l-brand-primary my-10">
            <h3 className="font-semibold mb-5">The Solution</h3>
            <p className="text-gray-600 leading-relaxed text-pretty">
              {product.longDesc}
            </p>
          </div>
          <div className="flex-center">
            <Button asChild className="btn btn-primary text-black">
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
