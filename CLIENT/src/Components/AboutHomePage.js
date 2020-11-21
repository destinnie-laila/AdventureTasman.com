import React from "react";
import Container from "react-bootstrap/Container";


// Created a class that holds the information for about us, it is wrapped in a container
// The container is a bootstrap component and can be modified by cadding css to it
// I have a heading with the paragraph tag for content
//I have had to immport the react-bootstrap component container

const About = () => (
  <Container className="containersize">
    <h1 className="aboutTitle">Your Adventure Starts Here!</h1>

    <p className="aboutP">
      If your thrills come from being on or near the water, then a canyoning
      expedition or a white-water adventure should definitely be on the cards!
      Nelson Tasman has some of the best canyoning experiences in the country,
      where you can abseil down granite canyons and spectacular waterfalls, zip
      through unspoiled rainforest and land in some of the purest water in
      Aotearoa.
    </p>

    <p className="aboutP">
      Nelson Tasman is also home to the Murchison township, which sits on the
      Four Rivers Plain — the meeting point for the Mangles, Matiri, Matakitaki,
      and Buller rivers. Together they form the largest free-flowing catchment
      of water in New Zealand. It’s here that you’ll find the best white water
      rafting, white water kayaking, and jetboating all year round! Jetboating
      the Buller River at 85 km/hour is an exhilarating 40 minutes of pure
      thrill and high-speed action with sharp turns, V8 powered spins and
      rapids.
    </p>
  </Container>
);

export default About;
