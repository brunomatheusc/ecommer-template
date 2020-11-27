import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './hooks';

import Routes from './routes';

import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<Routes />		
			<GlobalStyle />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
);