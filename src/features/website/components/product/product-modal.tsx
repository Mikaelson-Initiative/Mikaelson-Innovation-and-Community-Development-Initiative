"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Product } from "@/constants";

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, open, onClose }: Props) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-bold">
            <span className="text-3xl">{product.icon}</span>
            {product.title}
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable Section */}
        <ScrollArea className="h-[300px] pr-3 mt-4 space-y-4">
          <p className="text-gray-600">{product.description}</p>

          <div>
            <h3 className="font-semibold">Features:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {product.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Full Description:</h3>
            <p className="text-gray-600 leading-relaxed">{product.longDesc}</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
