import React, { FC } from 'react';

import { Container } from './styles';

const Breadcrumb: FC = () => {
	return (
		<Container>
			<div>
				<span>Homepage / </span>
				<span>Fruits and vegetables</span>
			</div>
		</Container>
	);
}

export default Breadcrumb;