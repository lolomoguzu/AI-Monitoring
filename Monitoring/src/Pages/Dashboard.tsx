import NavButton from "../Components/NavButton";
import "../Design/Dashboard.css";
import Waterlevel from "../SensorComponents/Waterlevel";
import PlantNutrients from "../SensorComponents/PlantNutrients";
import SoilSensor from "../SensorComponents/Humidity";
import PlantsPreview from "../SensorComponents/Plants";
import { ArrowRepeat } from "react-bootstrap-icons";
import Temperature from "../SensorComponents/Temperature";
import LightSensor from "../SensorComponents/Light";
const Dashboard: React.FC = () => {
  return (
    <div className="background">
      {/* Navigation Button */}
      <NavButton />

      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mt-3 p-3 rounded shadow bg-white">
        <h1>DASHBOARD PREVIEW</h1>
        <button className="btn btn-light p-2 border rounded shadow-sm">
          <ArrowRepeat size={30} />
        </button>
      </div>

      {/* Dashboard Content */}

      {/* Row for Water Level, Temperature and Soil Sensors */}

      {/* Row 1 for design*/}
      <div className="row1">
        <div>
          <Waterlevel />
        </div>
        <div className="soil-temp">
          <SoilSensor />
          <Temperature />
        </div>
      </div>

      {/* Plants Preview */}

      <PlantsPreview />
      <LightSensor />
      {/* Plant Nutrients Chart */}

      <PlantNutrients />
    </div>
  );
};

export default Dashboard;
