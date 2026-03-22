"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Menu, BellDot,ShoppingCart } from "lucide-react";
import { UserProfile } from "./UserProfile";

export function Navbar() {
  const { state } = useSidebar();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      <div className="flex h-16 items-center flex-row-reverse  px-6 py-4">
        {/* <div className="flex items-center gap-4">
          this sidebar trigger can be removed 
          <SidebarTrigger className="group rounded-lg border border-slate-200 px-3 py-2 transition-all hover:bg-slate-100 hover:border-slate-300">
            <Menu className="h-5 w-5 text-black hover:text-slate-900" />
          </SidebarTrigger>
        </div> */}

        <div className="flex items-center gap-4">
        
          <button className="relative rounded-lg p-2 hover:bg-slate-100 transition-colors">
            <BellDot className="h-5 w-5 text-slate-600 hover:text-slate-900" />
          </button>
          <button className="relative rounded-lg p-2 hover:bg-slate-100 transition-colors">
            <ShoppingCart className="h-5 w-5 text-slate-600 hover:text-slate-900" />
          </button>
          <UserProfile/>
          
        
        </div>
      </div>
    </header>
  );
}
