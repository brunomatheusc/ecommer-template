import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	html, body, #root {
		height: 100%;
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		background: var(--color-background);
	}

	*, button, input, select {
		font-family: 'Poppins', sans-serif;
	}

	a {
		font-size: 12px;
		font-weight: 400;
		text-decoration: none;

		&:hover {
			color: ${shade(0.2, '#46760a')};
		}
	}

	.main {
		padding: 16px 45px 64px;
	}

	:root {
		--color-white: #fff;
	}
`;