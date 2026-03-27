"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Example = ({
  value,
  onChange,
  placeholder = "Search...",
  inputId = "search-input",
}) => (
  <div className="w-full max-w-xl space-y-2">
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <Input
        className="h-12 rounded-2xl border border-slate-200 bg-white pl-9 shadow-sm focus-visible:ring-[#05b6da]"
        id={inputId}
        placeholder={placeholder}
        type="search"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default Example;
