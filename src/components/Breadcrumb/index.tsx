import React, { FC } from 'react';

import { Container } from './styles';

const Breadcrumb: FC = () => {
	return (
		<Container>
			<div>
				<span>Homepage / </span>
				<span>Cachepot</span>
			</div>
		</Container>
	);
}

export default Breadcrumb;