"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Share2, ShoppingCart, ArrowLeft } from 'lucide-react';

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 w-full max-w-5xl p-8">
        <div className="flex flex-col md:flex-row gap-10">

          <div className="relative flex-1 bg-[#f0f4f8] rounded-2xl min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              <span className="bg-[#1a1f2e] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                NEW ARRIVAL
              </span>
              <span className="bg-[#1a1f2e] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                FREE SHIPPING
              </span>
            </div>

            <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
              <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:scale-110 transition-transform">
                <Heart size={16} className="text-gray-500" />
              </button>
              <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:scale-110 transition-transform">
                <Share2 size={16} className="text-gray-500" />
              </button>
            </div>

            <Image
              src="/img/macbookM5.png"
              alt={product.name}
              width={400}
              height={350}
              className="object-contain w-[80%] h-auto drop-shadow-xl"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <Link
              href="/products"
              className="flex items-center gap-1 text-xs text-gray-400 uppercase tracking-widest font-semibold hover:text-gray-700 transition-colors w-fit"
            >
              <ArrowLeft size={14} />
              Back to Product
            </Link>

            <div>
              <p className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em] mb-2">
                Premium Experience
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-[#0f1923] leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-[#0f1923]">
                ${product.price.toLocaleString()}
              </span>
            </div>

            <div className="border-l-4 border-cyan-400 pl-4">
              <p className="text-sm text-gray-500 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Select Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg"
                >
                  −
                </button>
                <span className="text-xl font-bold text-[#0f1923] w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#1a1f2e] hover:bg-[#2c3347] text-white font-bold py-4 rounded-2xl transition-colors text-sm">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <button className="flex-1 border-2 border-gray-200 hover:border-gray-400 text-[#0f1923] font-bold py-4 rounded-2xl transition-colors text-sm">
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}