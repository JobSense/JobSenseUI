import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';

const createOption = label => ({
	label,
	value: label,
});

class CreatableInputOnly extends Component {
	state = {
		inputValue: '',
		value: [],
	};

	handleChange = value => {
		this.props.onChange(value);
		this.setState({ value });
	};

	handleInputChange = inputValue => {
		this.setState({ inputValue });
	};

	handleKeyDown = event => {
		const { inputValue, value } = this.state;
		if (!inputValue) return;
		switch (event.key) {
			case 'Enter':
			case 'Tab':
				console.group('Value Added');
				console.log(value);
				console.groupEnd();
				this.props.onChange(value);
				this.setState({
					inputValue: '',
					value: [...value, createOption(inputValue)],
				});
				event.preventDefault();
		}
	};

	render() {
		const { props } = this;
		const { inputValue, value } = this.state;
		return (
			<CreatableSelect
				{...props}
				onKeyDown={this.handleKeyDown}
				onInputChange={this.handleInputChange}
				onChange={this.handleChange}
				inputValue={inputValue}
				isMulti
				isClearable
				value={value}
			/>
		);
	}
}

export default CreatableInputOnly;
