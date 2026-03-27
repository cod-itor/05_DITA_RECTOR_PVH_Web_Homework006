"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import ViewProductButton from "./ViewProductButton";
import Link from "next/link";

export default function ProductCard({ products }) {
  if (!products) return null;

  return (
    <div className="flex flex-wrap -mx-4">
      {products.map((product) => (
        
        <div 
          key={product.productId} 
          className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
        >
          <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            

            <div className="relative h-56 w-full overflow-hidden bg-[#0f172a]">
              <Image
                src="/img/macbookM5.png"
                alt={product.name}
                fill
                className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                NEW
              </span>
              <div className="absolute left-4 top-12 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-bold shadow-sm">
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                4.9
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                    Flagship Series
                  </p>
                  <h2 className="truncate text-lg font-bold text-slate-900">
                    {product.name}
                  </h2>
                </div>
                <p className="whitespace-nowrap text-lg font-black text-slate-900">
                  ${product.price}
                </p>
              </div>

              <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-slate-500">
                {product.description}
              </p>

              {/* mt-auto pushes the button to the bottom if descriptions vary in length */}
              <div className="mt-auto">
                <Link href={`/products/${product.productId}`} className="block w-full">
                  <ViewProductButton />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}