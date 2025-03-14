const PowerPlantTable: React.FC = () => {
  const data = [
    {
      location: "Brightfalcon",
      turbine: "DWT",
      actual: "11,981 kW",
      expected: "12,027 kW",
      production: "100%",
      status: "Available",
    },
    {
      location: "Brightfalcon",
      turbine: "HWT",
      actual: "20,528 kW",
      expected: "26,061 kW",
      production: "78.77%",
      status: "Available",
    },
    {
      location: "Brookden",
      turbine: "DWT",
      actual: "11,643 kW",
      expected: "12,648 kW",
      production: "92%",
      status: "Offline",
    },
    {
      location: "Brookden",
      turbine: "HAWT",
      actual: "6,603 kW",
      expected: "6,950 kW",
      production: "95.01%",
      status: "Available",
    },
    {
      location: "Coldsilver",
      turbine: "DWT",
      actual: "12,005 kW",
      expected: "12,833 kW",
      production: "93.5%",
      status: "Available",
    },
    {
      location: "Coldsilver",
      turbine: "SWT",
      actual: "11,956 kW",
      expected: "12,380 kW",
      production: "96.8%",
      status: "Available",
    },
    {
      location: "Crystalmont",
      turbine: "HAWT",
      actual: "6,121 kW",
      expected: "6,178 kW",
      production: "99.6%",
      status: "Available",
    },
  ];

  return (
    <div className="container mt-4">
      <h5 className="fw-bold">
        Plants Details <span className="text-secondary">&#x24D8;</span>
      </h5>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr className="table-primary">
              <th>Location</th>
              <th>Nutrients</th>
              <th>Actual Output</th>
              <th>Expected Output</th>
              <th>Production Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className={row.status === "Offline" ? "text-danger" : ""}>
                  {row.location}
                </td>
                <td>{row.turbine}</td>
                <td>{row.actual}</td>
                <td>{row.expected}</td>
                <td>
                  <span className="badge bg-success text-white p-2">
                    {row.production}
                  </span>
                </td>
                <td
                  className={
                    row.status === "Offline" ? "text-danger" : "text-success"
                  }
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PowerPlantTable;
