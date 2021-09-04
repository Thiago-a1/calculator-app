import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
	const [currentTheme, setCurrentTheme] = useState();

	const toggleTheme = ({value}) => {
		setCurrentTheme(value);
	}
	
	return (
		<ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	)
}