import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

// ===== All my imports for the corresponding page that the components will draw from at top of page ====== //

// Creating a component called Home with some return values
// A jumbotron and a container are added to the home page with css in the heading 1

const Home = (props) => (
  <Jumbotron fluid>
 
      <h1 className="home-title">This is Home</h1>
      <p>I have been working on thiis for too long </p>
      {props.children}
      {props.name}
  </Jumbotron>
);

// Must export the component so another can see it

export default Home;

