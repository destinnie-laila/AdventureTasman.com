import React from "react";
import LoginContext from "../Views/LoginContext";
// === Imports for login page only used basic html so no other imports needed

// == Creating a component that returns some html stuff
function Login() {
  return (
    <div>
      <h1> This is Login </h1>{" "}
      <p> Welcome to the Login Page please sign up! </p>{" "}
  <LoginContext/>
    </div>
  );
}
// == Export component to be used elsewhere == //
export default Login;
