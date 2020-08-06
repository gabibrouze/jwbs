import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

import { typeScale, neutral, HeaderFont, BodyFont } from '../../utils';

const shrinkLabel = css`
	top: -1.4rem;
	font-size: ${typeScale.subtitle1};
	color: ${neutral[300]};
`;

export const FormInputGroup = styled.div`
	position: relative;
	margin: 2rem 0 0 0;
	min-width: 100%;
`;

export const InputLabel = styled.label`
	color: ${lighten(0.4, neutral[300])};
	font-family: ${HeaderFont};
	font-size: ${typeScale.header6};
	position: absolute;
	pointer-events: none;
	left: 4%;
	top: 1rem;
	transition: all 300ms ease;

	&.shrink {
		${shrinkLabel};
	}
`;

export const FormInputBlock = styled.input`
	min-width: 100%;
	background: none;
	background-color: ${lighten(0.1, neutral[200])};
	color: ${darken(0.2, neutral[200])};
	font-family: ${BodyFont};
	font-size: ${typeScale.header5};
	padding: 1.2rem;
	border: none;
	border-radius: 15px;
	border-bottom: 1px solid ${darken(0.2, neutral[200])};

	&:focus {
		outline: none;
		& ~ ${InputLabel} {
			${shrinkLabel};
		}
	}

	input[type='password'] {
		letter-spacing: 0.3em;
	}
`;
