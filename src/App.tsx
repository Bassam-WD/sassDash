import { ThemeProvider } from "./components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "./components/layout/AppSidebar";
import Header from "./components/Header";
import { Page, PageHeader } from "./components/Page";
import DashbordCard from "@/components/DashbordCard";
import AppBarChart from "@/components/layout/AppBarChart";
import AppRadialChart from "./components/layout/AppRadialChart";
import { TrendingUpIcon } from "lucide-react";
import DashbordTable from "./components/layout/DashbordTable";

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

              {/* App Charts */}
              <div className="grid gap-6 py-8 lg:grid-cols-[1fr_360px]">
                <DashbordCard
                  title="Vendor breakdown"
                  description="Keep track of vendors and their security ratings "
                  buttonText="View full report"
                >
                  <AppBarChart />
                </DashbordCard>

                <DashbordCard
                  title="Vendor monitored"
                  description="You're using 80% of available spots."
                  buttonText="Upgrade plan"
                >
                  <div className="flex justify-between items-start">
                    <AppRadialChart />

                    <div className="flex items-center gap-2">
                      <TrendingUpIcon
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                      <span className="text-green-500 dark:text-green-400 text-sm font-medium">
                        12%
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-8">
                    <p className="font-medium">
                      you've almost reached your limit 
                    </p>
                    <p className="text-muted-foreground">
                      You have used 80% of your available monitoring spots. Upgrade your plan to monitor more vendors 
                    </p>
                  </div>
                </DashbordCard>
              </div>
              
              {/* dashboard Table */}
              <DashbordTable />  
                

            </Page>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
 