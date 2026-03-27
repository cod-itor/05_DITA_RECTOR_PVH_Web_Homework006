"use client";

import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  LayoutGrid,
  Users,
  BookOpen,
  Settings,
  ShoppingBag,
} from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Products", href: "/products", icon: LayoutGrid },
    { name: "Customer", href: "/customers", icon: Users },
    { name: "Categories", href: "/categories", icon: BookOpen },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    // 1. Added collapsible="icon"
    <Sidebar collapsible="icon" className="border-r border-slate-200">
      <SidebarHeader className="px-3 py-6">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400 shadow-md">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>
          {/* group-data-[state=collapsed]:hidden is the Shadcn magic class */}
          <div className="leading-tight group-data-[state=collapsed]:hidden">
            <p className="text-sm font-bold tracking-wide text-slate-900">
              <span className="text-[#05b6da]">HRD</span>{" "}
              <span className="text-[#175efc]">SHOP</span>
            </p>
            <p className="text-xs font-medium text-slate-500">Admin V2.0</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 px-2 text-xs font-semibold uppercase tracking-widest text-slate-400 group-data-[state=collapsed]:hidden">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.name} // Shows name on hover when collapsed
                    className={`h-11 rounded-2xl transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-[#05b6da] text-white hover:bg-[#05b6da] hover:text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="font-medium group-data-[state=collapsed]:hidden">
                        {item.name}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}