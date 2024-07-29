import { ModeToggle } from '../mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavLink } from 'react-router-dom'
const Upbar = () => {
  
  return (
    <div className='h-[10vh] w-full flex justify-center items-center shadow-sm shadow-primary'>
      <div className="h-3/4 w-2/4 h-full text-primary font-bold flex justify-center items-center text-lg "> Flyrobe</div>

    <div className='w-[100%] h-full flex items-center justify-end gap-6'>
        <ModeToggle/>

        


     


    </div>

 

    </div>

  )
}

export default Upbar