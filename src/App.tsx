import React from "react";
import { Routes, Route, useLocation,  } from "react-router-dom";
import MetapredictGame from "./components/Home/index";


// import Navbar from "./components/Navbar";
// import FooterSection from "./components/Footer";
import Home from "./Pages/Home ";



const App: React.FC = () => {
  
  const location = useLocation();
  

  return (
    
      <Routes location={location}>
        <Route path="/" element={<Home />} />
       
        <Route path="/full-view" element={<MetapredictGame />} />
        
      
       
      </Routes>
    

  );
};

export default App;
 