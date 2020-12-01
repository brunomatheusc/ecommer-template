import React, { FC } from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import Menu from '../components/Menu';

import Home from '../pages/Home';
import Category from '../pages/Category';
import Footer from '../components/Footer';
import Detail from '../pages/Detail';
import Checkout from '../pages/Checkout';

const Routes: FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<>
					<Header />
					<Menu />
					
					<div className="main">
						<Route path="/" exact component={ Home } />
						<Route path="/category" component={ Category } />
						<Route path="/product" component={ Detail } />
						<Route path="/checkout" component={ Checkout } />
					</div>

					{ <Footer /> }
				</>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;