"use client";

import { Button } from "@/components/ui/button";
import { Product, products } from "@/constants";
import { ArrowRight, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductModal } from "./product-modal";

interface Props {
  search: string;
}

export const ProductsGrid = ({ search }: Props) => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Reset to page 1 when search changes
  const pageSizes = [4, 4, 2];

  // Adapt pagination to filtered results
  const slicedGroups = useMemo(() => {
    const groups: Product[][] = [];
    let start = 0;

    for (const size of pageSizes) {
      if (start >= filteredProducts.length) break;
      groups.push(filteredProducts.slice(start, start + size));
      start += size;
    }

    return groups;
  }, [filteredProducts]);

  const totalPages = slicedGroups.length;
  const currentItems = slicedGroups[page - 1] || [];

  const prevPage = () => page > 1 && setPage(page - 1);
  const nextPage = () => page < totalPages && setPage(page + 1);
  const goToPage = (p: number) => setPage(p);

  return (
    <div className="space-y-10">
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="rounded-4xl overflow-hidden cursor-pointer group"
            onClick={() => setSelected(product)}
          >
            <div
              className="h-60 flex items-center justify-center relative"
              style={{ backgroundColor: product.color }}
            >
              <div className="decoration" />
              <span className="absolute max-w-[80%] text-center text-[clamp(2rem,4vw,3rem)]/12 font-extrabold  left-[2rem] top-[2rem]  text-transparent  [-webkit-text-stroke:2px_rgba(255,255,255,0.3)]">
                {product.title}
              </span>
              <span className="text-9xl relative">{product.icon}</span>
            </div>

            <div className="flex justify-between items-center bg-[#f5f5f5] p-5">
              <div className="flex items-center gap-2">
                <Tag />
                <p>{product.category}</p>
              </div>

              <Button className="rounded-full py-6 px-8 lg:text-[14.4px] duration-300 transition-all hover:translate-x-1 hover:bg-brand-primary border-2 border-black hover:text-black font-semibold">
                Explore
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 py-10">No matching results.</p>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="p-2 rounded-full border border-gray-300 disabled:opacity-30 hover:bg-gray-100 transition"
          >
            <ChevronLeft />
          </button>

          <div className="flex gap-3">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === page;

              return (
                <span
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`
                    cursor-pointer transition-all 
                    ${
                      active
                        ? "bg-[#5ce1e6] w-8 rounded-md"
                        : "bg-gray-300 w-3 rounded-full"
                    }
                    h-3 hover:bg-[#5ce1e6] hover:scale-110
                  `}
                ></span>
              );
            })}
          </div>

          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="p-2 rounded-full border border-gray-300 disabled:opacity-30 hover:bg-gray-100 transition"
          >
            <ChevronRight />
          </button>
        </div>
      )}
      <ProductModal
        open={!!selected}
        product={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};
