/* eslint no-eval: 0 */
import React, {useState, createContext} from 'react';

export const CalculateContext = createContext();

export const CalculatorProvider = (props) => {
	const [equation, setEquation] = useState("");

	const addNumber = ({value}) => {
		setEquation(equation.concat(value));
	}

	const deleteNumber = () => {
		setEquation(equation.slice(0,- 1));
	}

	const calculateEquation = () => {
		try {
			let result = parseFloat(eval(equation).toFixed(2)).toString();
			setEquation(result);
		} catch {
			setEquation('Erro');
		}
	}

	const resetEquation = () => {
		setEquation("");
	}

	return (
		<CalculateContext.Provider value={{ equation, addNumber, deleteNumber, calculateEquation, resetEquation}}>
			{props.children}
		</CalculateContext.Provider>
	)
}