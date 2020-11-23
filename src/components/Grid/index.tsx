import React, { FC } from 'react';

import { Container } from './styles';

interface FlexProps {
	gridTemplateColumns: string;
	gridGap?: number;
}

const Grid: FC<FlexProps> = ({ children, gridTemplateColumns, gridGap }) => {
	return (
		<Container gridTemplateColumns={ gridTemplateColumns } gridGap={ gridGap }>{ children }</Container>
	);
}

export default Grid;