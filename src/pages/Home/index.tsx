import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Flex from '../../components/Flex';

import { Container, Carousel, Basics, Banners, BestSellings, MoreProducts, Quotes, Headline, Box, Image, Title, Info, Price, QuotesBox, Client } from './styles';
import client from '../../assets/client-1.svg';

const Home: FC = () => {
	return (
		<>
			<Container>
				<Basics>
					<Flex flexDirection="column">
						<h3>Category Menu</h3>
						<Link to="/">Bakery</Link>
						<Link to="/">Fruit and vegetables</Link>
						<Link to="/">Meat and fish</Link>
						<Link to="/">Drinks</Link>
						<Link to="/">Kitchen</Link>
						
						<Button>More categories</Button>
					</Flex>

					<Banners flexDirection="column">
						<Flex flexDirection="column">
							<span>Banner subfocus</span>
							<h3>Space for heading</h3>
						</Flex>

						<Flex>
							<Button>Read decipes</Button>
						</Flex>

					</Banners>

					<Banners flexDirection="column">
						<Flex flexDirection="column">
							<span>Banner subfocus</span>
							<h3>Space for heading</h3>
						</Flex>

						<Flex>
							<Button>Read decipes</Button>
						</Flex>

					</Banners>
				</Basics>

				<BestSellings>
					<Flex flexDirection="column">
						<h3>Best selling products</h3>
						<Link to="/">Kitchen</Link>
						<Link to="/">Meat and fish</Link>
						<Link to="/">Special nutrition</Link>
						<Link to="/">Pharmacy</Link>
						<Link to="/">Baby</Link>

						<Flex>
							<Button>More products</Button>
						</Flex>
						
					</Flex>

				{ [0, 1, 2].map((_, index) => {
					return (
						<Flex key={ index }>
							<Box>
								<Image></Image>
								<Title>Product Title</Title>
								<span>Space for a small product description</span>

								<Info>
									<Price>1.48 USD</Price>
									<Button>Buy now</Button>
								</Info>
							</Box>
						</Flex>
					);
				})}
				</BestSellings>

				<MoreProducts>
					<Flex flexDirection="column">
						<h3>Best selling products</h3>
						<Link to="/">Kitchen</Link>
						<Link to="/">Meat and fish</Link>
						<Link to="/">Special nutrition</Link>
						<Link to="/">Pharmacy</Link>
						<Link to="/">Baby</Link>

						<Flex>
							<Button>More products</Button>
						</Flex>
						
					</Flex>

				{ [0, 1, 2].map((_, index) => {
					return (
						<Flex key={ index }>
							<Box>
								<Image></Image>
								<Title>Product Title</Title>
								<span>Space for a small product description</span>
								
								<Info>
									<Price>1.48 USD</Price>
									<Button>Buy now</Button>
								</Info>
							</Box>
						</Flex>
					);
				})}
				</MoreProducts>

				<Quotes>
					<h2>Our customer says</h2>

					<Carousel>
					{ [0, 1, 2].map((_, index) => {
						return (
							<QuotesBox key={ index }>
								<span>"This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here"</span>

								<small>Name and Surname</small>

								<Client src={ client } />
							</QuotesBox>
						);
					})}
					</Carousel>
				</Quotes>

				<Headline>

				</Headline>
			</Container>
		</>
	);
}

export default Home;