import React, { FC } from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';
import Button from '../Button';
import Input from '../Input';

import { Container, Wrapper, Title, Categories, CategoryWrapper, CategoryName, Quantity, Brands, Rating, Price, MinMax, Finish } from './styles';

const Sidebar: FC = () => {
	function Stars(stars: number): JSX.Element[] {
		let starItems: JSX.Element[] = [];

		for (let i = 0; i < 5; i++) {
			starItems.push((i < stars) ? <MdStar size={ 18 } color="#fdbc15" key={ i } /> : <MdStarBorder size={ 18 } key={ i } />);
		}

		return starItems;
	}

	return (
		<Container>
			<Categories>
				<Title>Categories</Title>

				{ [320, 112, 32, 42].map((category, index) => {
					return (
						<CategoryWrapper key={ index }>
							<CategoryName>Category name</CategoryName>
							<Quantity>{ category}</Quantity>
						</CategoryWrapper>
					);
				})}
			</Categories>

			<Brands>
				<Title>Brands</Title>

				{ [0, 1, 2, 3, 4].map((_, index) => {
					return (
						<Wrapper key={ index }>
							<input type="checkbox"/>
							<span>Filtre by brand item</span>				
						</Wrapper>
					);
				}) }				
			</Brands>

			<Rating>
				<Title>Rating</Title>

				{ [5, 4, 3, 2, 1].map(rate => {
					return(
						<Wrapper key={ rate }>
							<input type="checkbox"/>
							{ Stars(rate) }
						</Wrapper>
					);				
				})}
			</Rating>

			<Price>
				<Title>Prices</Title>

				<Wrapper><input type="range" name="" id="" min="0" max="1000" /></Wrapper>

				<MinMax>
					<Input label="Min" placeholder="0" />

					<Input label="Max" placeholder="1000" />
				</MinMax>

				<Finish>
					<Button buttonType="colored" size="small">Apply</Button>
					<Button buttonType="colored" size="small">Reset</Button>
				</Finish>
			</Price>
		</Container>
	);
}

export default Sidebar;