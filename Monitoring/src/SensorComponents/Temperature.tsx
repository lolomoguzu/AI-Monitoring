import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { ThermometerHalf } from "react-bootstrap-icons"; // Import Bootstrap Icon
import "../Design/SensorDesign/Temperature.css";
const data: number = 40;

const Temperature: React.FC = () => {
  return (
    <div className="temperature">
      <div className="text-center mt-4">
        <h5>Temperature</h5>

        <div className="position-relative d-inline-block">
          {/* MUI Gauge */}
          <Gauge
            width={300}
            height={200}
            value={data}
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
                fontSize: 30,
              },
            }}
            text={({ value }) => `${value}°C`} // Display °C Symbol
          />

          {/* Bootstrap Thermometer Icon (Centered) */}
          <div
            className="position-absolute top-50 start-50 translate-middle text-danger"
            style={{ fontSize: "40px" }}
          >
            <ThermometerHalf />
          </div>
        </div>

        {/* Min & Max Labels */}
        <div className="text-buttom">
          <span>1°C</span>
          <span>100°C</span>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
