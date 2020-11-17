import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "./Components/Home";

import Adventures from "./Components/Adventures";
import Gallery from "./Components/Gallery";
import Maps from "./Components/Maps";
import NoMatch from "./Components/NoMatch";
import Navbar from "./Components/Navbar";
import Homee from "./Views/Homee";
import LoginPage from "./Views/LoginPage";

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
            <Route exact path="/" component={Homee} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/adventures" component={Adventures} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/map" component={Maps} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
