import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { type ChartConfig } from "@/components/ui/chart";

import { VENDOR_BREAKDOWN } from "@/constants/index.ts";
const chartConfig = {
  eu: { label: "EU", color: "var(--chart-1)" },
  us: { label: "US", color: "var(--chart-2)" },
  eg: { label: "EG", color: "var(--chart-3)" },
} satisfies ChartConfig;

import { useIsMobile } from "@/hooks/use-mobile";

export default function AppBarChart() {
  const isMobile = useIsMobile();

  return (
    <ChartContainer config={chartConfig} className="h-70 lg:h-52 w-full">
      <BarChart
        accessibilityLayer
        data={VENDOR_BREAKDOWN}
        barSize={isMobile ? 12 : 30}
      >
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        {!isMobile && <YAxis tickLine={false} axisLine={false} />}

        <Bar dataKey="eg" fill={chartConfig.eg.color} stackId="a" />
        <Bar dataKey="us" fill={chartConfig.us.color} stackId="a" />
        <Bar
          dataKey="eu"
          fill={chartConfig.eu.color}
          stackId="a"
          radius={[8, 8, 0, 0]}
        />

        <ChartTooltip content={<ChartTooltipContent />} />
        {!isMobile && (
          <ChartLegend
            content={
              <p className="font-semibold mt-3 text-muted-foreground ">
                Monthly Vendor Breakdown
              </p>
            }
          />
        )}
      </BarChart>
    </ChartContainer>
  );
}
