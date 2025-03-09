import React from "react";
import NavButton from "../Components/NavButton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Pie,
  PieChart,
} from "recharts";
import "../Design/Dashboard.css";

// Define Data Types
interface DataItem {
  name: string;
  Water?: number;
  Temperature?: number;
  PhLevel?: number;
  value?: number;
}

// Sample Data
const waterData: DataItem[] = [{ name: "Current Water", Water: 30 }];
const temperatureData: DataItem[] = [
  { name: "Current Temperature", Temperature: 13 },
];
const PhLevelData: DataItem[] = [{ name: "Current Ph Level", PhLevel: 60 }];
// Function to determine bar and text color based on pH value
const getBarColor = (value: number): string => {
  if (value < 20) return "#FF0000"; // Red for acidic (low pH)
  if (value >= 50 && value <= 70) return "#FFFF00"; // Yellow for neutral
  return "#008000"; // Green for alkaline (high pH)
};

const pieData: DataItem[] = [
  { name: "Nitrogen", value: 100 },
  { name: "Phosphorus", value: 300 },
  { name: "Potassium", value: 300 },
  { name: "Calcium", value: 200 },
];

const COLORS: string[] = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Pie Chart Label Renderer
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx = "Potassium",
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: string;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// Main Dashboard Component
const HeaderTxt: React.FC = () => {
  return (
    <div>
      <NavButton />
      <h1 className="dashboard-title">DASHBOARD PREVIEW</h1>
      <div className="dashboard-grid">
        {/* Water Level */}
        <div className="mt-4 p-3 bg-white rounded shadow">
          <h5>Water Level</h5>
          <BarChart width={300} height={300} data={waterData}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="Water" fill="#22C55E" />
          </BarChart>
        </div>

        {/* Temperature */}
        <div className="mt-4 p-3 bg-white rounded shadow">
          <h5>Temperature</h5>
          <BarChart width={300} height={300} data={temperatureData}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="Temperature" fill="#F97316" />
          </BarChart>
        </div>

        {/* PH Level */}
        <div className="mt-4 p-3 bg-white rounded shadow">
          <h5>PH Level</h5>
          <BarChart width={300} height={300} data={PhLevelData}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip
              content={({ payload }) => {
                if (payload && payload.length) {
                  const phValue = payload[0].value as number;
                  return (
                    <div
                      style={{
                        background: "#fff",
                        padding: "10px",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <p>Current Ph Level</p>
                      <p
                        style={{
                          margin: 0,
                          color: getBarColor(phValue),
                        }}
                      >
                        PhLevel: {phValue}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="PhLevel">
              {PhLevelData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getBarColor(entry.PhLevel!)}
                />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="mt-4 p-3 bg-white rounded shadow">
          <h5>Nutrients</h5>
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HeaderTxt;
