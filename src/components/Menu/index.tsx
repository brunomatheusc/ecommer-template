import React, { FC, useEffect, useState } from 'react';

import { Container } from './styles';

const Menu: FC = () => {
	return (
		<Container>
			<select name="" id="">
				<option value="">Bakery</option>
			</select>

			<select name="" id="">
				<option value="">Fruit and vegetables</option>
			</select>

			<select name="" id="">
				<option value="">Meat and fish</option>
			</select>

			<select name="" id="">
				<option value="">Drinks</option>
			</select>

			<select name="" id="">
				<option value="">Kitchen</option>
			</select>

			<select name="" id="">
				<option value="">Special nutrition</option>
			</select>

			<select name="" id="">
				<option value="">Baby</option>
			</select>

			<select name="" id="">
				<option value="">Pharmacy</option>
			</select>
		</Container>
	);
}

export default Menu;