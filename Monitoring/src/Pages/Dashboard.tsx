import React from "react";
import NavButton from "../Components/NavButton";
import "../Design/Dashboard.css";
import Waterlevel from "../SensorComponents/Waterlevel";
import PlantNutrients from "../SensorComponents/PlantNutrients";
import SoilSensor from "../SensorComponents/SoilSensor";
import PlantsPreview from "../SensorComponents/Plants";
import { ArrowRepeat } from "react-bootstrap-icons";
import Temperature from "../SensorComponents/Temperature";

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* Navigation Button */}
      <NavButton />

      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mt-3 p-3 rounded shadow bg-white">
        <h1 className="mb-0">DASHBOARD PREVIEW</h1>
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
        <div className="ST">
          <SoilSensor />
          <Temperature />
        </div>
      </div>

      {/* Plants Preview */}
      <div className="mt-4">
        <PlantsPreview />
      </div>

      {/* Plant Nutrients Chart */}
      <div className="mt-4 p-3 bg-white rounded shadow">
        <PlantNutrients />
      </div>
    </div>
  );
};

export default Dashboard;
