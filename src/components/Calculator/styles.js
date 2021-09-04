import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;

	@media (max-width: 660px) {
		width: 375px;
		margin: 64px auto;
	}

	@media (min-width: 661px) {
		width: 580px;
		margin: 64px auto;
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const Title = styled.h1`
	color: ${props => props.theme.extraFontColor};
	font-size: 2rem;
`;