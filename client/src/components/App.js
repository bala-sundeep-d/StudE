import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Cookies from 'js-cookie';
import Dashboard from './Dashboard';
import Login from './login/Login';

const returnCookie = () => Cookies.get('auth_token');


const validateAuth = (Component) => () => {
  return returnCookie() ? (
    <Component />
  ) : (
    <Redirect to="/login" />
  );
};

const isLoggedIn = () => () => {
  return returnCookie() ? (
    <Redirect to="/" />
  ) : (
    <Login />
  );
};

const App = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/login" render={ isLoggedIn() } />
      <Route exact path={["/", "/dashboard"]} render={ validateAuth(Dashboard) } />
    </Switch>
  </Router>
);

export default App;