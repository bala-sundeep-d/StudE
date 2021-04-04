import React from "react";
import {
	Route,
	BrowserRouter as Router,
	Switch,
	Redirect,
} from "react-router-dom";
import Cookies from 'js-cookie';

import Dashboard from './dashboard/Dashboard';
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
			<Route exact path={["/", "/dashboard"]} >
				<Redirect to="/home" />
			</Route>
			<Route path="/home" render={validateAuth(Dashboard)} />
			<Route path="/login" render={isLoggedIn()} />
			<Route exact path="/logout" >
				<Redirect to="/login" />
			</Route>
		</Switch>
	</Router>
);

export default App;