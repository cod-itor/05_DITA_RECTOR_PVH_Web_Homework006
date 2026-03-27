import ProductCard from "@/components/ProductCard";
import ViewProductButton from "@/components/ViewProductButton";
import Example from "@/components/examples/input/types/input-types-4";
import React from "react";

export default async function page() {
  const response = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/products",
  );
  const product = await response.json();
  const products = await product.payload;

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-slate-900">
              List of All Product
            </h1>
          </div>
          <div className="md:w-80 w-full">
            <Example />
          </div>
        </div>

        <ProductCard products={products} />
      </div>
    </div>
  );
}
