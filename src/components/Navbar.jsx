"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { state } = useSidebar();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="group rounded-lg border border-slate-200 px-3 py-2 transition-all hover:bg-slate-100 hover:border-slate-300">
            <Menu className="h-5 w-5 text-black hover:text-slate-900" />
          </SidebarTrigger>

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-slate-900">
              HRD Admin Dashboard
            </h1>
            <p className="text-xs text-slate-500">
              {state === "expanded" ? "Sidebar Expanded" : "Sidebar Collapsed"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-cyan-600 hover:shadow-md active:scale-95">
            Help
          </button>
        </div>
      </div>
    </header>
  );
}
