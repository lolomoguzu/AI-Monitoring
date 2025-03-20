import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Tooltip,
} from "@mui/material";

// Define the type for a hydroponic plant entry
interface HydroponicPlant {
  name: string;
  nutrientLevel: string;
  waterPH: string;
  growthRate: string;
  healthStatus: string;
  aiRecommendation: string;
}

// Sample data with AI recommendations
const hydroponicPlants: HydroponicPlant[] = [
  {
    name: "Plants 1",
    nutrientLevel: "Optimal",
    waterPH: "6.2",
    growthRate: "Fast",
    healthStatus: "Healthy",
    aiRecommendation: "Maintain nutrient balance",
  },
  {
    name: "Plants 2",
    nutrientLevel: "Low",
    waterPH: "5.8",
    growthRate: "Moderate",
    healthStatus: "Needs Attention",
    aiRecommendation: "Increase nutrient supply",
  },
  {
    name: "Plants 3",
    nutrientLevel: "High",
    waterPH: "7.0",
    growthRate: "Slow",
    healthStatus: "Overfed",
    aiRecommendation: "Reduce nutrient concentration",
  },
  {
    name: "Plants 4",
    nutrientLevel: "Optimal",
    waterPH: "6.5",
    growthRate: "Fast",
    healthStatus: "Healthy",
    aiRecommendation: "Good conditions, keep monitoring",
  },
  {
    name: "Plants 5",
    nutrientLevel: "Medium",
    waterPH: "6.0",
    growthRate: "Steady",
    healthStatus: "Stable",
    aiRecommendation: "Maintain current conditions",
  },
  {
    name: "Plants 6",
    nutrientLevel: "Medium",
    waterPH: "6.0",
    growthRate: "Steady",
    healthStatus: "Stable",
    aiRecommendation: "Maintain current conditions",
  },
];

const HydroponicTable: React.FC = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#e8f5e9", borderRadius: 2, padding: 2 }}
    >
      <Table>
        {/* Table Header */}
        <TableHead>
          <TableRow sx={{ backgroundColor: "#a5d6a7" }}>
            <TableCell>
              <b>Letuce</b>
            </TableCell>
            <TableCell>
              <b>Nutrient Level</b>
            </TableCell>
            <TableCell>
              <b>Water pH</b>
            </TableCell>
            <TableCell>
              <b>Growth Rate</b>
            </TableCell>
            <TableCell>
              <b>Health Status</b>
            </TableCell>
            <TableCell>
              <b>AI Recommendation</b>
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {hydroponicPlants.map((plant, index) => (
            <TableRow key={index}>
              <TableCell>{plant.name}</TableCell>
              <TableCell>
                <Chip
                  label={plant.nutrientLevel}
                  sx={{
                    backgroundColor:
                      plant.nutrientLevel === "Low"
                        ? "#ffcc00"
                        : plant.nutrientLevel === "High"
                        ? "#e74c3c"
                        : "#2ecc71",
                    color: "white",
                  }}
                />
              </TableCell>
              <TableCell>{plant.waterPH}</TableCell>
              <TableCell>{plant.growthRate}</TableCell>
              <TableCell>
                <Chip
                  label={plant.healthStatus}
                  sx={{
                    backgroundColor:
                      plant.healthStatus === "Needs Attention"
                        ? "#ff9800"
                        : plant.healthStatus === "Overfed"
                        ? "#e74c3c"
                        : "#2ecc71",
                    color: "white",
                  }}
                />
              </TableCell>
              <TableCell>
                <Tooltip title="AI-Based Recommendation">
                  <span>{plant.aiRecommendation}</span>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HydroponicTable;
