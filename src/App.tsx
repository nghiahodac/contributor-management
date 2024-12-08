import React from "react";
import ContributorManagement from "./components/ContributorManagement";

const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Contributor Management</h1>
      <ContributorManagement />
    </div>
  );
};

export default App;
