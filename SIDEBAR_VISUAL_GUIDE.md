# ShadCN Sidebar - Visual Component Hierarchy

## Overall Structure

```
SidebarProvider (Root wrapper - manages state)
│
├── Sidebar (Main sidebar container)
│   ├── SidebarHeader
│   │   └── (Your logo, title, etc.)
│   │
│   ├── SidebarContent (Scrollable main area)
│   │   ├── SidebarGroup
│   │   │   ├── SidebarGroupLabel
│   │   │   ├── SidebarGroupAction (optional)
│   │   │   └── SidebarGroupContent
│   │   │       └── SidebarMenu
│   │   │           ├── SidebarMenuItem
│   │   │           │   ├── SidebarMenuButton
│   │   │           │   ├── SidebarMenuBadge (optional)
│   │   │           │   ├── SidebarMenuAction (optional)
│   │   │           │   └── SidebarMenuSub (optional submenu)
│   │   │           │       ├── SidebarMenuSubItem
│   │   │           │       └── SidebarMenuSubButton
│   │   │           └── [More items...]
│   │   │
│   │   ├── SidebarSeparator
│   │   ├── SidebarGroup (Another group)
│   │   └── [More groups...]
│   │
│   └── SidebarFooter
│       └── (Your footer content)
│
└── SidebarInset (Main content wrapper)
    ├── header
    │   ├── SidebarTrigger (Toggle button)
    │   └── (Your header content)
    │
    └── main
        └── {children} (Your page content)
```

---

## Component Purposes at a Glance

```
┌─────────────────────────────────────────────────────────────┐
│                    SidebarProvider                          │
│  (Manages open/closed state, handles keyboard shortcuts)   │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        │                         │
    ┌───▼──────┐         ┌───────▼─────┐
    │  Sidebar │         │SidebarInset │
    │(Fixed or │         │  (Content   │
    │ Drawer)  │         │   Area)     │
    └──────────┘         └─────────────┘
```

---

## Visual Breakdown by Section

### Sidebar Structure

```
┌──────────────────────────────┐
│     SidebarHeader            │  ← Logo, Title
├──────────────────────────────┤
│                              │
│    SidebarContent            │  ← Scrollable
│                              │  ← Groups, Menus
│    (with Groups, Menus)      │  ← Separators
│                              │
├──────────────────────────────┤
│    SidebarFooter             │  ← Copyright, User Info
└──────────────────────────────┘
```

### Content Structure

```
┌──────────────────────────────┐
│  Header with SidebarTrigger  │  ← Toggle button + Title
├──────────────────────────────┤
│                              │
│       Main Content           │  ← Your page content
│      (SidebarInset)          │  ← {children}
│                              │
└──────────────────────────────┘
```

---

## Menu Item Anatomy

### Simple Menu Item

```
SidebarMenuItem
└── SidebarMenuButton
    ├── Icon (from lucide-react)
    └── Text Label
```

**Rendered as:**

```
[Icon] Text Label
```

---

### Menu Item with Badge

```
SidebarMenuItem
├── SidebarMenuButton
│   ├── Icon
│   └── Text
└── SidebarMenuBadge (Shows number/count)
```

**Rendered as:**

```
[Icon] Text Label              [5]
```

---

### Menu Item with Action

```
SidebarMenuItem
├── SidebarMenuButton
│   ├── Icon
│   └── Text
└── SidebarMenuAction (Delete, Edit, etc.)
```

**Rendered as:**

```
[Icon] Text Label             [⋮]
```

---

### Menu Item with Submenu

```
SidebarMenuItem
├── SidebarMenuButton
│   ├── Icon
│   └── Text
└── SidebarMenuSub
    ├── SidebarMenuSubItem
    │   └── SidebarMenuSubButton (Sub option 1)
    ├── SidebarMenuSubItem
    │   └── SidebarMenuSubButton (Sub option 2)
    └── SidebarMenuSubItem
        └── SidebarMenuSubButton (Sub option 3)
```

**Rendered as:**

```
[Icon] Text Label
    └─ Sub option 1
    └─ Sub option 2
    └─ Sub option 3
```

---

## Grouped Sections

