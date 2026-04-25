import { ThemeProvider } from "./components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import AppSidebar from "./components/layout/AppSidebar";
import Header from "./components/Header"
import { Page , PageHeader } from "./components/Page";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <SidebarProvider open={false}>
          <AppSidebar />


          <SidebarInset>
            <Header />
            
            <Page>
              <PageHeader />

              <div className="">
          
              </div>
            </Page>
          </SidebarInset>

        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
