import React, { FC } from 'react';

import useNavigation from '../../context/NavigationContext';

import { FiGrid, FiList } from 'react-icons/fi';
import { Container, Options, Frame, Badge } from './styles';

const Navigation: FC = () => {
	const { setType } = useNavigation();

	return (
		<Container>
			<h1>Fruit and vegetables</h1>

			<Options>
				<Frame onClick={ () => setType('grid') }>
					<FiGrid color="var(--color-primary)" />
					<span>Grid view</span>
				</Frame>

				<Frame onClick={ () => setType('list') }>
					<FiList color="var(--color-primary)" className="inactive" />
					<span>List view</span>
				</Frame>

				<Frame>
					<Badge>117</Badge>
					<span>Products</span>
				</Frame>

			</Options>
		</Container>
	);
}

export default Navigation;