import React from "react";
import { logoutService } from "../../services/services";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const logoutHandler = (): void => {
    navigate("/");
    logoutService();
  };

  return (
    <div>
      <button onClick={() => logoutHandler()}>Logout</button>
      <h3>Welcome to the Dashboard</h3>
    </div>
  );
};

export default DashboardPage;
