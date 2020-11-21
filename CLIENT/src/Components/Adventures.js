import React from "react";
import cards from "./card";
// === Imports for login page only used basic html so no other imports needed

// == Creating a component that returns some html stuff
function Adventures() {
return(

  <div>
  <h1 className="WelcomeTitle">Explore your Adventure</h1>
  <p>Check out what Nelson has to offer!</p>
 <cards/>
</div>
)

}
 


// Must export the component so another can see it
export default Adventures;
