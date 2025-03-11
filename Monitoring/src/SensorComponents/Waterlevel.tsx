import Stack from "@mui/material/Stack";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

const Waterlevel = () => {
  const [hovered, setHovered] = useState(false);
  const waterLevel = 50;
  return (
    <div>
      <h5>Water Level</h5>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 5 }}>
        <Tooltip
          title={hovered ? `Water Level: ${waterLevel}%` : ""}
          arrow
          placement="top"
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Gauge
              width={300}
              height={370}
              value={50}
              valueMax={100}
              text={({ value }) => `Water: ${value}%`}
              sx={{
                cursor: "pointer",
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: "40px",
                  fontWeight: "bold",
                  fill: "#000",
                },
              }}
            />
          </div>
        </Tooltip>
      </Stack>
    </div>
  );
};

export default Waterlevel;
