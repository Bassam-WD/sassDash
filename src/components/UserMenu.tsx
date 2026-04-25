import Avatar from "react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

/**
 * Assets
 */
import { PlusIcon } from "lucide-react";

/**
 * constants
 */
import { APP_SIDEBAR } from "@/constants";


export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer">
          <Avatar src={APP_SIDEBAR.curProfile.src} size="32" round={true} />
          <div className="absolute bottom-0 left-0 bg-emerald-500 dark:emerald-400 border-2 rounded-full size-2 ring-sidebar "></div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="right" align="end" className="w-60">
        <DropdownMenuGroup>
          {APP_SIDEBAR.userMenu.itemsPrimary.map((item) => (
            <DropdownMenuItem key={item.title}>
              <item.Icon />
              <span> {item.title} </span>

              {item.kbd && (
                <DropdownMenuShortcut>{item.kbd}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup
          value={APP_SIDEBAR.curProfile.email}
          className="space-y-1"
        >
          <DropdownMenuLabel className="px-2">Switch Account</DropdownMenuLabel>
          {APP_SIDEBAR.allProfiles.map((profile) => (
            <DropdownMenuRadioItem
              key={profile.email}
              value={profile.email}
              className="data-[state=checked]:bg-secondary"
            >
              <div className=" grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-2">
                <div className="relative">
                  <Avatar src={profile.src} size="36" round={true} />
                  <div className="absolute bottom-0 left-0 bg-emerald-500 dark:emerald-400 border-2 rounded-full size-2 ring-sidebar ring-1"></div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold ">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {profile.email}
                  </p>
                </div>
              </div>
            </DropdownMenuRadioItem>
          ))}
          <DropdownMenuItem>
            <Button variant="outline" size="sm" className="w-full">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Account
            </Button>
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {APP_SIDEBAR.userMenu.itemsSecondary.map((item) => (
            <DropdownMenuItem key={item.title}>
              <item.Icon />
              <span>{item.title}</span>
              {item.kbd && (
                <DropdownMenuShortcut>{item.kbd}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
