import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Adventures from './Components/Adventures';
import Gallery from './Components/Gallery';
import Maps from './Components/Maps';
import NoMatch from './Components/NoMatch';
import Navbar from './Components/Navbar';



class App extends Component {
  render() {
    return (
      <Fragment>
       
        <Router>
        
          <Navbar/>
     
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route exact path="/login" component ={Login} />
            <Route exact path="/adventures" component ={Adventures} />
            <Route exact path="/gallery" component ={Gallery} />
            <Route  exact path="/map" component ={Maps} />
            <Route component={NoMatch} />
            </Switch>
           
        </Router>
       
      </Fragment>
    );
  }

}

export default App;
