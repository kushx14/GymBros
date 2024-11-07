import React from 'react'

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

function Scraping() {
    return (
      <div className="text-cyan-50">
        <h2 className=" pt-6 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center text-cyan-50">
          Admin Insights for Management
        </h2>
        <br />
        <div className="p-6 flex flex-col md:flex-row gap-6 mx-auto justify-center items-center text-center">
          <Component />
          <Component3 />
          <Component2 />          
        </div>
      </div>
    );
  }
  

export const description = "A bar chart"
const chartData1 = [
  { metric: "Steps(k)", average: 73.82 },
  { metric: "Exercise", average: 61 },
  { metric: "Stand-Hours", average: 7.83 },
  { metric: "Move", average: 73 },
]

const chartData2 = [
  { metric: "Sleep-Hours", average: 7.73 },
  { metric: "Heart-Rate", average: 62 },
  { metric: "Variability", average: 33.3 },
]

const chartData3 = [
    { month: "August", users: 2 },
    { month: "September", users: 3 },
    { month: "October", users: 3 },
    { month: "November", users: 6 },
  ]

const chartConfig = {
    color: "#2563eb",
    theme: {
      light: "#2563eb",
      dark: "#dc2626",
    },
}

export function Component() {
  return (
    <Card className='border-orange-500'>
      <CardHeader>
        <CardTitle>Average Activity</CardTitle>
        <CardDescription>All Users</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData1}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="metric"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="average" fill="#4a90e2" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Average Activity metrics of users <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}

export function Component2() {
  return (
    <Card className='border-orange-500'>
      <CardHeader>
        <CardTitle>Average Health Metrics</CardTitle>
        <CardDescription>All Users</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData2}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="metric"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="average" fill="#ff7f0e" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
        Average Health metrics of users<TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}


  const chartConfig3 = {
    users: {
      label: "users",
      color: "hsl(var(--chart-5))",
      theme: "dark"
    },
  }
  export function Component3() {
    return (
      <Card className='border-orange-500'>
        <CardHeader>
          <CardTitle>Line Chart - Linear</CardTitle>
          <CardDescription>August to November 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig3}>
            <LineChart
              accessibilityLayer
              data={chartData3}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="users"
                type="linear"
                stroke="var(--color-users)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 200% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 4 months
          </div>
        </CardFooter>
      </Card>
    )
  }

export default Scraping
