import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { ThermometerHalf } from "react-bootstrap-icons"; // Import Bootstrap Icon

const data: number = 70;

const Temperature: React.FC = () => {
  return (
    <div className="container text-center mt-4">
      <h5 className="fw-bold">Temperature</h5>

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
      <div className="d-flex justify-content-between px-3 mt-2 text-secondary">
        <span>1°C</span>
        <span>100°C</span>
      </div>
    </div>
  );
};

export default Temperature;
