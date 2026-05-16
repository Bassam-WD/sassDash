import { DASHBOARD_CARD_MENU } from "@/constants";

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon } from "lucide-react";

// Types
type Props = {
  title: string;
  description: string;
  text?: string;
  buttonText: string;
  footerText?: string;
};

export default function DashbordCard({
  title,
  description,
  buttonText,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Card className="bg-background ">
      <CardHeader className="border-b flex  justify-between">
        <div>
          <CardTitle>{title}</CardTitle>

          <CardDescription>{description}</CardDescription>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <EllipsisVerticalIcon size={20} />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {DASHBOARD_CARD_MENU.map((item) => (
              <DropdownMenuItem key={item.label}>
                <item.Icon />
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

      </CardHeader>

      <CardContent className="grid grid-cols-1 grow">
        {children}
      </CardContent>


      <CardFooter>
        <Button variant="outline" className="ml-auto">
          {buttonText}
        </Button>
      </CardFooter> 
    </Card>
  );
}
