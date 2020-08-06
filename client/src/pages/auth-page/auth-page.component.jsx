import React, { useState } from 'react';

import {
	AuthContainer,
	ToggleButtonContainer,
	SwitchLabel,
	ToggleButton,
	RoundSlider,
} from './auth-page.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const AuthPage = () => {
	const [authMethod, setAuthMethod] = useState('signIn');

	const handleToggle = () => {
		authMethod === 'signIn' ? setAuthMethod('signUp') : setAuthMethod('signIn');
	};

	return (
		<AuthContainer>
			{authMethod === 'signIn' ? <SignIn /> : <SignUp />}
			<ToggleButtonContainer>
				<span className='toggler'>
					Toggle to {authMethod === 'signIn' ? 'Sign Up' : 'Sign In'}
				</span>
				<SwitchLabel>
					<ToggleButton type='checkbox' onChange={handleToggle} />
					<RoundSlider />
				</SwitchLabel>
			</ToggleButtonContainer>
		</AuthContainer>
	);
};

export default AuthPage;
