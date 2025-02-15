import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MetapredictGame from "./components/Home";
// import Home from "./Pages/Home";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<MetapredictGame />} />
      <Route path="/full-view" element={<MetapredictGame />} />
    </Routes>
  );
};

export default App;