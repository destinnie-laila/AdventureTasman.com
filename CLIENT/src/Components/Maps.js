import React from "react";
import SimpleMap from "./googleMaps";
// ===== All my imports for the corresponding page that the components will draw from at top of page ====== //

// == Creating a component that returns some html stuff
const Maps = () => (
  <div>
    <h1 className="mapTitle">Map of Tasman Region</h1>
    <SimpleMap />
  </div>
);

// == Export component for import use in other areas == //
export default Maps;
