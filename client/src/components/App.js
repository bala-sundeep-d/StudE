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
import CourseContent from "./CourseContent/CourseContent";
import Discussions from "./Discussions/Discussions";
import Notes from "./Notes/Notes";
import NewNotes from "./Notes/NewNotes";

const returnCookie = () => Cookies.get('auth_token');


const validateAuth = (Component) => () => {
  console.log(returnCookie(), "1");
  return returnCookie() ? (
    <Component />
  ) : (
    <Redirect to="/login" />
  );
};

const isLoggedIn = () => () => {
  console.log(returnCookie());
  return returnCookie() ? (
    <Redirect to="/" />
  ) : (
    <Login />
  );
};

const App = (props) => (
  <Router {...props}>
    <Switch>      
      <Route exact path={["/", "/dashboard"]} >
        <Redirect to="/courses"/></Route>
      <Route path="/courses" render={ validateAuth(Dashboard) } />
      <Route path="/login" render={ isLoggedIn() } />
      <Route exact path="/logout" >
        <Redirect to="/login"/></Route>
      <Route path="/notes" render={ validateAuth(Notes)} />
    </Switch>
  </Router>
);

export default App;