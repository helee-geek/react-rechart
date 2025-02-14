import React from "react";
import "./App.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Rectangle,
  PieChart,
  Pie,
  Cell
} from "recharts";

const data = [
  {
    name: "JS",
    student: 10,
    fees: 20,
  },
  {
    name: "React Js",
    student: 20,
    fees: 30,
  },
  {
    name: "Node Js",
    student: 15,
    fees: 90,
  },
  {
    name: "Python",
    student: 25,
    fees: 50,
  },
  {
    name: "PHP",
    student: 12,
    fees: 30,
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const App = () => {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      {" "}
      <ResponsiveContainer width="100%" aspect={3}>
        <h2>Line Chart</h2>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis
            dataKey="name"
            interval={"preserveStartEnd"}
            tickFormatter={(value) => value + " Programing"}
          />
          <Tooltip contentStyle={{ backgroundColor: "#444445" }} />
          <YAxis />
          <Legend />
          <Line
            type="monotone"
            dataKey="student"
            stroke="blue"
            strokeWidth={2}
            activeDot={{ r: 6, fill: "red" }}
          />
          <Line
            dataKey="fees"
            stroke="skyblue"
            strokeWidth={2}
            activeDot={{ r: 6, fill: "green" }}
          />
        </LineChart>
        <br />
        <hr />

        <h2>Area Chart</h2>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#444445" }} />

          <Area dataKey="fees" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <br />
        <hr />

        <h2>Bar Chart</h2>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#444445" }} />
          <Legend />
          <Bar
            dataKey="student"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="fees"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>

        <br />
        <hr />
        <h2>Pie Chart</h2>

        <PieChart>
          <Pie
            data={data}
            dataKey="student"
            outerRadius={60}
            fill="#8884d8"
            label
          >
            {" "}
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default App;
