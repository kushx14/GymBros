import './profile.css'
import { useUser } from '@clerk/clerk-react'
import { useState, useEffect } from 'react'


import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

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
import { Separator } from "@/components/ui/separator"

export const description = "A collection of health charts."

export default function Charts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) { 
      console.log("here");
      const fetchData = async () => {
        try {
          console.log(user.id);
          const response = await fetch('https://gymbros-our8.onrender.com/getfitnessdata', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
              'Accept': 'application/json',
            },
            body: JSON.stringify({ userid: user.id }), 
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          console.log(response);
          const result = await response.json();
          console.log(result);
          console.log("Hereeee");
          setData(result);
        } catch (error) {
          setError(error.message);
        }
      };
      if(data) console.log(data);
      fetchData();
    }
  }, [isLoaded, user]); 

  return (
    <div>
    {data ? (
      <div>
        <div className=' overflow-hidden' >
<div className="chart-wrapper mx-auto flex max-w-100 flex-col flex-wrap items-start justify-center  gap-6 p-6 sm:flex-row sm:p-8 dark-mode overflow-y-hidden">
    <div className='flex justify-center gap-6'>
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[20rem] lg:grid-cols-1 xl:max-w-[20rem] ">
      <Card
  className="lg:max-w-md border border-orange-500" x-chunk="charts-01-chunk-0"
>
  <CardHeader className="space-y-0 pb-2">
    <CardDescription>Today</CardDescription>
    <CardTitle className="text-4xl tabular-nums">
      {data.steps.today} {" "}
      <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
        steps
      </span>
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ChartContainer
      config={{
        steps: {
          label: "Steps",
          color: "hsl(var(--chart-1))",
        },
      }}
    >
      <BarChart
        accessibilityLayer
        margin={{
          left: -4,
          right: -4,
        }}
        data={[
          {
            date: "2024-01-01",
            steps: 2000,
          },
          {
            date: "2024-01-02",
            steps: 2100,
          },
          {
            date: "2024-01-03",
            steps: 2200,
          },
          {
            date: "2024-01-04",
            steps: 1300,
          },
          {
            date: "2024-01-05",
            steps: 1400,
          },
          {
            date: "2024-01-06",
            steps: 2500,
          },
          {
            date: "2024-01-07",
            steps: 1600,
          },
        ]}
      >
        <Bar
          dataKey="steps"
          fill="var(--color-steps)"
          radius={5}
          fillOpacity={0.6}
          activeBar={<Rectangle fillOpacity={0.8} />}
        />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={4}
          tickFormatter={(value) => {
            return new Date(value).toLocaleDateString("en-US", {
              weekday: "short",
            })
          }}
        />
        <ChartTooltip
          defaultIndex={2}
          content={
            <ChartTooltipContent
              hideIndicator
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}
            />
          }
          cursor={false}
        />
        <ReferenceLine
          y={1200}
          stroke="hsl(var(--muted-foreground))"
          strokeDasharray="3 3"
          strokeWidth={1}
        >
          <Label
            position="insideBottomLeft"
            value=""
            offset={10}
            fill="hsl(var(--foreground))"
          />
          <Label
            position="insideTopLeft"
            value=""
            className="text-lg"
            fill="hsl(var(--foreground))"
            offset={10}
            startOffset={100}
          />
        </ReferenceLine>
      </BarChart>
    </ChartContainer>
  </CardContent>
  <CardFooter className="flex-col items-start gap-1">
    <CardDescription>
      Over the past 7 days, you have walked{" "}
      <span className="font-medium text-foreground">{data.steps.last7Days}</span> steps.
    </CardDescription>
    <CardDescription>
      You need{" "}
      <span className="font-medium text-foreground">{data.steps.goal - data.steps.today}</span> more
      steps to reach your goal.
    </CardDescription>
  </CardFooter>
</Card>

<Card
  className="flex flex-col lg:max-w-md border border-orange-500" x-chunk="charts-01-chunk-1"
>
  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
    <div>
      <CardDescription>Resting HR</CardDescription>
      <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
        {data.restingHeartRate}{" "}
        <span className="text-sm font-normal tracking-normal text-muted-foreground">
          bpm
        </span>
      </CardTitle>
    </div>
    <div>
      <CardDescription>Variability</CardDescription>
      <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
      {data.variability}{" "}
        <span className="text-sm font-normal tracking-normal text-muted-foreground">
          ms
        </span>
      </CardTitle>
    </div>
  </CardHeader>
  <CardContent className="flex flex-1 items-center">
    <ChartContainer
      config={{
        resting: {
          label: "Resting",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="w-full"
    >
      <LineChart
        accessibilityLayer
        margin={{
          left: 14,
          right: 14,
          top: 10,
        }}
        data={[
          {
            date: "2024-01-01",
            resting: 62,
          },
          {
            date: "2024-01-02",
            resting: 72,
          },
          {
            date: "2024-01-03",
            resting: 35,
          },
          {
            date: "2024-01-04",
            resting: 62,
          },
          {
            date: "2024-01-05",
            resting: 52,
          },
          {
            date: "2024-01-06",
            resting: 62,
          },
          {
            date: "2024-01-07",
            resting: 70,
          },
        ]}
      >
        <CartesianGrid
          strokeDasharray="4 4"
          vertical={false}
          stroke="hsl(var(--muted-foreground))"
          strokeOpacity={0.5}
        />
        <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => {
            return new Date(value).toLocaleDateString("en-US", {
              weekday: "short",
            })
          }}
        />
        <Line
          dataKey="resting"
          type="natural"
          fill="var(--color-resting)"
          stroke="var(--color-resting)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            fill: "var(--color-resting)",
            stroke: "var(--color-resting)",
            r: 4,
          }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              indicator="line"
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}
            />
          }
          cursor={false}
        />
      </LineChart>
    </ChartContainer>
  </CardContent>
</Card>

      </div>
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
      <Card
  className="max-w-xs border border-orange-500" x-chunk="charts-01-chunk-2"
>
  <CardHeader>
    <CardTitle>Progress</CardTitle>
    <CardDescription>
      You're averaging more steps a day this year than last year.
    </CardDescription>
  </CardHeader>
  <CardContent className="grid gap-4">
    <div className="grid auto-rows-min gap-2">
      <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
      {data.progress.averageThisYear}{" "}
        <span className="text-sm font-normal text-muted-foreground">
          steps/day
        </span>
      </div>
      <ChartContainer
        config={{
          steps: {
            label: "Steps",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="aspect-auto h-[32px] w-full"
      >
        <BarChart
          accessibilityLayer
          layout="vertical"
          margin={{
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
          data={[
            {
              date: "2024",
              steps: 12435,
            },
          ]}
        >
          <Bar
            dataKey="steps"
            fill="var(--color-steps)"
            radius={4}
            barSize={32}
          >
            <LabelList
              position="insideLeft"
              dataKey="date"
              offset={8}
              fontSize={12}
              fill="white"
            />
          </Bar>
          <YAxis dataKey="date" type="category" tickCount={1} hide />
          <XAxis dataKey="steps" type="number" hide />
        </BarChart>
      </ChartContainer>
    </div>
    <div className="grid auto-rows-min gap-2">
      <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
      {data.progress.averageLastYear}{" "}
        <span className="text-sm font-normal text-muted-foreground">
          steps/day
        </span>
      </div>
      <ChartContainer
        config={{
          steps: {
            label: "Steps",
            color: "hsl(var(--muted))",
          },
        }}
        className="aspect-auto h-[32px] w-full"
      >
        <BarChart
          accessibilityLayer
          layout="vertical"
          margin={{
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
          data={[
            {
              date: "2023",
              steps: data.progress.averageLastYear,
            },
          ]}
        >
          <Bar
            dataKey="steps"
            fill="var(--color-steps)"
            radius={4}
            barSize={32}
          >
            <LabelList
              position="insideLeft"
              dataKey="date"
              offset={8}
              fontSize={12}
              fill="hsl(var(--muted-foreground))"
            />
          </Bar>
          <YAxis dataKey="date" type="category" tickCount={1} hide />
          <XAxis dataKey="steps" type="number" hide />
        </BarChart>
      </ChartContainer>
    </div>
  </CardContent>
</Card>

        <Card
  className="max-w-xs border border-orange-500"
>
  <CardHeader className="p-4 pb-0">
    <CardTitle>Walking Distance</CardTitle>
    <CardDescription>
    </CardDescription>
  </CardHeader>
  <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-0">
    <div className="flex items-baseline gap-1 text-3xl font-bold tabular-nums leading-none">
    {data.walkingDistance}{" "}
      <span className="text-sm font-normal text-muted-foreground">
        miles/day
      </span>
    </div>
    <ChartContainer
      config={{
        steps: {
          label: "Steps",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="ml-auto w-[72px]"
    >
      <BarChart
        accessibilityLayer
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        data={[
          {
            date: "2024-01-01",
            steps: 2000,
          },
          {
            date: "2024-01-02",
            steps: 2100,
          },
          {
            date: "2024-01-03",
            steps: 2200,
          },
          {
            date: "2024-01-04",
            steps: 1300,
          },
          {
            date: "2024-01-05",
            steps: 1400,
          },
          {
            date: "2024-01-06",
            steps: 2500,
          },
          {
            date: "2024-01-07",
            steps: 1600,
          },
        ]}
      >
        <Bar
          dataKey="steps"
          fill="var(--color-steps)"
          radius={2}
          fillOpacity={0.2}
          activeIndex={6}
          activeBar={<Rectangle fillOpacity={0.8} />}
        />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={4}
          hide
        />
      </BarChart>
    </ChartContainer>
  </CardContent>
</Card>

<Card
  className="max-w-xs border border-orange-500"
>
  <CardContent className="flex gap-4 p-4 pb-2">
    <ChartContainer
      config={{
        move: {
          label: "Move",
          color: "hsl(var(--chart-1))",
        },
        stand: {
          label: "Stand",
          color: "hsl(var(--chart-2))",
        },
        exercise: {
          label: "Exercise",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[140px] w-full"
    >
      <BarChart
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 10,
        }}
        data={[
          {
            activity: "stand",
            value: data.stand.hours / data.stand.goal,
            label: `${data.stand.hours}/${data.stand.goal} hours`,  
            fill: "var(--color-stand)",
          },
          {
            activity: "exercise",
            value: data.exercise.minutes / data.exercise.goal,
            label: `${data.exercise.minutes}/${data.exercise.goal} minutes`,
            fill: "var(--color-exercise)",
          },
          {
            activity: "move",
            value: data.move.calories / data.move.goal,
            label: `${data.move.calories}/${data.move.goal} calories`,
            fill: "var(--color-move)",
          },
        ]}
        layout="vertical"
        barSize={32}
        barGap={2}
      >
        <XAxis type="number" dataKey="value" hide />
        <YAxis
          dataKey="activity"
          type="category"
          tickLine={false}
          tickMargin={4}
          axisLine={false}
          className="capitalize"
        />
        <Bar dataKey="value" radius={5}>
          <LabelList
            position="insideLeft"
            dataKey="label"
            fill="white"
            offset={8}
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  </CardContent>
  <CardFooter className="flex flex-row border-t p-4">
    <div className="flex w-full items-center gap-2">
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-xs text-muted-foreground">Move</div>
        <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
        {data.move.calories}{" "}
          <span className="text-sm font-normal text-muted-foreground">
            kcal
          </span>
        </div>
      </div>
      <Separator orientation="vertical" className="mx-2 h-10 w-px" />
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-xs text-muted-foreground">Exercise</div>
        <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
        {data.exercise.minutes}{" "}
          <span className="text-sm font-normal text-muted-foreground">
            min
          </span>
        </div>
      </div>
      <Separator orientation="vertical" className="mx-2 h-10 w-px" />
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-xs text-muted-foreground">Stand</div>
        <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
        {data.stand.hours}{" "}
          <span className="text-sm font-normal text-muted-foreground">
            hr
          </span>
        </div>
      </div>
    </div>
  </CardFooter>
</Card>

      </div>
      <div className="grid w-full flex-1 gap-6">
      <Card
  className="max-w-xs border border-orange-500" x-chunk="charts-01-chunk-5"
>
  <CardContent className="flex gap-4 p-4">
    <div className="grid items-center gap-2">
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-sm text-muted-foreground">Move</div>
        <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
        {data.move.calories}{"/"}{data.move.goal}
          <span className="text-sm font-normal text-muted-foreground">
            kcal
          </span>
        </div>
      </div>
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-sm text-muted-foreground">Exercise</div>
        <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
        {data.exercise.minutes}{"/"}{data.exercise.goal}
          <span className="text-sm font-normal text-muted-foreground">
            min
          </span>
        </div>
      </div>
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-sm text-muted-foreground">Stand</div>
        <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
        {data.stand.hours}{"/"}{data.stand.goal}
          <span className="text-sm font-normal text-muted-foreground">
            hr
          </span>
        </div>
      </div>
    </div>
    <ChartContainer
      config={{
        move: {
          label: "Move",
          color: "hsl(var(--chart-1))",
        },
        exercise: {
          label: "Exercise",
          color: "hsl(var(--chart-2))",
        },
        stand: {
          label: "Stand",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="mx-auto aspect-square w-full max-w-[80%]"
    >
      <RadialBarChart
        margin={{
          left: -10,
          right: -10,
          top: -10,
          bottom: -10,
        }}
        data={[
          {
            activity: "stand",
            value: data.stand.hours*100 / data.stand.goal,
            fill: "var(--color-stand)",
          },
          {
            activity: "exercise",
            value: data.exercise.minutes*100 / data.exercise.goal,
            fill: "var(--color-exercise)",
          },
          {
            activity: "move",
            value: data.move.calories*100 / data.move.goal,
            fill: "var(--color-move)",
          },
        ]}
        innerRadius="20%"
        barSize={24}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey="value"
          tick={false}
        />
        <RadialBar dataKey="value" background cornerRadius={5} />
      </RadialBarChart>
    </ChartContainer>
  </CardContent>
</Card>

<Card
  className="max-w-xs border border-orange-500" x-chunk="charts-01-chunk-6"
>
  <CardHeader className="p-4 pb-0">
    <CardTitle>Active Energy</CardTitle>
    <CardDescription>
      You're burning an average of {data.activeEnergy.calories} calories per day. Good job!
    </CardDescription>
  </CardHeader>
  <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
    <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
    {data.activeEnergy.calories}
      <span className="text-sm font-normal text-muted-foreground">
        kcal/day
      </span>
    </div>
    <ChartContainer
      config={{
        calories: {
          label: "Calories",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="ml-auto w-[64px]"
    >
      <BarChart
        accessibilityLayer
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        data={[
          {
            date: "2024-01-01",
            calories: 354,
          },
          {
            date: "2024-01-02",
            calories: 514,
          },
          {
            date: "2024-01-03",
            calories: 345,
          },
          {
            date: "2024-01-04",
            calories: 734,
          },
          {
            date: "2024-01-05",
            calories: 645,
          },
          {
            date: "2024-01-06",
            calories: 456,
          },
          {
            date: "2024-01-07",
            calories: 345,
          },
        ]}
      >
        <Bar
          dataKey="calories"
          fill="var(--color-calories)"
          radius={2}
          fillOpacity={0.2}
          activeIndex={6}
          activeBar={<Rectangle fillOpacity={0.8} />}
        />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={4}
          hide
        />
      </BarChart>
    </ChartContainer>
  </CardContent>
</Card>

<Card
  className="max-w-xs border border-orange-500" x-chunk="charts-01-chunk-7"
>
  <CardHeader className="space-y-0 pb-0">
    <CardDescription>Time in Bed</CardDescription>
    <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
      {data.timeInBed.slice(0, 2)}
      <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
        hr
      </span>
      {data.timeInBed.slice(3, 5)}
      <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
        min
      </span>
    </CardTitle>
  </CardHeader>
  <CardContent className="p-0">
    <ChartContainer
      config={{
        time: {
          label: "Time",
          color: "hsl(var(--chart-2))",
        },
      }}
    >
      <AreaChart
        accessibilityLayer
        data={[
          {
            date: "2024-01-01",
            time: 8.5,
          },
          {
            date: "2024-01-02",
            time: 7.2,
          },
          {
            date: "2024-01-03",
            time: 8.1,
          },
          {
            date: "2024-01-04",
            time: 6.2,
          },
          {
            date: "2024-01-05",
            time: 5.2,
          },
          {
            date: "2024-01-06",
            time: 8.1,
          },
          {
            date: "2024-01-07",
            time: 7.0,
          },
        ]}
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="date" hide />
        <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
        <defs>
          <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-time)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-time)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="time"
          type="natural"
          fill="url(#fillTime)"
          fillOpacity={0.4}
          stroke="var(--color-time)"
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
          formatter={(value) => (
            <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
              Time in bed
              <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                {value}
                <span className="font-normal text-muted-foreground">
                  hr
                </span>
              </div>
            </div>
          )}
        />
      </AreaChart>
    </ChartContainer>
  </CardContent>
</Card>

      </div>
      </div>
    </div>
    </div>
      </div>
    ) : null}
  </div>
    
  )
}


