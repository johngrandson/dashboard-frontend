import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/_authenticated/Home';
import './style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={Home} />
          <Redirect from='/' to='/login' />
      </div>
    </Router>
  );
}

export default App;
