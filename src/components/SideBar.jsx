"use client";

import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
  LogOut,
} from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-slate-200 bg-linear-to-b from-white to-slate-50">
      <SidebarHeader className="border-b border-slate-200 px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br bg-cyan-400 shadow-md">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-wide text-slate-900">
                <span className="text-[#05b6da] font-bold">HRD</span> <span className="text-[#175efc] font-bold">SHOP</span>
              </p>
              <p className="text-xs font-medium text-slate-500">Admin V2.0</p>
            </div>
          </div>
        </div>
      </SidebarHeader>
      

      {/* ── Navigation ── */}
      <SidebarContent className="px-3 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 px-2 text-2xl text-black">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/products" className="flex items-center hover:text-white gap-3">
                    <LayoutGrid
                      className={`h-5 w-5 shrink-0 `}
                    />
                    <span className="text-sm ">Products</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/customer" className="flex items-center gap-3">
                    <Users
                      className={`h-5 w-5 shrink-0 transition-colors ${pathname === "/customers" ? "text-cyan-600" : "text-slate-400 group-hover:text-slate-600"}`}
                    />
                    <span className="text-sm font-medium">Customer</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/categories" className="flex items-center gap-3">
                    <BookOpen
                      className={`h-5 w-5 shrink-0 transition-colors ${pathname === "/categories" ? "text-cyan-600" : "text-slate-400 group-hover:text-slate-600"}`}
                    />
                    <span className="text-sm font-medium">Categories</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a href="/settings" className="flex items-center gap-3">
                    <Settings
                      className={`h-5 w-5 shrink-0 transition-colors ${pathname === "/settings" ? "text-cyan-600" : "text-slate-400 group-hover:text-slate-600"}`}
                    />
                    <span className="text-sm font-medium">Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
