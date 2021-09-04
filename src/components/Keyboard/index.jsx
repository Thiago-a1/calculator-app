import React, {useContext} from 'react';

import { CalculateContext } from '../../contexts/CalculateContext';

import { Button } from '../Button';

import { Container } from './styles';

export const Keyboard = () => {
	const { addNumber, resetEquation, deleteNumber, calculateEquation } = useContext(CalculateContext);

	const handleAddNumber = (value) => {
		addNumber({value});
	}

	const handleDeleteNumber = () => {
		deleteNumber();
	}

	const handleCalculateEquation = () => {
		calculateEquation();
	}

	const handleResetEquation = () => {
		resetEquation();
	}

	return(
		<Container>
			<Button 
				onClick={() => handleAddNumber(7)}
				content="7" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber(8)}
				content="8" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber(9)}
				content="9" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleDeleteNumber()}
				content="DEL" 
				backgroundColor="tertiary"
				color="secondaryFontColor"
				shadow="tertiaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber(4)}
				content="4" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber(5)}
				content="5" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber(6)}
				content="6" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber('+')}
				content="+" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber(1)}
				content="1" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber(2)}
				content="2" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber(3)}
				content="3" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber('-')}
				content="-" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber('.')}
				content="." 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber(0)}
				content="0" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber('/')}
				content="/" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleAddNumber('*')}
				content="x" 
				backgroundColor="primary"
				color="primaryFontColor"
				shadow="primaryShadow"
			/>
			<Button 
				onClick={() => handleResetEquation()}
				content="RESET" 
				backgroundColor="tertiary"
				color="secondaryFontColor"
				shadow="tertiaryShadow"
			/>
			<Button 
				onClick={() => handleCalculateEquation()}
				content="=" 
				backgroundColor="secondary"
				color="secondaryFontColor"
				shadow="secondaryShadow"
			/>
		</Container>
	);
}