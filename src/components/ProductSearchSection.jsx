"use client";

import { useMemo, useState } from "react";
import Example from "@/components/examples/input/types/input-types-4";
import ProductCard from "@/components/ProductCard";
import { EmptyStateProducts } from "@/components/EmptyState";

export default function ProductSearchSection({ products }) {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return products;

    return products.filter((product) => {
      const name = product?.name?.toLowerCase() ?? "";
      const description = product?.description?.toLowerCase() ?? "";
      return name.includes(normalized) || description.includes(normalized);
    });
  }, [products, query]);

  return (
    <div className="bg-slate-50 py-10">
      <div className="mx-auto flex flex-col gap-8 px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-black text-slate-900">
              List of All Product
            </h1>
          </div>
          <div className="w-full md:w-80">
            <Example
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products..."
              inputId="product-search"
            />
          </div>
        </div>

        {filteredProducts.length ? (
          <ProductCard products={filteredProducts} />
        ) : (
          <EmptyStateProducts query={query} />
        )}
      </div>
    </div>
  );
}
