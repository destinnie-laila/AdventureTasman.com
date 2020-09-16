import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Adventures from './Components/Login';
import Gallery from './Components/Gallery';
import Maps from './Components/Maps';
import NoMatch from './Components/NoMatch';
class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Router>
          <Switch>
          <Route eact path="/" component ={Home}/>
          <Route path="/login" component ={Login}/>
          <Route path="/adventures" component ={Adventures}/>
          <Route path="/gallery" component ={Gallery}/>
          <Route path="/map" component ={Maps}/>
          <Route component={NoMatch} />
        

          </Switch>
        </Router>

      </React.Fragment>
    );
  }

}

export default App;
