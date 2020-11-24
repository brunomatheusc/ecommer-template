import React, { FC, useState } from 'react';

import { Container } from './styles';

const Menu: FC = () => {
	const [options, setOptions] = useState([ "Bakery", "Fruit and vegetables", "Meat and fish", "Drinks", "Kitchen", "Special nutrition", "Baby", "Pharmacy" ]);

	return (
		<Container>
			{ options.map((option, index) => {
				return (
					<select key={ index }  name="" id="">
						<option value="">{ option }</option>
					</select>
				);
			})}
		</Container>
	);
}

export default Menu;