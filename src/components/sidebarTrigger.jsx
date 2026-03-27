"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

export function FloatingTrigger() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    /* We position this absolute to the sidebar container.
       'left-0' aligns it to the start, and we offset it slightly.
    */
    <div className="fixed top-20 left-0 z-50 transition-all  duration-300 group-data-[state=collapsed]:left-0">
       <SidebarTrigger 
         className={`
           relative -ml-3 flex h-7 w-7 items-center justify-center 
           rounded-full border border-slate-200 bg-white shadow-sm 
           transition-transform hover:bg-slate-50 hover:scale-110
           ${isCollapsed ? "translate-x-[4.5rem]" : "translate-x-[15rem]"}
         `}
       >
         {/* Custom icon logic if you want to change arrows based on state */}
         {isCollapsed ? (
           <ChevronRight className="h-4 w-4 text-slate-600" />
         ) : (
           <ChevronLeft className="h-4 w-4 text-slate-600" />
         )}
       </SidebarTrigger>
    </div>
  );
}