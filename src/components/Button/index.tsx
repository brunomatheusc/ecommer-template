import React, { FC } from 'react';

import { Container } from './styles';

interface IProps {
	iconLeft?: boolean;
	iconRight?: boolean;
	size?: 'small' | 'medium' | 'large';
	buttonType?: 'stroke' | 'colored' | 'bright' | 'simple';
}

const Button: FC<IProps> = ({ children, ...rest }) => {
	return(
		<Container { ...rest }>{ children }</Container>
	);
}

export default Button;