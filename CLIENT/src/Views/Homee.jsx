import React from "react";
import Home from "../Components/Home";
import kahurangi from "../Images/kahurangi.jpeg";
import Image from "react-bootstrap/Image";
import About from "../Components/AboutHomePage";
const Homee = () => (
  <Home>
    <Image src={kahurangi} fluid />
    <About/>
  </Home>
  
);

export default Homee;
