import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignUpContainer, SignUpForm } from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setCredentials] = useState({
		displayName: '',
		email: '',
		phoneNumber: '',
		password: '',
		confirmPassword: '',
	});

	const {
		displayName,
		email,
		phoneNumber,
		password,
		confirmPassword,
	} = userCredentials;

	const handleSubmit = async evt => {
		evt.preventDefault();

		if (password !== confirmPassword) {
			alert("Password don't match");
			return;
		}

		signUpStart({ displayName, phoneNumber, email, password });
	};

	const handleChange = evt => {
		const { name, value } = evt.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<span>Sign up with Contact Details and Password</span>
			<SignUpForm onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					type='text'
					name='phoneNumber'
					value={phoneNumber}
					onChange={handleChange}
					label='Phone Number'
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				/>
				<CustomButton type='submit'>Sign Up</CustomButton>
			</SignUpForm>
		</SignUpContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
