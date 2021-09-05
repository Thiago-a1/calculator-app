import React, {useContext} from 'react';
import { ThemeProvider } from "styled-components";

import { ThemeContext } from '../../contexts/ThemeContext';

import { dark, light, alternative } from '../../styles/theme';

import { GlobalStyle } from '../../styles/global';

import { ThemeContainer } from '../ThemeContainer';
import { Screen } from '../Screen';
import { Keyboard } from '../Keyboard';

import { Container, Title } from './styles';

export const Calculator = () => {
	const { currentTheme } = useContext(ThemeContext);

	return (
		<ThemeProvider theme={currentTheme === 'dark' ? dark : currentTheme === 'light' ? light : currentTheme === 'alternative' ? alternative : dark}>
			<GlobalStyle />
			<Container>
				<div>
					<Title>calc</Title>

					<ThemeContainer />
				</div>

				<Screen />

				<Keyboard />
			</Container>
		</ThemeProvider>
	)
};