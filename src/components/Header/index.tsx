import React, { FC } from 'react';
import { FiUser, FiShoppingBag, FiSearch } from 'react-icons/fi';

import { Container, LogoHeader, Search, InputSearch, Actions, Bag, Counter } from './styles';

import Logo from '../../assets/brand.svg';
import { Link } from 'react-router-dom';

const Header: FC = () => {
	return (
		<Container>
			<nav>
				<Link to="/"><LogoHeader src={ Logo } /></Link>				

				<Search>
					<select name="" id="">
						<option value="">All Categories</option>
						<option value="">Bakery</option>
						<option value="">Meat and Fish</option>
					</select>

					<InputSearch>
						<input type="text" placeholder="Search products, categories..." />
						
						<button><FiSearch /></button>					
					</InputSearch>
				</Search>

				<Actions>
					<FiUser size={ 24 } color="#000" />

					<Bag>
						<FiShoppingBag size={ 24 } color="#000" />
						<Counter>4</Counter>
					</Bag>
				</Actions>
			</nav>
		</Container>
	);
}

export default Header;