```
SidebarGroup
├── SidebarGroupLabel
├── SidebarGroupAction (optional)
└── SidebarGroupContent
    └── SidebarMenu
        ├── SidebarMenuItem
        ├── SidebarMenuItem
        └── SidebarMenuItem
```

**Rendered as:**

```
Navigation                    [+ Add]
  [Icon] Item 1
  [Icon] Item 2
  [Icon] Item 3

Settings
  [Icon] Item 4
  [Icon] Item 5
```

---

## Common Patterns

### Pattern 1: Simple Navigation

```
SidebarProvider
└── Sidebar
    ├── SidebarHeader
    ├── SidebarContent
    │   └── SidebarMenu
    │       ├── SidebarMenuItem (Home)
    │       ├── SidebarMenuItem (Products)
    │       └── SidebarMenuItem (Settings)
    └── SidebarFooter
```

---

### Pattern 2: Organized with Groups

```
SidebarProvider
└── Sidebar
    ├── SidebarHeader
    ├── SidebarContent
    │   ├── SidebarGroup (Main)
    │   │   └── SidebarMenu
    │   │       ├── SidebarMenuItem
    │   │       └── SidebarMenuItem
    │   ├── SidebarSeparator
    │   └── SidebarGroup (Admin)
    │       └── SidebarMenu
    │           └── SidebarMenuItem
    └── SidebarFooter
```

---

### Pattern 3: With Submenus

```
SidebarProvider
└── Sidebar
    ├── SidebarHeader
    ├── SidebarContent
    │   └── SidebarGroup
    │       └── SidebarMenu
    │           ├── SidebarMenuItem
    │           │   └── SidebarMenuSub
    │           │       ├── SidebarMenuSubItem
    │           │       └── SidebarMenuSubItem
    │           └── SidebarMenuItem
    └── SidebarFooter
```

---

### Pattern 4: Full Featured

```
SidebarProvider
└── Sidebar
    ├── SidebarHeader (Logo)
    ├── SidebarContent
    │   ├── SidebarInput (Search)
    │   ├── SidebarGroup
    │   │   ├── SidebarGroupLabel
    │   │   ├── SidebarGroupAction (Add)
    │   │   └── SidebarMenu
    │   │       └── SidebarMenuItem
    │   │           ├── SidebarMenuButton
    │   │           ├── SidebarMenuBadge (5)
    │   │           ├── SidebarMenuAction (⋮)
    │   │           └── SidebarMenuSub
    │   │               └── SidebarMenuSubItem
    │   ├── SidebarSeparator
    │   └── SidebarGroup
    │       └── SidebarMenu
    │           └── SidebarMenuItem
    └── SidebarFooter (User Info)
```

---

## Component Nesting Rules

### ✅ Valid Nesting

```jsx
// Group containing menu
<SidebarGroup>
  <SidebarGroupLabel>...</SidebarGroupLabel>
  <SidebarGroupContent>
    <SidebarMenu>
      <SidebarMenuItem>...</SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroupContent>
</SidebarGroup>

// Menu item with submenu
<SidebarMenuItem>
  <SidebarMenuButton>...</SidebarMenuButton>
  <SidebarMenuSub>
    <SidebarMenuSubItem>...</SidebarMenuSubItem>
  </SidebarMenuSub>
</SidebarMenuItem>

// Menu item with badge and action
<SidebarMenuItem>
  <SidebarMenuButton>...</SidebarMenuButton>
  <SidebarMenuBadge>...</SidebarMenuBadge>
  <SidebarMenuAction>...</SidebarMenuAction>
</SidebarMenuItem>
```

### ❌ Invalid Nesting

```jsx
// SidebarMenu directly under SidebarHeader
<SidebarHeader>
  <SidebarMenu>...</SidebarMenu>  // ❌ Wrong
</SidebarHeader>

// SidebarMenuItem without SidebarMenu parent
<SidebarGroup>
  <SidebarMenuItem>...</SidebarMenuItem>  // ❌ Wrong
</SidebarGroup>

// SidebarMenuSub without SidebarMenuItem parent
<SidebarMenu>
  <SidebarMenuSub>...</SidebarMenuSub>  // ❌ Wrong
</SidebarMenu>
```

---

## Component Responsibilities

