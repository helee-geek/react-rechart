import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";

const data = [
  { name: "JS", student: 10, fees: 20 },
  { name: "React Js", student: 20, fees: 30 },
  { name: "Node Js", student: 15, fees: 90 },
  { name: "Python", student: 25, fees: 50 },
  { name: "PHP", student: 12, fees: 30 },
];

const CustomPieChart = () => {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="student"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            label
          />
          <Pie
            data={data}
            dataKey="fees"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
