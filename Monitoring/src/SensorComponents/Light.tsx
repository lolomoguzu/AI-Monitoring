//import React, { useState, useEffect } from "react";
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

interface LightData {
  time: string;
  intensity: number;
}

const sampleData: LightData[] = [
  { time: "00:00", intensity: 300 },
  { time: "01:00", intensity: 450 },
  { time: "02:00", intensity: 500 },
  { time: "03:00", intensity: 350 },
  { time: "04:00", intensity: 600 },
  { time: "05:00", intensity: 700 },
  { time: "06:00", intensity: 850 },
  { time: "07:00", intensity: 900 },
  { time: "08:00", intensity: 950 },
  { time: "09:00", intensity: 800 },
  { time: "10:00", intensity: 750 },
  { time: "11:00", intensity: 650 },
  { time: "12:00", intensity: 500 },
  { time: "13:00", intensity: 450 },
  { time: "14:00", intensity: 400 },
  { time: "15:00", intensity: 350 },
  { time: "16:00", intensity: 300 },
  { time: "17:00", intensity: 250 },
  { time: "18:00", intensity: 200 },
  { time: "19:00", intensity: 150 },
  { time: "20:00", intensity: 100 },
  { time: "21:00", intensity: 90 },
  { time: "22:00", intensity: 80 },
  { time: "23:00", intensity: 70 },
];

// const LightMonitoring: React.FC = () => {
//   const [data, setData] = useState<LightData[]>(sampleData);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/light-intensity"); // Replace with your actual API endpoint
//         const jsonData: LightData[] = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 5000); // Fetch new data every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

const Light = () => {
  return (
    <div style={{ width: "100%" }}>
      <h4 className="text-center">Light Intensity</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={sampleData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            label={{ value: "Time", position: "insideBottomRight", offset: -5 }}
          />
          <YAxis
            label={{ value: "Intensity", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="intensity" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Light;
