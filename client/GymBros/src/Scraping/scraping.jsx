import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';

function Scraping() {
  // Define state to store fetched data
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useUser();

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3500/scrape-gym-stats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setData1(result.popularexercises || []);
        setData2(result.industrystats || []);
      } catch (err) {
        setError('Error fetching data: ' + err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-black ">
      <div className="hidden md:flex flex-col w-64 bg-[#1e1e1e] pt-6 ">
        <div className="flex items-center justify-center h-16 bg-[#1e1e1e]">
          <button className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
            <a
              href="/dash"
              className="relative inline-flex items-center justify-center w-12 h-12 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              <img
                src={user.imageUrl}
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
            </a>
          </button>
          <span className="text-white font-bold uppercase ml-4">{user.fullName}</span>
        </div>

        {/* Sidebar nav */}
        <div className="flex flex-col flex-1 overflow-hidden">
                <nav className="flex-1 px-2 py-4 space-y-2">
                  <a href="/dash" className="flex items-center px-4 py-2 text-gray-100">
                    <div className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-3xl bg-[#1e1e1e] p-2 transition-colors duration-300 hover:bg-[#1e1e1e]">
                      <div className="space-y-2">
                        <span className="block h-1 w-8 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                        <span className="block h-1 w-6 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-8 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                      </div>
                    </div>
                    <span className="ml-2">Dashboard</span>
                  </a>

                  <a href="/scraping" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Global Statistics</span>
                  </a>
                </nav>
              </div>
            </div>

      <div className="flex flex-col flex-1 pt-6 text-gray-50 p-6 overflow-hidden">
        <h2 className="text-3xl font-semibold mb-4 p-4">Popular Exercises & Industry Stats</h2>        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Component data1={data1} />
          <div>
        <ul className=" rounded-lg p-4">
          {data2.map((stat, index) => (
            <li key={index} className="my-2 text-white font-semibold">
              {stat}
            </li>
          ))}
        </ul>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

const chartConfig = {
  desktop: {
    label: "Exercises",
    color: "hsl(var(--chart-1))",
  },
};

export function Component({ data1 }) {
  const chartData = Object.entries(data1).map(([name, value]) => ({
    name: name.toUpperCase(),
    percentage: parseFloat(value),
  }));
  console.log(chartData);
  return (
    <Card className="border border-orange-500 text-white">
      <CardHeader>
        <CardTitle>Most Popular Exercises</CardTitle>
        <CardDescription>Source - wod.guru/blog</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} className="custom-x-axis">
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fill="var(--color-desktop)"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent/>}
            />
            <Bar dataKey="percentage" fill="var(--color-desktop)" radius={8} />
          
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Yoga is the most trending excercise over the past year <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}


export default Scraping;
