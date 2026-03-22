"use client";

import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-b from-white to-slate-50 px-4">
      <div className="w-full max-w-2xl">
        {/* 404 Background Text */}
        <div className="relative mb-8 text-center">
          <div className="text-[150px] md:text-[200px] font-black text-slate-100 leading-none select-none">
            404
          </div>

          {/* Main Heading */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 text-center">
              Oops! Page not found.
            </h1>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-slate-500 text-sm md:text-base leading-relaxed mb-8 px-4">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Don't worry, our products are
          still here!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center transition-all hover:shadow-lg">
              <Home className="w-5 h-5" />
              Back to Homepage
            </Button>
          </Link>

          <Link href="/products">
            <Button
              variant="outline"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold py-3 px-8 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center transition-all"
            >
              <Search className="w-5 h-5" />
              Browse Products
            </Button>
          </Link>
        </div>

        {/* Contact Support */}
        <div className="text-center text-slate-500 text-sm">
          Need help?{" "}
          <Link
            href="/support"
            className="text-blue-600 font-semibold hover:underline"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
