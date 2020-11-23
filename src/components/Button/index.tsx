import React, { FC } from 'react';

import { Container } from './styles';

const Button: FC = ({ children, ...rest }) => {
	return(
		<Container { ...rest }>{ children }</Container>
	);
}

export default Button;