import { RadialBar, RadialBarChart, Label, PolarRadiusAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import type { ChartConfig } from "@/components/ui/chart";

import { VENDOR_MONITORED } from "@/constants/index.ts";

const chartConfig = {
  monitored: { label: "Totaale monitored", color: "var(--chart-3)" },
  limit: { label: "Available limit", color: "var(--color-secondary)" },
} satisfies ChartConfig;

function AppRadialChart() {
  const totalLimits = VENDOR_MONITORED[0].monitored + VENDOR_MONITORED[0].limit;

  return (
    <ChartContainer config={chartConfig} className="h-[150px] w-[300px]">
      <RadialBarChart
        data={VENDOR_MONITORED}
        innerRadius={90}
        outerRadius={120}
        cy={130}
        startAngle={0}
        endAngle={180}
      >
        <RadialBar
          dataKey="limit"
          stackId="a"
          fill="var(--color-limit)"
          cornerRadius={15}
          className="stroke-transparent stroke-2"
        />

        <RadialBar
          dataKey="monitored"
          stackId="a"
          fill="var(--color-monitored)"
          cornerRadius={15}
          className="stroke-transparent stroke-2"
        />

        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground text-2xl font-bold"
                    >
                      {totalLimits.toLocaleString()}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>

        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
      </RadialBarChart>
    </ChartContainer>
  );
}

export default AppRadialChart;