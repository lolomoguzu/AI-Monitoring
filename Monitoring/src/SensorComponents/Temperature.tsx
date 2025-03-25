import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { ThermometerHalf } from "react-bootstrap-icons";
import "../Design/SensorDesign/Temperature.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Temperature: React.FC = () => {
  const [Temperature, setTemperature] = useState(50); // Default value

  useEffect(() => {
    const fetchHumidity = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/temperature");
        setTemperature(response.data.temperature); // Assuming API returns {"humidity": value}
      } catch (error) {
        console.error("Error fetching humidity:", error);
      }
    };

    // Fetch data every 5 seconds
    const interval = setInterval(fetchHumidity, 7000);

    // Initial fetch
    fetchHumidity();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="temperature">
      <div className="text-center mt-4">
        <h5>Temperature</h5>

        <div className="position-relative d-inline-block">
          {/* MUI Gauge */}
          <Gauge
            width={220}
            height={140}
            value={Temperature}
            startAngle={-110}
            endAngle={110}
            innerRadius="75%"
            outerRadius="100%"
            cornerRadius={10}
            sx={{
              [`& .${gaugeClasses.valueArc}`]: {
                stroke: "black",
                fill: "Red", // Set Gauge Arc Color to Red
              },
              [`& .${gaugeClasses.valueText}`]: {
                fill: "black", // Set Text Color
                fontSize: 25,
              },
            }}
            text={({ value }) => `${value}°C`} // Display °C Symbol
          />

          {/* Bootstrap Thermometer Icon (Centered) */}
          <div
            className="position-absolute top-50 start-50 translate-middle text-danger"
            style={{ fontSize: "30px" }}
          >
            <ThermometerHalf />
          </div>
        </div>

        {/* Min & Max Labels */}
        <div className="text-buttom-temp">
          <span>1°C</span>
          <span>100°C</span>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
