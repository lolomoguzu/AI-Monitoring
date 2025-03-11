import { PieChart } from "@mui/x-charts/PieChart";

const plantNutrients = [
  { id: 0, value: 35, label: "Nitrogen (N)", color: "#00A99D" },
  { id: 1, value: 30, label: "Phosphorus (P)", color: "#2E8BFF" },
  { id: 2, value: 20, label: "Potassium (K)", color: "#B800E6" },
  { id: 3, value: 15, label: "Magnesium (Mg)", color: "#56007C" },
];

const nutrientValueFormatter = (value: { value: number }) => `${value.value}%`;

const PlantNutrients = () => {
  return (
    <div>
      <h5>Nutrients Level</h5>
      <PieChart
        series={[
          {
            data: plantNutrients,
            highlightScope: { fade: "global", highlight: "item" },
            valueFormatter: nutrientValueFormatter,
            innerRadius: 10, // Increase for more spacing in the center
            outerRadius: 130, // Increase for a bigger pie
          },
        ]}
        width={400} // Adjust chart width
        height={400} // Adjust chart height
        slotProps={{
          legend: {
            position: { vertical: "middle", horizontal: "right" },
            padding: -70, // Move legend text to the left
          },
        }}
      />
    </div>
  );
};

export default PlantNutrients;
