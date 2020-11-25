import React, { FC } from 'react';

import { FiGrid, FiList } from 'react-icons/fi';


import { Container, Options, Frame, Badge } from './styles';

const Navigation: FC = () => {
	return (
		<Container>
			<h1>Fruit and vegetables</h1>

			<Options>
				<Frame>
					<FiGrid color="#6a983c" />
					<span>Grid view</span>
				</Frame>

				<Frame>
					<FiList color="#6a983c" className="inactive" />
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