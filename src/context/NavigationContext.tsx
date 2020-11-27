import React, { createContext, FC, useCallback, useContext, useState } from 'react';

interface NavigationProps {
	listType: string;
	setType(listType: string): void;
}

export const NavigationContext = createContext<NavigationProps>({} as NavigationProps);

export const NavigationProvider: FC = ({ children }) => {
	const [listType, setListType] = useState('list');

	const setType = useCallback((listType: string) => {
		setListType(listType);
	}, []);

	return (
		<NavigationContext.Provider value={{ listType, setType }}>
			{ children }
		</NavigationContext.Provider>
	);
};

export default function useNavigation(): NavigationProps {
	const context = useContext(NavigationContext);

	if (!context) {
		throw new Error('useNavigation must have listType');
	}

	return context;
}