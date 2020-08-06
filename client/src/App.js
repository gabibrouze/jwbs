import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyles } from './utils';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import Header from './components/header/header.component';

import AuthPage from './pages/auth-page/auth-page.component';
import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';
// import EventsPage from './pages/eventpage/eventpage.component';
// import NewsPage from './pages/newspage/newpage.component';

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route
					exact
					path='/auth'
					render={() => (currentUser ? <Redirect to='/' /> : <AuthPage />)}
				/>
				<Route exact path='/checkout' component={CheckoutPage} />
			</Switch>
			<GlobalStyles />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
