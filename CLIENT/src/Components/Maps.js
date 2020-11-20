import React from "react";
import SimpleMap from "./googleMaps"
// ===== All my imports for the corresponding page that the components will draw from at top of page ====== //


// == Creating a component that returns some html stuff
const Maps = () => (
  <div>
    <SimpleMap/>
    <h1>Map</h1>
    <p>The Tasman Area</p>
  </div>
);

// == Export component for import use in other areas == //
export default Maps;
