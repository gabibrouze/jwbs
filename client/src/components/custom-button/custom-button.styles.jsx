import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { typeScale, neutral, BodyFont } from '../../utils';

const Button = styled.button`
	min-width: 16rem;
	width: auto;
	height: 4.2rem;
	letter-spacing: 0.6rem;
	line-height: 4.2rem;
	padding: 0 2.1rem 0 2.1rem;
	font-size: ${typeScale.button};
	background-color: ${neutral[300]};
	color: ${neutral[200]};
	text-transform: uppercase;
	font-family: ${BodyFont};
	font-weight: bolder;
	border: none;
	border-radius: 15px;
	cursor: pointer;
	margin: 1rem;
	outline: none;
	display: flex;
	justify-content: center;

	&:hover {
		background-color: ${lighten(0.1, neutral[300])};
		border: 1px solid ${neutral[300]};
		font-weight: bolder;
		transition: all 0.35s ease-in-out;
	}

	&.google {
		background: #4285fd;

		&:hover {
			background: #357ae8;
			border: 1px solid #4285fd;
		}
	}

	&.inverted {
		background: ${neutral[200]};
		color: ${neutral[300]};
		border: 1px solid ${neutral[300]};
		&:hover {
			background: ${darken(0.1, neutral[200])};
			border: 1px solid ${neutral[200]};
		}
	}
`;

export default Button;
