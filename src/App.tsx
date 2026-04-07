import { ModeToggle } from "./components/ui/ModeToggle";
import { ThemeProvider } from "./components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import AppSidebar from "./components/layout/AppSidebar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <SidebarProvider open={false}>
          <AppSidebar />
          <SidebarInset>
            <h1 className="text-3xl font-bold underline text-center text-blue-500 ">
              App
            </h1>
            <ModeToggle />
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
