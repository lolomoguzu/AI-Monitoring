import { gaugeClasses } from "@mui/x-charts/Gauge";
import { Gauge } from "@mui/x-charts";
import "../Design/SensorDesign/SoilSensor.css";
let soil_data = 30;

const SoilSensor = () => {
  return (
    <div className="soil-moisture">
      <div className="text-center mt-4">
        <h5>Soil Moisture</h5>

        <div className="position-relative d-inline-block">
          <Gauge
            width={300}
            height={200}
            value={soil_data}
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
          <div className="text-buttom">
            <span>1</span>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilSensor;
