import React from "react";
import Home from "../Components/Home";
import kahurangi from "../Images/kahurangi.jpeg";
import Image from "react-bootstrap/Image";

const Homee = () => (
  <Home name="blah">
    <Image src={kahurangi} fluid />
  </Home>
);

export default Homee;
