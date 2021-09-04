import styled from 'styled-components';

export const Container = styled.div`
	align-items: flex-start;
	justify-content: end !important;

	width: 100%;
	height: 96px;

	padding: 32px;

	border-radius: 16px;
	margin-top: 32px;
	margin-bottom: 32px;

	background-color: ${props => props.theme.screenBackground};

	h1 {
		color: ${props => props.theme.extraFontColor};
	}

	@media (min-width: 661px) {
		height: 116px;

		border-radius: 8px;

		h1 {
			font-size: 2.8rem;
		}
	}
`;