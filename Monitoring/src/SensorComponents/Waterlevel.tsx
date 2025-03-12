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
    <div>
      <h5>Water Level</h5>
      <ResponsiveContainer width="100%" height={350} minWidth={600}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name">
            <Label value="Level" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />

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
  );
};

export default Waterlevel;
