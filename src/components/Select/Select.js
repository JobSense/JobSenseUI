import React from 'react';
import SelectField from 'react-select';
import styles from './Select.css';

const handleKeyDown = event => {
	// switch (event.key) {
	// 	case 'Enter':
	//     case 'Tab':
	// 		event.preventDefault();
	// }
};

const Select = props => (
	<SelectField
		onKeyDown={handleKeyDown}
		optionRenderer={() => {
			console.log('asd');
		}}
		{...props}
	/>
);

export default Select;
