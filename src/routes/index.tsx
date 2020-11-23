import React, { FC } from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Navigation from '../components/Navigation';
import Home from '../pages/Home';

const Routes: FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<>
					<Header />
					<Menu />
					<Breadcrumb />
					<Navigation />
					<Filter />
					
					<div className="main">
						<Route path="/" exact component={ Home } />
					</div>

					<Footer />
				</>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;