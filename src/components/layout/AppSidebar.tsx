import { cn } from "@/lib/utils";

import Avatar from "react-avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useSidebar } from "@/components/ui/sidebar";

import { APP_SIDEBAR } from "@/constants/index";
import { Logo } from "@/assets/Logo";
import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import UserMenu from "../UserMenu";

export default function AppSidebar() {
  const { isMobile } = useSidebar();

  return (
    <Sidebar variant="floating" collapsible="icon">
      {/* sidebarheader */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Logo variant={isMobile ? "default" : "icon"} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* sidebar content */}
      <SidebarContent>
        {/* primary navigation */}
        <SidebarGroup>
          <SidebarMenu>
            {APP_SIDEBAR.primaryNav.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title} asChild>
                  <a href={item.url}>
                    <item.Icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* secondary navigation */}
        <SidebarGroup className="mt-auto">
          <SidebarMenu>
            {APP_SIDEBAR.secondaryNav.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title} asChild>
                  <a href={item.url}>
                    <item.Icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* sidebar footer */}
      <SidebarFooter className={cn(isMobile && "border-t")}>
        <SidebarMenu>
          <SidebarMenuItem className={cn(isMobile && "p-2")}>
            {isMobile ? (
              <div className="flex  justify-between items-start gap-2 ">
                <div className=" grid grid-cols-[36px_1fr] items-center gap-2">
                  <div className="relative">
                    <Avatar
                      src={APP_SIDEBAR.curProfile.src}
                      size="36"
                      round={true}
                    />
                    <div className="absolute bottom-0 left-0 bg-emerald-500 dark:emerald-400 border-2 rounded-full size-2 ring-sidebar "></div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold ">
                      {APP_SIDEBAR.curProfile.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {APP_SIDEBAR.curProfile.email}
                    </p>
                  </div>
                </div>

                <Button variant="ghost" size="icon-sm" aria-label="Signout">
                  <LogOutIcon />
                </Button>
              </div>
            ) : (
              <UserMenu />
            )} 
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      
    </Sidebar>
  );
}
 