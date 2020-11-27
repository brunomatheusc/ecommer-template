import React, { FC, useState } from 'react';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';
import Breadcrumb from '../../components/Breadcrumb';
import Navigation from '../../components/Navigation';
import Filter from '../../components/Filter';

import ListView from './ListView';
import GridView from './GridView';
import useNavigation from '../../context/NavigationContext';

const Category: FC = () => {
	const { listType } = useNavigation();

	return (
		<>
			<Breadcrumb />
			<Navigation />
			<Filter />

			<Container>
				<Sidebar />

				{ (listType == 'list') ? <ListView /> : <GridView />}				
			</Container>

			<Pagination />
		</>
	);
}

export default Category;