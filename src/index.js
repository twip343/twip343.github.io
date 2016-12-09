import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SearchPage from './Search';
import TweetMap from './TweetMap'
import LogInDashboard from './LogInDashboard';
import RegisterDashboard from './RegisterDashboard';
import UserInfo from './UserInfo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'



ReactDOM.render(
	<MuiThemeProvider>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={LogInDashboard}/>
				<Route path="trips" component={LogInDashboard}/>
				<Route path="register" component={RegisterDashboard}/>
				<Route path="search" component={SearchPage}/>
                <Route path="userinfo" component={UserInfo}/>
				<Route path="logIn" component={LogInDashboard}/>
			</Route>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('root')
)
