import React, { FC } from 'react';
import { FiUser, FiShoppingBag, FiSearch } from 'react-icons/fi';

import { Container, LogoHeader, Search, InputSearch, Actions, Bag, Counter } from './styles';

import Logo from '../../assets/brand.svg';

const Header: FC = () => {
	return (
		<Container>
			<nav>
				<LogoHeader src={ Logo } />

				<Search>
					<select name="" id="">
						<option value="">Categorias</option>
						<option value="">Sousplat</option>
						<option value="">Cachepot</option>
					</select>

					<InputSearch>
						<input type="text" placeholder="Procurar produtos, categorias..." />
						
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