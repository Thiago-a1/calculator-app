import React, {useContext} from 'react';

import { CalculateContext } from '../../contexts/CalculateContext'; 

import { Container } from './styles';

export const Screen = () => {
	const { equation } = useContext(CalculateContext);

	return (
		<Container>
			<h1>{equation}</h1>
		</Container>
	);
}