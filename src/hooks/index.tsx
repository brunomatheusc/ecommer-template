import React, { FC } from 'react';
import { NavigationProvider } from '../context/NavigationContext';

const AppProvider: FC = ({ children }) => {
	return(
		<>
			<NavigationProvider>
				{ children }
			</NavigationProvider>
		</>
	);
};

export default AppProvider;