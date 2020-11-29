import React from 'react';
import Badge from '../Badge';

import { Container } from './styles';

interface TabProps {
	title: string;
	active?: boolean;
	badge?: string;
	onClick(): void;
}

const Tab: React.FC<TabProps> = ({ children, title, badge, onClick, ...rest }) => {
  	return (
		<Container { ...rest } onClick={ onClick }>
			<h2>{ title }{ badge && <Badge>{badge}</Badge> }</h2>
			{ children }
		</Container>
	);
}

export default Tab;