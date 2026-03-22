"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  Package,
  Users,
  Settings,
  LogOut,
  Plus,
  MoreHorizontal,
  ShoppingCart,
} from "lucide-react";

// Example component showing how to use useSidebar hook
function SidebarStateDemo() {
  const { state, toggleSidebar } = useSidebar();
  return (
    <div className="mb-4 p-3 rounded bg-gray-100">
      <p className="text-sm">
        Sidebar is currently: <strong>{state}</strong>
      </p>
    </div>
  );
}

export default function ExampleSidebarLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar>
        {/* SIDEBAR HEADER - Usually contains logo/title */}
        <SidebarHeader className="border-b">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            <h1 className="font-bold text-lg">E-Commerce</h1>
          </div>
          <p className="text-xs text-gray-500">Admin Dashboard</p>
        </SidebarHeader>

        {/* SIDEBAR CONTENT - Main scrollable area */}
        <SidebarContent>
          {/* GROUP 1: Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Simple menu item */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive tooltip="Dashboard">
                    <a href="/dashboard">
                      <Home className="w-4 h-4" />
                      <span>Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Menu item with submenu */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Products">
                    <a href="/products">
                      <Package className="w-4 h-4" />
                      <span>Products</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>12</SidebarMenuBadge>
                  {/* Submenu items */}
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="/products?category=electronics">Electronics</a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="/products?category=clothing">Clothing</a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="/products?category=home">Home & Garden</a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>

                {/* Menu item with badge */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Customers">
                    <a href="/customers">
                      <Users className="w-4 h-4" />
                      <span>Customers</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuBadge className="bg-red-500 text-white">
                    5
                  </SidebarMenuBadge>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          {/* GROUP 2: Management */}
          <SidebarGroup>
            <SidebarGroupLabel>Management</SidebarGroupLabel>
            <SidebarGroupAction tooltip="Add Project">
              <Plus className="w-4 h-4" />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/orders">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Orders</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuAction>
                    <MoreHorizontal className="w-4 h-4" />
                  </SidebarMenuAction>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          {/* GROUP 3: Settings */}
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Settings">
                    <a href="/settings">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* SIDEBAR FOOTER - Bottom section */}
        <SidebarFooter className="border-t">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button className="w-full">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <p className="text-xs text-gray-400 mt-2 text-center">
            © 2026 E-Commerce
          </p>
        </SidebarFooter>
      </Sidebar>

      {/* Main content area */}
      <SidebarInset>
        <header className="sticky top-0 z-10 flex items-center gap-4 border-b bg-background p-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <SidebarStateDemo />

          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <h2 className="font-semibold mb-2">Welcome to Your Dashboard!</h2>
              <p className="text-sm text-gray-600">
                The sidebar is fully functional. Try:
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside mt-2">
                <li>
                  Click the toggle button in the header to collapse/expand
                </li>
                <li>Press Cmd+B (Mac) or Ctrl+B (Windows) to toggle</li>
                <li>On mobile, the sidebar becomes a drawer</li>
                <li>Hover over icons when collapsed to see tooltips</li>
                <li>Click menu items to navigate</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Products</h3>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Customers</h3>
                <p className="text-2xl font-bold">567</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Orders</h3>
                <p className="text-2xl font-bold">89</p>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
