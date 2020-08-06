import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignInContainer, SignInForm } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const { email, password } = userCredentials;

	const handleSubmit = async evt => {
		evt.preventDefault();
		emailSignInStart(email, password);
	};

	const handleChange = evt => {
		const { value, name } = evt.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<span>Sign in with Email and Password</span>
			<SignInForm onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					label='Email'
					value={email}
					handleChange={handleChange}
					required
				/>

				<FormInput
					name='password'
					type='password'
					label='Password'
					value={password}
					handleChange={handleChange}
					required
				/>
				<CustomButton type='submit'>Sign In with Password</CustomButton>
			</SignInForm>
			<span>OR</span>
			<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
				Sign In with Google
			</CustomButton>
		</SignInContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
