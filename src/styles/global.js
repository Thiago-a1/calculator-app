import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${props => props.theme.mainBackground};
		-webkit-font-smoothing: antialiased;
	}

	body, input, button, textarea {
		font-family: 'Spartan', sans-serif;
		font-weight: 700;
	}

	button {
		cursor: pointer;
	}
`