import React from 'react';

import {
	FormInputGroup,
	FormInputBlock,
	InputLabel,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<FormInputGroup>
			<FormInputBlock onChange={handleChange} {...otherProps} />
			{label ? (
				<InputLabel className={otherProps.value.length ? 'shrink' : ''}>
					{label}
				</InputLabel>
			) : null}
		</FormInputGroup>
	);
};

export default FormInput;
