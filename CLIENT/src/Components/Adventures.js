import React from "react";
import TourCard from "./TourCard"
// === Imports for login page only used basic html so no other imports needed

// == Creating a component that returns some html stuff
const Adventures = () => (
  <div>
    <h1 className="WelcomeTitle">Explore your Adventure</h1>
    <p>Check out what Nelson has to offer!</p>
    <TourCard/>
  </div>
);

// Must export the component so another can see it
export default Adventures;
