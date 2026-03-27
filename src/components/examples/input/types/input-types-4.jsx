"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Example = () => (
  <div className="w-full max-w-xl space-y-2">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <Input
        className="bg-white pl-9 h-12 rounded-2xl border border-slate-200 shadow-sm focus-visible:ring-[#05b6da]"
        id="search-input"
        placeholder="Search products..."
        type="search"
      />
    </div>
  </div>
);

export default Example;
