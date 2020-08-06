import React from 'react';

import Button from './custom-button.styles';

const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => {
	return (
		<Button
			className={isGoogleSignIn ? 'google' : inverted ? 'inverted' : ''}
			{...otherProps}
		>
			{children}
		</Button>
	);
};

export default CustomButton;
