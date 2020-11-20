import React from "react";
import LoginContext from "../Views/LoginContext";

// === Imports for login page only used basic html so no other imports needed

// == Creating a component that returns some html stuff
function Login() {
  return (
    <div>
      <h1 className="WelcomeTitle"> WELCOME</h1>{" "}
     
  <LoginContext/>
    </div>
  );
}
// == Export component to be used elsewhere == //
export default Login;
