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
	console.log(returnCookie(), "1");
	return returnCookie() ? (
		<Component />
	) : (
		<Component />
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
				<Redirect to="/Home" />
			</Route>
			<Route path="/Home" render={validateAuth(Dashboard)} />
			<Route path="/login" render={isLoggedIn()} />
			<Route exact path="/logout" >
				<Redirect to="/login" />
			</Route>
		</Switch>
	</Router>
);

export default App;