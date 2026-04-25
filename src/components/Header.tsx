import { Logo } from "@/assets/Logo"

import { ModeToggle } from "./ui/ModeToggle"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { useSidebar } from "./ui/sidebar"



export default function Header() {
    const {toggleSidebar} = useSidebar()

  return (
    <header className="flex justify-between gap-1 items-center py-3 ps-4 pe-2 border-b lg:hidden">
        <Logo/>
        <div className="ml-auto"> 
            <ModeToggle /> 
        </div>
        
        <Button variant="ghost" size='icon' onClick={toggleSidebar} aria-label="Toggle mobile menue">
            <MenuIcon/>
        </Button>

    </header>
  )
}
