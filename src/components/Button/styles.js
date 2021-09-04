import styled from 'styled-components';

export const Container = styled.button`
	font-size: ${props => props.content === 'DEL' || props.content === 'RESET' ? 1.2 : 1.8}rem;
	text-align: center;

	width: ${props => props.content === 'RESET' || props.content === '=' ?146 : 64}px;
	height: 64px;
	padding-top: 4px;

	border-radius: 6px;
	border: none;

	background-color: ${(props) => props.theme[props.backgroundColor]};
	color: ${(props) => props.theme[props.color]};
	box-shadow: 0px 5px ${(props) => props.theme[props.shadow]};

	transition: transform box-shadow 0.1s ease-in; 

	@media (min-width: 661px) {
		width: ${props => props.content === 'RESET' || props.content === '=' ?246 : 112}px;

		border-radius: 12px;
	}

	&:active {
		transform: translateY(6px);
		box-shadow: none;
	}

	span {
		justify-self: center;
		align-self: center;
	}
`;