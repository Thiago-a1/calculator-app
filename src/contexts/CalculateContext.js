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
		let result = parseFloat(eval(equation).toFixed(2)).toString();
		setEquation(result);
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