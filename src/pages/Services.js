import React from "react";
import StudyVisa from "../services/StudyVisa";
import TouristVisa from "../services/TouristVisa";
import Pvisa from "../services/Pvisa";  // keep the same casing as file and component
import VisitorVisa from "../services/VisitorVisa";
import WorkVisa from "../services/WorkVisa";







const Services = () => {
  return (
    <div>
      <StudyVisa />
      <TouristVisa />
      <Pvisa />   {/* Correct usage, no .js */}
      <VisitorVisa/>
      <WorkVisa/>
      
      
    </div>
  );
};

export default Services;
