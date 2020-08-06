import styled from 'styled-components';
import { typeScale, HeaderFont } from '../../utils';

export const SignInContainer = styled.div`
	text-align: center;
	span {
		font-family: ${HeaderFont};
		font-size: ${typeScale.header5};
		display: block;
		margin-top: 1rem;
	}
`;

export const SignInForm = styled.form``;
