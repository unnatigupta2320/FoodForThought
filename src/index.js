import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage.js';
import Header from './components/Header.js';
import Feedback from './components/Feedback.js';
import Impact from './components/Impact.js';
import AboutUs from './components/AboutUs.js';
import Volunteer from './components/Volunteer.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/impact" component={Impact} />
        <Route path="/about" component={AboutUs} />
        <Route path="/volunteer" component={Volunteer} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>    
    <Header />
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);