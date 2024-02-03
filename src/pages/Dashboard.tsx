import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "./Home";
import NotFound from "../components/NotFound";

import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { state } = useLocation();

  return (
    <>
      {state ? (
        <>
          <Navbar
            image={state?.decoded?.picture}
            name={state?.decoded?.name}
            email={state?.decoded?.email}
          />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Dashboard;
