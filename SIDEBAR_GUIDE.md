# ShadCN Sidebar Component Guide

## Overview

The ShadCN Sidebar is a powerful, fully-featured sidebar component with the following capabilities:

- **Responsive**: Automatically adapts to mobile (drawer) and desktop (fixed sidebar)
- **Collapsible**: Can collapse to icon-only view
- **Keyboard Shortcuts**: Press `Ctrl+B` (or `Cmd+B` on Mac) to toggle
- **State Management**: Saves open/closed state in cookies
- **Customizable**: Multiple variants and configurations

---

## Main Components

### 1. **SidebarProvider** (Wrapper)

Wraps your entire layout and manages sidebar state.

```jsx
<SidebarProvider>{/* All sidebar components go here */}</SidebarProvider>
```

**Props:**

- `defaultOpen` (boolean) - Initial sidebar state, defaults to `true`
- `open` (boolean) - Controlled open state
- `onOpenChange` (function) - Callback for state changes

---

### 2. **Sidebar** (Main Container)

The actual sidebar container.

```jsx
<Sidebar>{/* Header, Content, Footer go here */}</Sidebar>
```

**Props:**

- `side` - `"left"` or `"right"` (default: `"left"`)
- `variant` - `"sidebar"`, `"floating"`, or `"inset"` (default: `"sidebar"`)
- `collapsible` - `"offcanvas"` or `"none"` (default: `"offcanvas"`)

**Variants Explained:**

- **sidebar**: Standard sidebar with gap
- **floating**: Sidebar floats above content with rounded corners and shadow
- **inset**: Sidebar is inset from the edge with spacing

---

### 3. **SidebarHeader**

Top section of the sidebar, typically for logos/titles.

```jsx
<SidebarHeader>
  <h2 className="text-lg font-bold">App Name</h2>
</SidebarHeader>
```

---

### 4. **SidebarContent**

Main scrollable area of the sidebar.

```jsx
<SidebarContent>{/* Menu items go here */}</SidebarContent>
```

---

### 5. **SidebarFooter**

Bottom section of the sidebar, typically for user info/settings.

```jsx
<SidebarFooter>
  <p className="text-sm">© 2026</p>
</SidebarFooter>
```

---

## Menu Components

### **SidebarMenu**

Container for menu items (acts as `<ul>`).

```jsx
<SidebarMenu>{/* SidebarMenuItems go here */}</SidebarMenu>
```

---

### **SidebarMenuItem**

Individual menu item (acts as `<li>`).

```jsx
<SidebarMenuItem>
  <SidebarMenuButton asChild>
    <a href="/dashboard">Dashboard</a>
  </SidebarMenuButton>
</SidebarMenuItem>
```

---

### **SidebarMenuButton**

The clickable button inside a menu item.

```jsx
<SidebarMenuButton asChild isActive={true} tooltip="Dashboard">
  <a href="/dashboard">
    <DashboardIcon />
    <span>Dashboard</span>
  </a>
</SidebarMenuButton>
```

**Props:**

- `asChild` - Use custom component (like `<a>`)
- `isActive` - Highlight button (boolean)
- `tooltip` - Show tooltip on hover (string or object)
- `variant` - `"default"` or `"outline"`
- `size` - `"default"`, `"sm"`, or `"lg"`

---

## Grouping Components

### **SidebarGroup**

Groups related menu items together.

```jsx
<SidebarGroup>
  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
  <SidebarGroupContent>
    <SidebarMenu>{/* Menu items */}</SidebarMenu>
  </SidebarGroupContent>
</SidebarGroup>
```

---

### **SidebarGroupLabel**

Label for a sidebar group.

```jsx
<SidebarGroupLabel>Main Menu</SidebarGroupLabel>
```

---

### **SidebarGroupContent**

Container for group content.

```jsx
<SidebarGroupContent>
  <SidebarMenu>{/* Items */}</SidebarMenu>
</SidebarGroupContent>
```

---

### **SidebarGroupAction**

Action button for group (e.g., add new item).

```jsx
<SidebarGroup>
  <SidebarGroupLabel>Projects</SidebarGroupLabel>
  <SidebarGroupAction>
    <PlusIcon />
  </SidebarGroupAction>
  <SidebarGroupContent>{/* Items */}</SidebarGroupContent>
</SidebarGroup>
```

---

## Other Useful Components

### **SidebarTrigger**

Button to toggle sidebar (usually in header).

