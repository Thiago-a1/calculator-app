import styled from 'styled-components';

export const Container = styled.div`
	width: 160px;

	h2 {
		font-size: 0.8rem;
		align-self: flex-end;
		letter-spacing: 0.1rem;
		margin-bottom: 4px;
		color: ${props => props.theme.extraFontColor};
	}

	.switch-container {
		flex-direction: column;
	}

	.label-container {
		width: 60px;
		margin-left: 2px;
		margin-bottom: 4px;
		align-self: center;
		justify-content: space-between;

		label {
			font-size: 0.9rem;

			color: ${props => props.theme.extraFontColor};
		}
	}
`;