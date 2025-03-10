import React from "react";
import NavButton from "../Components/NavButton";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { PieChart } from "@mui/x-charts/PieChart";
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
const PhLevelData: DataItem[] = [{ name: "Current Ph Level", PhLevel: 50 }];

// Function to determine bar and text color based on pH value
const getBarColor = (value: number): string => {
  if (value < 20) return "#FF0000"; // Red for acidic (low pH)
  if (value >= 50 && value <= 70) return "#b8b80b"; // Yellow for neutral
  return "#008000"; // Green for alkaline (high pH)
};

const plantNutrients = [
  { id: 0, value: 35, label: "Nitrogen (N)", color: "#00A99D" },
  { id: 1, value: 30, label: "Phosphorus (P)", color: "#2E8BFF" },
  { id: 2, value: 20, label: "Potassium (K)", color: "#B800E6" },
  { id: 3, value: 15, label: "Magnesium (Mg)", color: "#56007C" },
];

const nutrientValueFormatter = (value: { value: number }) => `${value.value}%`;
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

        {/* {Pie Chart} */}
        <div className="mt-4 p-5 w-25 bg-white rounded shadow">
          <div>
            <h5>Nutrients Level</h5>
            <PieChart
              series={[
                {
                  data: plantNutrients,
                  highlightScope: { fade: "global", highlight: "item" },
                  valueFormatter: nutrientValueFormatter,
                  innerRadius: 10, // Increase for more spacing in the center
                  outerRadius: 150, // Increase for a bigger pie
                },
              ]}
              width={400} // Adjust chart width
              height={400} // Adjust chart height
              slotProps={{
                legend: {
                  position: { vertical: "middle", horizontal: "right" },
                  padding: -70, // Move legend text to the left
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTxt;
