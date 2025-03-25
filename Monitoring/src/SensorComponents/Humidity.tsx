import { gaugeClasses } from "@mui/x-charts/Gauge";
import { Gauge } from "@mui/x-charts";
import "../Design/SensorDesign/Humidity.css";
import { useState, useEffect } from "react";
import axios from "axios";

const HumiditySensor = () => {
  const [humidity, setHumidity] = useState(50); // Default value

  useEffect(() => {
    const fetchHumidity = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/humidity");
        setHumidity(response.data.humidity); // Assuming API returns {"humidity": value}
      } catch (error) {
        console.error("Error fetching humidity:", error);
      }
    };

    const interval = setInterval(fetchHumidity, 7000);

    // Initial fetch
    fetchHumidity();

    return () => clearInterval(interval);
  }, []);

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
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                transform: "translate(0px, 0px)",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                stroke: "#050505",
              },
            }}
            text={({ value }) => `${value}%`}
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
