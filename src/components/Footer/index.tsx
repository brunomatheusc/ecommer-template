import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Flex from '../Flex';

import { Container, Wrapper } from './styles';
import Badge from './../Badge/index';

const Footer: FC = () => {
  	return (
		<Container>
			<Wrapper justify="space-between">
				<Flex flexDirection="column">
					<h3>Get in touch</h3>
					<Link to="/">About Us</Link>
					<Link to="/">Carees</Link>
					<Link to="/">Press Releases</Link>
					<Link to="/">Blog</Link>
				</Flex>
				
				<Flex flexDirection="column">
					<h3>Connections</h3>
					<Link to="/">Facebook</Link>
					<Link to="/">Twitter</Link>
					<Link to="/">Instagram</Link>
					<Link to="/">Youtube</Link>
					<Link to="/">Linkedin</Link>
				</Flex>
				
				<Flex flexDirection="column">
					<h3>Earnings</h3>
					<Link to="/">Become an Affiliate</Link>
					<Link to="/">Advertise your product</Link>
					<Link to="/">Sell on Market</Link>
				</Flex>
				
				<Flex flexDirection="column">
					<h3>Account</h3>
					<Link to="/">Your account</Link>
					<Link to="/">Returns Centre</Link>
					<Link to="/">100% purchase protection</Link>
					<Link to="/">Chat with us</Link>
					<Link to="/">Help</Link>
				</Flex>
			</Wrapper>

			<Wrapper flexDirection="column" justify="flex-start">
				<h3>Product Tags</h3>

				<Flex justify="flex-start">
					<Badge><span>Beans</span></Badge>
					<Badge><span>Carrots</span></Badge>
					<Badge><span>Apples</span></Badge>
					<Badge><span>Garlic</span></Badge>
					<Badge><span>Mushrooms</span></Badge>
					<Badge><span>Tomatoes</span></Badge>
					<Badge><span>Chilli peppers</span></Badge>
					<Badge><span>Broccoli</span></Badge>
					<Badge><span>Watermelons</span></Badge>
					<Badge><span>Oranges</span></Badge>
					<Badge><span>Bananas</span></Badge>
					<Badge><span>Grapes</span></Badge>
				</Flex>

				<br/>

				<Flex justify="flex-start">
					<Badge><span>Beans</span></Badge>
					<Badge><span>Carrots</span></Badge>
					<Badge><span>Apples</span></Badge>
					<Badge><span>Garlic</span></Badge>
					<Badge><span>Mushrooms</span></Badge>
					<Badge><span>Tomatoes</span></Badge>
					<Badge><span>Chilli peppers</span></Badge>
				</Flex>
			</Wrapper>

			<Wrapper>
				<span>Copyright © 2020 petrbilek.com</span>
			</Wrapper>
		</Container>
	);
}

export default Footer;