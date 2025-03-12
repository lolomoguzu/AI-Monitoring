import { gaugeClasses } from "@mui/x-charts/Gauge";
import { Gauge } from "@mui/x-charts";

let data = 30;

const SoilSensor = () => {
  return (
    <div>
      <h5>Soil Moisture</h5>
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
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 30,
            transform: "translate(0px, 0px)",
          },
        }}
        text={({ value }) => `${value}%`}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 30,
          color: "#aaa",
        }}
      >
        <span>1</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default SoilSensor;
