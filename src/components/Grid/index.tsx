import React, { FC } from 'react';

import { Container } from './styles';

interface GridProps {
	gridTemplateColumns: string;
	gridGap?: number;
}

const Grid: FC<GridProps> = ({ children, gridTemplateColumns, gridGap, ...rest }) => {
	return (
		<Container { ...rest } gridTemplateColumns={ gridTemplateColumns } gridGap={ gridGap }>{ children }</Container>
	);
}

export default Grid;