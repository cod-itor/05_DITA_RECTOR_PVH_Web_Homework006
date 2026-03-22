# ShadCN Sidebar - Quick Reference & Cheat Sheet

## Installation Check ✅

You have installed:

- `shadcn` ^4.1.0
- `lucide-react` ^0.577.0 (for icons)
- `radix-ui` ^1.4.3 (for Sheet component)
- `tailwindcss` ^4 (for styling)

## Basic Structure Template

```jsx
"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>Logo/Title</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/">Home</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>Footer</SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header>
          <SidebarTrigger />
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
```

---

## Component Cheat Sheet

| Component              | Purpose                 | Parent             |
| ---------------------- | ----------------------- | ------------------ |
| `SidebarProvider`      | Wrapper & state manager | Root wrapper       |
| `Sidebar`              | Container               | SidebarProvider    |
| `SidebarHeader`        | Top section             | Sidebar            |
| `SidebarContent`       | Scrollable main area    | Sidebar            |
| `SidebarFooter`        | Bottom section          | Sidebar            |
| `SidebarGroup`         | Grouped section         | SidebarContent     |
| `SidebarGroupLabel`    | Group title             | SidebarGroup       |
| `SidebarGroupContent`  | Group items             | SidebarGroup       |
| `SidebarMenu`          | Menu list (`<ul>`)      | Any                |
| `SidebarMenuItem`      | Menu item (`<li>`)      | SidebarMenu        |
| `SidebarMenuButton`    | Clickable button        | SidebarMenuItem    |
| `SidebarMenuSub`       | Submenu list            | SidebarMenuItem    |
| `SidebarMenuSubItem`   | Submenu item            | SidebarMenuSub     |
| `SidebarMenuSubButton` | Submenu button          | SidebarMenuSubItem |
| `SidebarMenuBadge`     | Badge/notification      | SidebarMenuItem    |
| `SidebarMenuAction`    | Action button           | SidebarMenuItem    |
| `SidebarInput`         | Search input            | SidebarContent     |
| `SidebarInset`         | Main content area       | SidebarProvider    |
| `SidebarTrigger`       | Toggle button           | Any                |
| `SidebarSeparator`     | Divider                 | SidebarContent     |
| `SidebarRail`          | Resize handle           | Sidebar            |

---

## Common Props

### SidebarProvider

```jsx
<SidebarProvider
  defaultOpen={true}           // Initial state
  open={open}                  // Controlled state
  onOpenChange={setOpen}       // Change callback
>
```

### Sidebar

```jsx
<Sidebar
  side="left"                  // "left" | "right"
  variant="sidebar"            // "sidebar" | "floating" | "inset"
  collapsible="offcanvas"      // "offcanvas" | "none"
>
```

### SidebarMenuButton

```jsx
<SidebarMenuButton
  asChild                      // Use custom component
  isActive={false}             // Active state
  tooltip="Tooltip text"       // Show on hover
  variant="default"            // "default" | "outline"
  size="default"               // "default" | "sm" | "lg"
>
```

---

## Common Patterns

### Pattern 1: Simple Menu with Icons

```jsx
import { Home, Users, Settings } from "lucide-react";

<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton asChild>
      <a href="/">
        <Home className="w-4 h-4" />
        <span>Home</span>
      </a>
    </SidebarMenuButton>
  </SidebarMenuItem>
  <SidebarMenuItem>
    <SidebarMenuButton asChild>
      <a href="/users">
        <Users className="w-4 h-4" />
        <span>Users</span>
      </a>
    </SidebarMenuButton>
  </SidebarMenuItem>
</SidebarMenu>;
```

### Pattern 2: Menu with Submenus

```jsx
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
        <a href="/products/electronics">Electronics</a>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild>
        <a href="/products/clothing">Clothing</a>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  </SidebarMenuSub>
</SidebarMenuItem>
```

### Pattern 3: Menu Item with Badge

```jsx
<SidebarMenuItem>
  <SidebarMenuButton asChild>
    <a href="/messages"><Mail className="w-4 h-4" /><span>Messages</span></a>
  </SidebarMenuButton>
  <SidebarMenuBadge>5</SidebarMenuBadge>  <!-- Shows "5" -->
</SidebarMenuItem>
```

