import React, { FC } from 'react';

import { Container } from './styles';

interface FlexProps {
	flexDirection?: 'row' | 'column';
	align?: 'center' | 'flex-end' | 'flex-start' | 'start' | 'end' | 'stretch';
	justify?: 'center' | 'flex-end' | 'flex-start' | 'start' | 'end' | 'left' | 'right' | 'space-between' | 'space-around';
	className?: string;
	flex?: number;
}

const Flex: FC<FlexProps> = ({ children, className, ...rest }) => {
	return (
		<Container { ...rest } className={ className }>
			{ children }
		</Container>
	);
}

export default Flex;