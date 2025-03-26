import { useState, useEffect } from "react";
import axios from "axios";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import "../Design/SensorDesign/Humidity.css";

const HumiditySensor = () => {
  // 🌡 State variables
  const [humidity, setHumidity] = useState(100); // Displayed value
  const [targetHumidity, setTargetHumidity] = useState(100); // API value

  // 🌍 Fetch Humidity Data
  useEffect(() => {
    const fetchHumidity = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/humidity");
        setTargetHumidity(response.data.humidity); // Store target value
      } catch (error) {
        console.error("Error fetching humidity:", error);
      }
    };

    fetchHumidity(); // Initial fetch
    const interval = setInterval(fetchHumidity, 7000); // Refresh every 7 sec

    return () => clearInterval(interval);
  }, []);

  // 🔄 Smooth Transition Effect
  useEffect(() => {
    const smoothUpdate = () => {
      setHumidity((prev) => prev + (targetHumidity - prev) * 0.1); // Step towards target
      if (Math.abs(humidity - targetHumidity) > 0.5) {
        requestAnimationFrame(smoothUpdate);
      }
    };

    smoothUpdate();
  }, [targetHumidity]);

  return (
    <div className="soil-moisture">
      <div className="text-center mt-4">
        <h5>Humidity</h5>

        <div className="position-relative d-inline-block">
          <Gauge
            width={200}
            height={140}
            value={humidity}
            startAngle={-110}
            endAngle={110}
            innerRadius="75%"
            outerRadius="100%"
            cornerRadius={10}
            text={({ value }) => `${Math.round(value ?? 0)}%`}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                transform: "translate(0px, 0px)",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                stroke: "#050505",
                transition: "stroke 0.5s ease-in-out",
              },
            }}
          />
          <div className="text-buttom-soil">
            <span>1</span>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumiditySensor;
