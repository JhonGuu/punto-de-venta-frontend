"use client";

import { Percent } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";
import { CustomIcon } from "@/components";
import { dataSuscribers } from "./TotalSuscribers.data";
export const TotalSuscribers = () => {
 
  return (
    <div className="mb-4 shadow-sm bg-background rounded-lg p-5 w-full xl:w-96 hover:shadow-lg transition">
      <div className="flex gap-x-2 items-center mb-4">
        <CustomIcon icon={Percent} />
        <p className="text-xl">Total Suscribers</p>
      </div>
      <div className="w-full h-[300px] p-5 ">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={dataSuscribers}
              outerRadius={80}
              labelLine={false}
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default TotalSuscribers;
