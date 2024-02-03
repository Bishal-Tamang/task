import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import UserMain from "../pages/UserMain";
import Dashboard from "../pages/Dashboard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <UserMain />
          </Suspense>
        }
      >
        <Route index element={<Login />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
