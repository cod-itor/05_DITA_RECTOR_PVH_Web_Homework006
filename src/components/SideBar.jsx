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
                <span className="text-[#05b6da] font-bold">HRD</span>{" "}
                <span className="text-[#175efc] font-bold">SHOP</span>
              </p>
              <p className="text-xs font-medium text-slate-500">Admin V2.0</p>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 px-2 text-2xl text-black">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a
                    href="/products"
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === "/products"
                        ? "bg-[#05b6da] text-white"
                        : "text-slate-600 hover:bg-[#05b6da] hover:text-white"
                    }`}
                  >
                    <LayoutGrid
                      className={`h-5 w-5 shrink-0 transition-colors ${
                        pathname === "/products"
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                    <span>Products</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a
                    href="/customers"
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === "/customers"
                        ? "bg-[#05b6da] text-white"
                        : "text-slate-600 hover:bg-[#05b6da] hover:text-white"
                    }`}
                  >
                    <Users
                      className={`h-5 w-5 shrink-0 transition-colors ${
                        pathname === "/customers"
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                    <span>Customer</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a
                    href="/categories"
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === "/categories"
                        ? "bg-[#05b6da] text-white"
                        : "text-slate-600 hover:bg-[#05b6da] hover:text-white"
                    }`}
                  >
                    <BookOpen
                      className={`h-5 w-5 shrink-0 transition-colors ${
                        pathname === "/categories"
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                    <span>Categories</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <a
                    href="/settings"
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === "/settings"
                        ? "bg-[#05b6da] text-white"
                        : "text-slate-600 hover:bg-[#05b6da] hover:text-white"
                    }`}
                  >
                    <Settings
                      className={`h-5 w-5 shrink-0 transition-colors ${
                        pathname === "/settings"
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                    <span>Settings</span>
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