```jsx
<SidebarTrigger />
```

---

### **SidebarInset**

Container for main content area (sits next to sidebar).

```jsx
<SidebarInset>
  <main>{children}</main>
</SidebarInset>
```

---

### **SidebarSeparator**

Visual divider between sections.

```jsx
<SidebarSeparator />
```

---

### **SidebarInput**

Search/filter input for sidebar.

```jsx
<SidebarInput placeholder="Search..." />
```

---

### **SidebarMenuAction**

Action button inside menu item (e.g., delete, edit).

```jsx
<SidebarMenuItem>
  <SidebarMenuButton>Item</SidebarMenuButton>
  <SidebarMenuAction onClick={() => {}}>
    <TrashIcon />
  </SidebarMenuAction>
</SidebarMenuItem>
```

---

### **SidebarMenuBadge**

Badge on menu item (e.g., notification count).

```jsx
<SidebarMenuItem>
  <SidebarMenuButton>Messages</SidebarMenuButton>
  <SidebarMenuBadge>5</SidebarMenuBadge>
</SidebarMenuItem>
```

---

## Submenu Components

### **SidebarMenuSub**

Container for submenu items.

```jsx
<SidebarMenuItem>
  <SidebarMenuButton>Products</SidebarMenuButton>
  <SidebarMenuSub>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild>
        <a href="/products/electronics">Electronics</a>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  </SidebarMenuSub>
</SidebarMenuItem>
```

---

### **SidebarMenuSubItem**

Individual submenu item.

```jsx
<SidebarMenuSubItem>
  <SidebarMenuSubButton asChild>
    <a href="/products/electronics">Electronics</a>
  </SidebarMenuSubButton>
</SidebarMenuSubItem>
```

---

### **SidebarMenuSubButton**

Submenu button (same as SidebarMenuButton but for submenus).

```jsx
<SidebarMenuSubButton asChild>
  <a href="/products/electronics">Electronics</a>
</SidebarMenuSubButton>
```

---

## Utility Hook

### **useSidebar()**

Hook to access sidebar state and controls.

```jsx
import { useSidebar } from "@/components/ui/sidebar";

export function MyComponent() {
  const { state, open, setOpen, toggleSidebar, isMobile } = useSidebar();

  return (
    <div>
      <p>Sidebar is {state}</p>
      <button onClick={toggleSidebar}>Toggle</button>
    </div>
  );
}
```

**Returns:**

- `state` - `"expanded"` or `"collapsed"`
- `open` - Boolean open state
- `setOpen` - Function to set open state
- `toggleSidebar` - Function to toggle
- `isMobile` - Boolean if mobile device
- `openMobile` - Mobile drawer state
- `setOpenMobile` - Set mobile drawer

---

## Complete Example

```jsx
"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Package, Users, Settings, LogOut } from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-lg font-bold">Ecommerce</h2>
        </SidebarHeader>

        <SidebarContent>
          <SidebarInput placeholder="Search..." />

          {/* Main Navigation Group */}
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive>
                    <a href="/dashboard">
                      <Home className="w-4 h-4" />
                      <span>Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/products">
                      <Package className="w-4 h-4" />
                      <span>Products</span>
                    </a>
                  </SidebarMenuButton>
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
                  </SidebarMenuSub>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/customers">
                      <Users className="w-4 h-4" />
                      <span>Customers</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          {/* Settings Group */}
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
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

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button>
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex items-center gap-2 border-b p-4 sticky top-0 bg-background">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
```

---

## Key Keyboard Shortcuts

- **Ctrl+B** (Windows/Linux) or **Cmd+B** (Mac): Toggle sidebar

---

## Tips & Tricks

1. **Adding Icons**: Import from `lucide-react` and add inside menu buttons
2. **Active States**: Use the `isActive` prop or check the current route
3. **Tooltips**: Set `tooltip` prop on buttons to show on collapse
4. **Mobile Responsive**: Automatically becomes a drawer on mobile
5. **Custom Styling**: Use Tailwind classes in `className` props
6. **Nested Menus**: Use `SidebarMenuSub` components for submenus

---

## Styling Notes

The sidebar uses CSS custom properties for width:

- `--sidebar-width`: 16rem (on desktop)
- `--sidebar-width-mobile`: 18rem (on mobile)
- `--sidebar-width-icon`: 3rem (when collapsed)

You can customize these in your root wrapper or globals.css if needed.
