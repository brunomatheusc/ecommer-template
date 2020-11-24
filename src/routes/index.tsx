import React, { FC } from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import Menu from '../components/Menu';

import Home from '../pages/Home';
import Category from '../pages/Category';
import Footer from '../components/Footer';

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
					</div>

					{ <Footer /> }
				</>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;