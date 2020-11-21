import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

// ===== All my imports for the corresponding page that the components will draw from at top of page ====== //
// Creating a component called Home with some return values
// A jumbotron and a container are added to the home page with css in the heading 1
//using props to allow for children elements such as images and abount content
const Home = props => (
  <Jumbotron fluid>
    <h1 className="home-title">Welcome, Tasman Adventures</h1>
    {props.children}
  </Jumbotron>
);

// Must export the component so another can see it

export default Home;
