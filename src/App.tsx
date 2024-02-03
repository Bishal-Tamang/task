import { Routes, Route } from "react-router-dom";
import MainRoutes from './routes/MainRoutes';


const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainRoutes />} />
    </Routes>
  );
};

export default App;
