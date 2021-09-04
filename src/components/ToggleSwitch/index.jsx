import React, {useState, useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Switch, SwitchRadio, SwitchSelection, SwitchLabel } from './styles';

const ConcealedRadio = ({ value, selected }) => {
	return(
		<SwitchRadio type="radio" name="switch" defaultChecked={selected === value} />
	);
}

const ClickableLabel = ({ title, onChange, id }) => {
	return (
		<SwitchLabel 
			onClick={() => onChange(title)} 
			className={id} 
		/>
	)
}

export const ToggleSwitch = ({values}) => {
	const [selected, setSelected] = useState('');
	const { toggleTheme } = useContext(ThemeContext);

	const handleChange = (value) => {
		setSelected(value);
		toggleTheme({value});
	}
	
	const selectionStyle = () => {
		return {
			left: `+${values.indexOf(selected) / 3 * 100}%`,
		}
	}

	return (
		<Switch>
			{values.map(value => {
				return (
					<span key={value}>
						<ConcealedRadio 
							value={value} 
							selected={selected} 
						/>
						<ClickableLabel 
							title={value} 
							onChange={handleChange}
						/>
					</span>
				)
			})}
			<SwitchSelection style={selectionStyle()} />
		</Switch>
	)
};

