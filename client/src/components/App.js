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
      <Route exact path={["/", "/dashboard"]} render={ validateAuth(Dashboard) } />
      <Route path="/login" render={ isLoggedIn() } />
      <Route path="/course" render={(props) => <CourseContent {...props}/>}/>
      <Route path="/discussions" component={Discussions}/>
      <Route path="/notes" component={Notes}/>
      <Route path="/newnote" component={NewNotes}/>
    </Switch>
  </Router>
);

export default App;