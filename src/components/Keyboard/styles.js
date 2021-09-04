import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: 100%;
	height: 512px;

	padding: 32px;
	border-radius: 16px;

	background-color: ${props => props.theme.keypadBackground};

	@media (min-width: 661px) {
		row-gap: 4px;

		border-radius: 8px;
	}
`;