import React from "react";
import TourCard from "./TourCard"
import { Container } from "@material-ui/core";
// === Imports for login page only used basic html so no other imports needed
// == Creating a component that returns some html stuff and passes through my LoginPage view as a jsx tag
function Adventures(props) {
  
  return (
<Container>
    <div>
      <h1 className="WelcomeTitle">Explore your Adventure</h1>
      <Container>
      <div class="row">
    <div class="col-sm">
    <TourCard/>
    </div>
    <div class="col-sm">
    <TourCard/>
    </div>
    <div class="col-sm">
    <TourCard/>
    </div>

  
    </div>
    </Container>

    <Container>
      <div class="row">
    <div class="col-sm">
    <TourCard/>
    </div>
    <div class="col-sm">
    <TourCard/>
    </div>
    <div class="col-sm">
    <TourCard/>
    </div>

  
    </div>
    </Container>
    </div>
    </Container>
  );
 
}

// Must export the component so another can see it
export default Adventures;
