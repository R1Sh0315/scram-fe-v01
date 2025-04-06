import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DashboardPage from "./components/dashboard/dashboard";
import SignPage from "./components/authPages/autho-pages";
import AuthPage from "./components/HOC/authPage";
import ProtectedRoute from "./components/HOC/protectedRoute";

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthPage>
                <SignPage />
              </AuthPage>
            }
          />
           <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}
