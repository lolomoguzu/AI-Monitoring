import NavButton from "../Components/NavButton";
import "../Design/Dashboard.css";
import Waterlevel from "../SensorComponents/Waterlevel";
import PlantNutrients from "../SensorComponents/PlantNutrients";
import SoilSensor from "../SensorComponents/SoilSensor";
import PlantsPreview from "../SensorComponents/Plants";
import React from "react";
import { ArrowRepeat } from "react-bootstrap-icons";
import Temperature from "../SensorComponents/Temperature";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-grid">
      <NavButton />
      <div>
        <h1 className="d-flex justify-content-between align-items-center mt-1 p-2 rounded shadow bg-white">
          DASHBOARD PREVIEW
          <button className="btn btn-light p-2 border rounded shadow-sm me-5">
            <ArrowRepeat size={37} />
          </button>
        </h1>
      </div>
      <div>
        <div className="dashboard-container">
          {/* Water Level */}
          <div className="d-flex justify-content-between align-items-center me-5">
            <div>
              <Waterlevel />
            </div>
            {/*Soil Moisture */}
            <div>
              <div className="mt-4 p-3 w-1 bg-white rounded shadow">
                <SoilSensor />
              </div>
              <div className="mt-4 p-3 w-2 bg-white rounded shadow">
                <Temperature />
              </div>
            </div>
          </div>
        </div>
        {/* Temperature */}

        {/* PH Level */}
        {/* Plants */}
        <div>
          <PlantsPreview />
        </div>
        {/* {Pie Chart} */}
        <div className="mt-4 p-3 bg-white rounded shadow">
          <PlantNutrients />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
