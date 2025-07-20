  // import React from "react";
  import { chartData } from "@/data/dummyData";
  import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  const Chart: React.FC = () => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6 w-full text-black dark:text-white">
        <h2 className="text-lg font-semibold mb-4">Revenue</h2>
        <ResponsiveContainer width={"100%"} height={200}>
          <LineChart width={300} height={100} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Legend />
            <Line
              type={"monotone"}
              dataKey={"value"}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  export default Chart;
