import React, { FC } from 'react';

import { Container } from './styles';

interface FlexProps {
	flexDirection?: string;
	align?: string;
	justify?: string;
	className?: string;
}

const Flex: FC<FlexProps> = ({ children, flexDirection, align, justify, className, ...rest }) => {
	return (
		<Container { ...rest } className={ className } flexDirection={ flexDirection } align={ align } justify={ justify}>
			{ children }
		</Container>
	);
}

export default Flex;