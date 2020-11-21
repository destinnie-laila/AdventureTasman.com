import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "./Components/Home";

import Adventure from "./Views/Adventure";
import Gallery from "./Components/Gallery";
import Maps from "./Components/Maps";
import NoMatch from "./Components/NoMatch";
import Navbar from "./Components/Navbar";
import HomePage from "./Views/Homee";
import LoginPage from "./Views/LoginPage";
import Footer from "./Components/footer";

// == All my components are imported to my app.js as this is the one page application
//== This also uses routes which routes a page page
// == fragments is used to wrap things up
//== A Navbar function was created then placed as a closing tag
class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/adventures" component={Adventure} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/map" component={Maps} />
            <Route component={NoMatch} />
          </Switch>
          <Footer/>
        </Router>
      </Fragment>
    );
  }
}

export default App;
