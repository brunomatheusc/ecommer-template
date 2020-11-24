import React, { FC } from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';

import { Container, Wrapper, Title, Categories, CategoryWrapper, CategoryName, Quantity, Brands, Rating, Price, MinMax, Finish } from './styles';

const Sidebar: FC = () => {
	function Stars(stars: number): JSX.Element[] {
		let starItems: JSX.Element[] = [];

		for (let i = 0; i < 5; i++) {
			starItems.push((i < stars) ? <MdStar size={ 18 } color="#fdbc15" /> : <MdStarBorder size={ 18 } />);
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

				{ [0, 1, 2, 3, 4].map((brand, index) => {
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
						<Wrapper>
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
					<div>
						<span>Min</span>
						<input type="text" placeholder="0" />
					</div>

					<div>
						<span>Max</span>
						<input type="text" placeholder="1000" />
					</div>
				</MinMax>

				<Finish>
					<button>Apply</button>
					<button>Reset</button>
				</Finish>
			</Price>
		</Container>
	);
}

export default Sidebar;