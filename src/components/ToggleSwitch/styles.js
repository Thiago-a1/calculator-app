import styled from 'styled-components';

export const SwitchRadio = styled.input`
	display: none;
`;

export const Switch = styled.div`
	position: relative;
	width: 80px;
	height: 26px;

	padding: 4px;
	border-radius: 16px;
	background-color: ${props => props.theme.keypadBackground};
`;

export const SwitchSelection = styled.span`
	position: absolute;
	z-index: 1;

	left: 0px;

	margin-left: 4px;

	width: 18px;
	height: 18px;

	border-radius: 50%;
	background-color: ${props => props.theme.secondary};

	transition: left 0.25s ease-out;
`;

export const SwitchLabel = styled.label`
	position: relative;
	z-index: 2;
	float: left;

	width: 24px;
	height: 18px;

	cursor: pointer;
`;