"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BadgeCheckIcon,
  CreditCardIcon,
  Settings2Icon,
  LogOut,
} from "lucide-react";
import Image from "next/image";

export function UserProfile({
  userName = "Admin User",
  userRole = "KSHRD",
  userEmail = "admin@hrshop.com",
  userImage = "/img/macbookM5.png",
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-40 h-12 px-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-3 w-full">
            <div className="relative h-9 w-9 shrink-0 rounded-full overflow-hidden border border-slate-200">
              <Image
                src={userImage}
                alt={userName}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col items-start min-w-0 flex-1">
              <h1 className="text-sm font-semibold text-slate-900 truncate">
                {userName}
              </h1>
              <p className="text-xs text-slate-500 truncate">{userRole}</p>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <div className="flex items-center gap-3 px-2 py-3 mb-2">
          <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border border-slate-200">
            <Image
              src={userImage}
              alt={userName}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <h2 className="text-sm font-semibold text-slate-900 truncate">
              {userName}
            </h2>
            <p className="text-xs text-slate-500 truncate">{userEmail}</p>
          </div>
        </div>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
            <BadgeCheckIcon className="h-4 w-4 text-slate-500" />
            <span>My Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
            <CreditCardIcon className="h-4 w-4 text-slate-500" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
            <Settings2Icon className="h-4 w-4 text-slate-500" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50">
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
