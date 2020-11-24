import React, { FC } from 'react';

import { Container } from './styles';

import Button from '../Button';
import Badge from '../Badge';
import Flex from '../Flex';
import { FiChevronDown } from 'react-icons/fi';

const Pagination: FC = () => {
  	return (
		<Container>
			<Flex>
				<span>Page: 1 2 3 4</span>
			</Flex>

			<Button>Show more products&nbsp;<FiChevronDown /></Button>		

			<Flex align="center">
				<Badge>360</Badge>
				<span>Products</span>
			</Flex>
		</Container>
	);
}

export default Pagination;