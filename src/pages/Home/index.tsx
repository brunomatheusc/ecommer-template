import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Flex from '../../components/Flex';

import { Container, Carousel, Basics, Banners, BestSellings, MoreProducts, Quotes, Headline, QuotesBox, Client } from './styles';
import client from '../../assets/client-1.svg';
import Product from '../../components/Product';

const Home: FC = () => {
	return (
		<>
			<Container>
				<Basics>
					<Flex flexDirection="column">
						<h3>Category Menu</h3>
						<Link to="/category">Bakery</Link>
						<Link to="/category">Fruit and vegetables</Link>
						<Link to="/category">Meat and fish</Link>
						<Link to="/category">Drinks</Link>
						<Link to="/category">Kitchen</Link>
						
						<Flex>
							<Button>More categories</Button>
						</Flex>
					</Flex>

					{ [0, 1].map((_, index) => {
						return (
							<Banners flexDirection="column">
								<Flex flexDirection="column">
									<span>Banner subfocus</span>
									<h3>Space for heading</h3>
								</Flex>

								<Flex>
									<Button>Read decipes</Button>
								</Flex>

							</Banners>
						);
					})}
				</Basics>

				<BestSellings>
					<Flex flexDirection="column">
						<h3>Best selling products</h3>
						<Link to="/category">Kitchen</Link>
						<Link to="/category">Meat and fish</Link>
						<Link to="/category">Special nutrition</Link>
						<Link to="/category">Pharmacy</Link>
						<Link to="/category">Baby</Link>

						<Flex>
							<Button>More products</Button>
						</Flex>						
					</Flex>

					<Flex flexDirection="row" flex={ 1 } justify="center">
					{ [0, 1, 2].map((_, index) => {
						return (
							<Flex key={ index }>
								<Product />
							</Flex>
						);
					})}
					</Flex>

				</BestSellings>

				<MoreProducts>
					<Flex flexDirection="column">
						<h3>Best selling products</h3>
						<Link to="/category">Carrots</Link>
						<Link to="/category">Tomatoes</Link>
						<Link to="/category">Potatoes</Link>
						<Link to="/category">Pharmacy</Link>
						<Link to="/category">Baby</Link>

						<Flex>
							<Button>More products</Button>
						</Flex>
						
					</Flex>

					<Flex flexDirection="row" flex={ 1 } justify="center">
					{ [0, 1, 2].map((_, index) => {
						return (
							<Flex key={ index }>
								<Product />
							</Flex>
						);
					})}
					</Flex>
				</MoreProducts>

				<Quotes>
					<h2>Our customers says</h2>

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

				<Headline flexDirection="column">
					<h2>Section Headline</h2>

					<Flex flexDirection="row" flex={ 1 } justify="space-between">
					{ [0, 1, 2, 3].map((_, index) => {
						return (
							<Flex key={ index }>
								<Product />
							</Flex>
						);
					})}
					</Flex>
				</Headline>
			</Container>
		</>
	);
}

export default Home;