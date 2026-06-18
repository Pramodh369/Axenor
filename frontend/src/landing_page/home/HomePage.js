import React from 'react';
import ProjectHighlights from './ProjectHighlights';
import Hero from './Hero';
import WorkFlow from './WorkFlow';
import TechStack from './TechStack';
import ProjectResults from './ProjectResults';
import { useEffect } from "react";
import AOS from "aos";

function HomePage(){
  useEffect(() => {
  AOS.refreshHard();
}, []);
   return(
    <>
  
      <Hero/>
      <ProjectHighlights/>
      <WorkFlow/>
      <TechStack/>
      <ProjectResults/>
      
    </>
   );
}
export default HomePage;