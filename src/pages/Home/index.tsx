import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Flex from '../../components/Flex';

import { Container, Basics, Banners, BestSellings, MoreProducts, Quotes, Headline } from './styles';

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

				</BestSellings>

				<MoreProducts>

				</MoreProducts>

				<Quotes>

				</Quotes>

				<Headline>

				</Headline>
			</Container>
		</>
	);
}

export default Home;