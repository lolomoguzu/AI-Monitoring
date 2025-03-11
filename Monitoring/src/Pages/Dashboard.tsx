import NavButton from "../Components/NavButton";
import "../Design/Dashboard.css";
import Waterlevel from "../SensorComponents/Waterlevel";
import Temperature from "../SensorComponents/Temperature";
import PlantNutrients from "../SensorComponents/PlantNutrients";
import Phlevel from "../SensorComponents/Phlevel";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div>
        <NavButton />
      </div>
      <h1 className="dashboard-title">DASHBOARD PREVIEW</h1>
      <div className="dashboard-grid">
        {/* Water Level */}
        <div className="mt-4 p-3 bg-white rounded shadow">
          <Waterlevel />
        </div>
        {/* Temperature */}
        <div className="mt-4 p-3 bg-white rounded shadow">
          <Temperature />
        </div>
        {/* PH Level */}
        <div className="mt-4 p-3 bg-white rounded shadow">
          <Phlevel />
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
