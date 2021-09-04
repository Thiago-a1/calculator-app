import React from 'react';

import { ToggleSwitch } from '../ToggleSwitch';

import { Container } from './styles';

export const ThemeContainer = () => {
	return (
		<Container>
			<h2>THEME</h2>

			<div className="switch-container">
				<div className="label-container">
					<label htmlFor="dark" >1</label>
					<label htmlFor="light" >2</label>
					<label htmlFor="alternative" >3</label>
				</div>

				<ToggleSwitch values={['dark', 'light', 'alternative']} selected="dark" />
			</div>
		</Container>
	)
}