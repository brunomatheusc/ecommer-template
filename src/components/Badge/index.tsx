import React, { FC } from 'react';

import { Container } from './styles';

const Badge: FC = ({ children, ...rest }) => {
  	return (
		<Container { ...rest }>{ children }</Container>
	);
}

export default Badge;