| Component            | What It Does                    | Required Props    |
| -------------------- | ------------------------------- | ----------------- |
| SidebarProvider      | Manages state, provides context | children          |
| Sidebar              | Container for sidebar content   | children          |
| SidebarHeader        | Top section                     | children          |
| SidebarContent       | Scrollable main section         | children          |
| SidebarFooter        | Bottom section                  | children          |
| SidebarGroup         | Groups related items            | children          |
| SidebarGroupLabel    | Label for group                 | children          |
| SidebarGroupContent  | Wrapper for group items         | children          |
| SidebarMenu          | Menu list (`<ul>`)              | children          |
| SidebarMenuItem      | Menu item (`<li>`)              | children          |
| SidebarMenuButton    | Clickable button                | asChild, children |
| SidebarMenuSub       | Submenu list                    | children          |
| SidebarMenuSubItem   | Submenu item                    | children          |
| SidebarMenuSubButton | Submenu button                  | asChild, children |
| SidebarMenuBadge     | Notification badge              | children          |
| SidebarMenuAction    | Action button                   | children          |
| SidebarInput         | Search/filter input             | placeholder, etc  |
| SidebarInset         | Main content wrapper            | children          |
| SidebarTrigger       | Toggle button                   | -                 |
| SidebarSeparator     | Visual divider                  | -                 |
| SidebarRail          | Resize handle                   | -                 |

---

## State Flow

```
┌─────────────────────────────────────┐
│    SidebarProvider State           │
│  (open, isMobile, toggleSidebar)  │
└──────────────┬──────────────────────┘
               │
               ├─→ Sidebar (uses state)
               │   └─→ Shows/hides based on state
               │
               ├─→ SidebarTrigger (controls state)
               │   └─→ Calls toggleSidebar()
               │
               └─→ Custom components via useSidebar()
                   └─→ Access state and controls
```

---

## Responsive Behavior

```
┌─────────────────────────────────────┐
│        Desktop (≥768px)             │
│  Sidebar visible next to content    │
│  ┌─────┬──────────────────────────┐ │
│ │SBar │      Content             │ │
│ │     │                          │ │
│ └─────┴──────────────────────────┘ │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         Mobile (<768px)             │
│  Sidebar as drawer overlay          │
│ ┌──────────────────────────────────┐│
│ │ [☰] Content                      ││
│ │                                  ││
│ │[Drawer slides from side]         ││
│ └──────────────────────────────────┘│
└─────────────────────────────────────┘
```

---

## Memory Aid

Think of the sidebar like a **typical restaurant menu**:

```
┌─────────────────────────┐
│     RESTAURANT MENU     │  ← SidebarHeader
├─────────────────────────┤
│ APPETIZERS              │  ← SidebarGroup (with label)
│ • Spring Rolls      [+] │  ← SidebarMenuItem with action
│ • Dumplings        [5]  │  ← SidebarMenuItem with badge
│ • Satay                 │  ← SidebarMenuItem
│   - Chicken             │  ← SidebarMenuSub
│   - Beef                │
│                         │
│ MAIN COURSES            │  ← Another SidebarGroup
│ • Pad Thai              │  ← SidebarMenuItem
│ • Green Curry           │
│                         │
├─────────────────────────┤
│ © 2026 Restaurant Name  │  ← SidebarFooter
└─────────────────────────┘
```

---

## Quick Selection Guide

**Choose this component when you need to:**

| Need                    | Component                               |
| ----------------------- | --------------------------------------- |
| Top section             | `SidebarHeader`                         |
| Main scrollable area    | `SidebarContent`                        |
| Bottom section          | `SidebarFooter`                         |
| Group related items     | `SidebarGroup`                          |
| Item group label        | `SidebarGroupLabel`                     |
| Basic menu item         | `SidebarMenuItem` + `SidebarMenuButton` |
| Show notification count | `SidebarMenuBadge`                      |
| Delete/edit button      | `SidebarMenuAction`                     |
| Submenu items           | `SidebarMenuSub` + `SidebarMenuSubItem` |
| Search functionality    | `SidebarInput`                          |
| Toggle button           | `SidebarTrigger`                        |
| Main content area       | `SidebarInset`                          |
| Visual break            | `SidebarSeparator`                      |
| Control state           | `useSidebar()` hook                     |

---

Perfect! Now you have a clear visual understanding of how the sidebar components fit together. 🎨
