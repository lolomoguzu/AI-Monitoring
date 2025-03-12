import NavButton from "../Components/NavButton";
import SideBar from "../Components/Sidebar";
import "../Design/Dashboard.css";
import Waterlevel from "../SensorComponents/Waterlevel";
import PlantNutrients from "../SensorComponents/PlantNutrients";
import SoilSensor from "../SensorComponents/SoilSensor";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <NavButton />
      <div>
        <h1 className="dashboard-title">DASHBOARD PREVIEW</h1>
      </div>
      <div>
        <div className="dashboard-container">
          {/*Soil Moisture */}
          <div className="mt-4 p-3 w-2 bg-white rounded shadow">
            <SoilSensor />
          </div>
          {/* Water Level */}
          <div className="mt-4 p-3 w-2 bg-white rounded shadow">
            <Waterlevel />
          </div>
        </div>
        {/* Temperature */}

        {/* PH Level */}

        {/* {Pie Chart} */}
        <div className="mt-4 p-3 bg-white rounded shadow">
          <PlantNutrients />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
