import "../Design/SensorDesign/waterLevel.css";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import axios from "axios";
import { useState, useEffect } from "react";

// Custom Tooltip Component

const Waterlevel: React.FC = () => {
  const [data, setData] = useState<{ time: string; Water: number }[]>([]);

  // Fetch data from FastAPI
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/water-level");
        const newData = {
          time: new Date().toLocaleTimeString(),
          Water: response.data.Water,
        };

        setData((prevData) => [...prevData.slice(-20), newData]);
      } catch (error) {
        console.error("Error fetching water level data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 7000); // Refresh data every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="water-level">
        <div className="text-center">
          <h5 className="fw-bold">Water Level</h5>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 20, bottom: 30 }}
          >
            {/* Gradient for Area Fill */}
            <defs>
              <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* X-Axis */}
            <XAxis dataKey="time">
              <Label value="Time" offset={-5}  position="insideBottom" />
            </XAxis>

            {/* Y-Axis */}
            <YAxis
              label={{ value: "Intensity", angle: -90, position: "insideLeft" }}
            />

            {/* Grid & Tooltip */}
            <CartesianGrid strokeDasharray="1 4" />
            <Tooltip
              formatter={(value, name) => [`${value}`, name]}
              labelFormatter={(label) => `${label}`}
            />

            {/* Area Chart */}
            <Area
              type="monotone"
              dataKey="Water"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorWater)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Waterlevel;
