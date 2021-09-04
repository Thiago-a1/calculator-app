import React from 'react';

import { Container } from './styles';

export const Button = ({ onClick, content, backgroundColor, color, shadow }) => {
	return (
		<Container 
			onClick={onClick}
			backgroundColor={backgroundColor}
			color={color}
			shadow={shadow}
			content={content}
		>
			{content}
		</Container>
	);
}