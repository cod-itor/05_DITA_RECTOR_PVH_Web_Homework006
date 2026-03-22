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
      {/* ── Header with Logo ── */}
      <SidebarHeader className="border-b border-slate-200 px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 to-cyan-600 shadow-md">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-wide text-slate-900">
                HRD SHOP
              </p>
              <p className="text-xs font-medium text-slate-500">Admin Panel</p>
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
              {/* Products */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`
                    transition-all duration-200 ease-in-out
                    ${
                      pathname === "/products"
                        ? "bg-linear-to-r from-cyan-100 to-cyan-50 font-semibold text-cyan-700 shadow-sm hover:from-cyan-200 hover:to-cyan-100"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }
                    rounded-lg px-4 py-3 group
                  `}
                >
                  <a href="/products" className="flex items-center gap-3">
                    <LayoutGrid
                      className={`h-5 w-5 shrink-0 transition-colors ${pathname === "/products" ? "text-cyan-600" : "text-slate-400 group-hover:text-slate-600"}`}
                    />
                    <span className="text-sm font-medium">Products</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Customers */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`
                    transition-all duration-200 ease-in-out
                    ${
                      pathname === "/customers"
                        ? "bg-linear-to-r from-cyan-100 to-cyan-50 font-semibold text-cyan-700 shadow-sm hover:from-cyan-200 hover:to-cyan-100"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }
                    rounded-lg px-4 py-3 group
                  `}
                >
                  <a href="/customers" className="flex items-center gap-3">
                    <Users
                      className={`h-5 w-5 shrink-0 transition-colors ${pathname === "/customers" ? "text-cyan-600" : "text-slate-400 group-hover:text-slate-600"}`}
                    />
                    <span className="text-sm font-medium">Customer</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Categories */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`
                    transition-all duration-200 ease-in-out
                    ${
                      pathname === "/categories"
                        ? "bg-linear-to-r from-cyan-100 to-cyan-50 font-semibold text-cyan-700 shadow-sm hover:from-cyan-200 hover:to-cyan-100"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }
                    rounded-lg px-4 py-3 group
                  `}
                >
                  <a href="/categories" className="flex items-center gap-3">
                    <BookOpen
                      className={`h-5 w-5 shrink-0 transition-colors ${pathname === "/categories" ? "text-cyan-600" : "text-slate-400 group-hover:text-slate-600"}`}
                    />
                    <span className="text-sm font-medium">Categories</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Settings */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`
                    transition-all duration-200 ease-in-out
                    ${
                      pathname === "/settings"
                        ? "bg-linear-to-r from-cyan-100 to-cyan-50 font-semibold text-cyan-700 shadow-sm hover:from-cyan-200 hover:to-cyan-100"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }
                    rounded-lg px-4 py-3 group
                  `}
                >
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

      {/* ── Footer with Logout ── */}
      <SidebarFooter className="border-t border-slate-200 px-3 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="rounded-lg px-4 py-3 text-slate-600 transition-all hover:bg-red-50 hover:text-red-600"
            >
              <button className="flex items-center gap-3 w-full">
                <LogOut className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