### Pattern 4: Menu Item with Action

```jsx
<SidebarMenuItem>
  <SidebarMenuButton asChild>
    <a href="/projects">
      <Folder className="w-4 h-4" />
      <span>Projects</span>
    </a>
  </SidebarMenuButton>
  <SidebarMenuAction onClick={() => alert("delete")}>
    <Trash2 className="w-4 h-4" />
  </SidebarMenuAction>
</SidebarMenuItem>
```

### Pattern 5: Grouped Sections

```jsx
<SidebarGroup>
  <SidebarGroupLabel>Main</SidebarGroupLabel>
  <SidebarGroupContent>
    <SidebarMenu>
      {/* Items here */}
    </SidebarMenu>
  </SidebarGroupContent>
</SidebarGroup>

<SidebarSeparator />

<SidebarGroup>
  <SidebarGroupLabel>Settings</SidebarGroupLabel>
  <SidebarGroupContent>
    <SidebarMenu>
      {/* Items here */}
    </SidebarMenu>
  </SidebarGroupContent>
</SidebarGroup>
```

### Pattern 6: Using the useSidebar Hook

```jsx
import { useSidebar } from "@/components/ui/sidebar";

export function MyComponent() {
  const { state, open, setOpen, toggleSidebar, isMobile } = useSidebar();

  return (
    <div>
      <p>State: {state}</p> {/* "expanded" or "collapsed" */}
      <p>Is Mobile: {isMobile ? "Yes" : "No"}</p>
      <button onClick={toggleSidebar}>Toggle</button>
      <button onClick={() => setOpen(false)}>Collapse</button>
    </div>
  );
}
```

---

## Keyboard Shortcuts

| Shortcut                 | Action         |
| ------------------------ | -------------- |
| `Ctrl+B` (Windows/Linux) | Toggle sidebar |
| `Cmd+B` (Mac)            | Toggle sidebar |

---

## Styling Tips

### Custom Styling with Tailwind

```jsx
<SidebarMenuButton
  asChild
  className="font-bold text-lg" // Add custom classes
>
  <a href="/">Home</a>
</SidebarMenuButton>
```

### Active State Styling

```jsx
<SidebarMenuButton
  asChild
  isActive={pathname === "/dashboard"} // Check current route
>
  <a href="/dashboard">Dashboard</a>
</SidebarMenuButton>
```

### Custom Separator

```jsx
<SidebarSeparator className="my-4" />
```

---

## Common Issues & Solutions

### Issue: Sidebar not showing on mobile

**Solution**: Make sure `SidebarProvider` wraps everything and you're using `SidebarInset` for content.

### Issue: Content not scrolling in sidebar

**Solution**: `SidebarContent` already has `overflow-auto`, but make sure it's not inside a parent with `overflow-hidden`.

### Issue: Buttons not working

**Solution**: Always use `asChild` on `SidebarMenuButton` when passing custom elements like `<a>` or `<button>`.

### Issue: Icons not showing

**Solution**: Import icons from `lucide-react` and make sure to pass them as React components.

### Issue: Styles not applying

**Solution**:

- Ensure you have Tailwind CSS configured
- Check that your component has `"use client"` directive
- Import all needed components

---

## Files in Your Project

- **Sidebar Component**: `/src/components/ui/sidebar.jsx`
- **Example Usage**: `/src/components/ExampleSidebarLayout.jsx`
- **Current Layout**: `/src/app/layout.js` (Updated with sidebar)
- **This Guide**: `/SIDEBAR_GUIDE.md` (Full documentation)

---

## Next Steps

1. ✅ You've installed the sidebar
2. ✅ Your layout is updated to use it
3. 📚 Read `SIDEBAR_GUIDE.md` for detailed documentation
4. 🎨 Customize the example in `ExampleSidebarLayout.jsx`
5. 🚀 Replace the menu items with your own

---

## Useful Links

- **ShadCN UI**: https://ui.shadcn.com/
- **Lucide Icons**: https://lucide.dev/
- **Radix UI**: https://radix-ui.com/
- **Tailwind CSS**: https://tailwindcss.com/
