import React, { FC } from 'react';

import { Container } from './styles';

interface IProps {
	iconLeft?: boolean;
	iconRight?: boolean;
}

const Button: FC<IProps> = ({ children, ...rest }) => {
	return(
		<Container { ...rest }>{ children }</Container>
	);
}

export default Button;