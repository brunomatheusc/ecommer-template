import React, { FC } from 'react';
import Product from '../../../components/Product';

import { Container, Box } from './styles';

const GridView: FC = () => {
  	return (
		<Container flexDirection="column" flex={ 1 }>
			{ [0, 1, 2].map((_, index) => {
				return (
					<Box flex={ 1 } justify="space-between" key={ index }>
						{ [0, 1, 2].map((_, index) => {
							return (<Product key={ index }/>);
						})}
					</Box>
				);
			})}
		</Container>
	);
}

export default GridView;