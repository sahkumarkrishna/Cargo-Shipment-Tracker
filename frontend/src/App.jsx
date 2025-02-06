import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Shipment from "./pages/Shipment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/shipment/:id" element={<Shipment />} />
      </Routes>
    </Router>
  );
};

export default App;
