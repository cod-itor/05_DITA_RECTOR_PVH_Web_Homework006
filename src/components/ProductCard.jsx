"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import ViewProductButton from "./ViewProductButton";
import Link from "next/link";

export default function ProductCard({ products }) {
  if (!products) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.productId}
          className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg"
        >
          <div className="relative w-full h-56 bg-[#0f172a]">
            <Image
              src="/img/macbookM5.png"
              alt={product.name}
              fill
              className="object-cover opacity-90"
            />
            <span className="absolute top-3 left-3 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              NEW
            </span>
            <div className="absolute top-10 left-3 flex items-center gap-1 bg-white text-black text-xs font-semibold px-2 py-1 rounded-full shadow">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              4.9
            </div>
          </div>

          <div className="flex flex-col gap-2 p-4 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">
                  Flagship Series
                </p>
                <h2 className="text-lg font-bold text-gray-900 leading-tight">
                  {product.name}
                </h2>
              </div>
              <p className="text-lg font-bold text-gray-900 whitespace-nowrap">
                ${product.price}
              </p>
            </div>

            <p className="text-sm text-gray-500 leading-snug line-clamp-2">
              {product.description}
            </p>
            <Link href={`/products/${product.productId}`}>
              <ViewProductButton />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
