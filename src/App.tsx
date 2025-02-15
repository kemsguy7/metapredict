import React from "react";
import { Routes, Route, useLocation,  } from "react-router-dom";
import FullView from "./components/Home/FullView";


// import Navbar from "./components/Navbar";
// import FooterSection from "./components/Footer";
import Home from "./Pages/Home ";



const App: React.FC = () => {
  
  const location = useLocation();
  

  return (
    
      <Routes location={location}>
        <Route path="/" element={<Home />} />
       
        <Route path="/full-view" element={<FullView />} />
        
      
       
      </Routes>
    

  );
};

export default App;
 