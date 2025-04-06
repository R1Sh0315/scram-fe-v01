import React from "react";
import { logoutService } from "../../services/services";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const logoutHandler = (): void => {
    navigate("/");
    logoutService();
  };

  // mobile - 300px - 672px
  // tab - 672px - 990px
  // laptop - 990px - 1296px
  // Desktop - 1296px - more


  return (
    <div>
      <button onClick={() => logoutHandler()}>Logout</button>
      <Box
        sx={(theme) => ({
          border: "1px solid black",
          mt: 2,
          p: 2,
          bgcolor: "lightgray",
          [theme.breakpoints.down("md")]: {
            backgroundColor: "#fce4ec",
            minWidth: '300px'
          },
          [theme.breakpoints.between("md", "lg")]: {
            backgroundColor: "#fff9c4",
          },
          [theme.breakpoints.between("lg", "xl")]: {
            backgroundColor: "#c8e6c9",
          },
          [theme.breakpoints.up("xl")]: {
            backgroundColor: "#bbdefb",
          },
        })}
      />

    </div>
  );
};

export default DashboardPage;
