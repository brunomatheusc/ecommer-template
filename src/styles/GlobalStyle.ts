import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	html, body, #root {
		height: 100%;
		width: 100%;
		max-width: 1260px;
		margin: 0 auto;
		background: var(--color-background);
	}

	*, button, input, select {
		font-family: 'Poppins', sans-serif;
	}

	.main {
		padding: 64px 45px 0;
	}

	:root {
		--color-white: #fff;
	}
`;