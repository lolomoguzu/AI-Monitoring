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

let data = [
  { Water: 10 },
  { Water: 100 },
  { Water: 5 },
  { Water: 70 },
  { Water: 20 },
  { Water: 100 },
  { Water: 50 },
];

// Custom Tooltip Component

const Waterlevel: React.FC = () => {
  return (
    <div
      className="mt-4 p-3 bg-white rounded shadow"
      style={{ maxWidth: "100%", overflow: "hidden" }}
    >
      <div className="container text-center">
        <h5 className="fw-bold">Water Level</h5>

        <div style={{ width: "100%", height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%" minWidth={1000}>
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
              <XAxis dataKey="name">
                <Label value="Months" offset={-5} position="insideBottom" />
              </XAxis>

              {/* Y-Axis */}
              <YAxis />

              {/* Grid & Tooltip */}
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />

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
    </div>
  );
};

export default Waterlevel;
