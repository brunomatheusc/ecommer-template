import React, { FC } from 'react';
import Button from '../Button';

import { Container, Image, Title, Info, Price } from './styles';

interface ProductProps {
	title: string;
	imageURL: string;
	description: string;
	price: number;
	buttonName: string;
}

const Product: FC = () => {
	return (
		<Container>
			<Image />
			<Title>Product Title</Title>
			<span>Space for a small product description</span>

			<Info>
				<Price>1.48 USD</Price>
				<Button buttonType="colored" size="small">Buy now</Button>
			</Info>
		</Container>
	);
}

export default Product;