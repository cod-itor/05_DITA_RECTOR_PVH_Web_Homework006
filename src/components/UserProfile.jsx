
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  Settings2Icon
} from "lucide-react"

export function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className=" w-40 rounded-full text-black">
         <div className="flex items-center gap-2">
            <div>
               Image
            </div>
            <div>
                <h1>Admin User</h1>
                <h1 className="text-slate-400 ">KSHRD</h1>
            </div>
            
         </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
        <DropdownMenuItem>
             <h1>Admin User</h1>
            <h2>AdminUser@gmail.com</h2>

        </DropdownMenuItem>
            <DropdownMenuSeparator />
          <DropdownMenuItem>
            <BadgeCheckIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings2Icon />
            Setting
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
