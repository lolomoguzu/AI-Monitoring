import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartOptions,
  ChartData,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define types for props
interface SpectrumChartProps {
  wavelengths: number[];
  intensities: number[];
}

const SpectrumChart: React.FC<SpectrumChartProps> = ({
  wavelengths,
  intensities,
}) => {
  // Define chart data
  const data: ChartData<"line"> = {
    labels: wavelengths,
    datasets: [
      {
        label: "Light Spectrum",
        data: intensities,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
      },
    ],
  };

  // Chart options
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Wavelength (nm)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Intensity",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SpectrumChart;
