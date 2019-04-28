import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import Login from '../components/login/Login';
import Register from '../components/signup/Signup';
import Dashboard from '../components/home/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
        <ToastContainer draggable={true} position={"top-right"}/>
      </BrowserRouter>
    );
  }
}

export default App;