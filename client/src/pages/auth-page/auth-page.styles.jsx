import styled from 'styled-components';
import { neutral, teal, BodyFont } from '../../utils';

export const RoundSlider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${teal[200]};
	-webkit-transition: 0.4s;
	transition: 0.4s;

	border-radius: 2rem;

	&:before {
		position: absolute;
		content: '';
		height: 1.8rem;
		width: 1.8rem;
		left: 0.25rem;
		bottom: 0.25rem;
		background-color: ${neutral[100]};
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}
`;

export const ToggleButton = styled.input`
	&:checked + ${RoundSlider} {
		background: ${teal[400]};
		&:before {
			transform: translateX(5rem);
		}
	}
	&:focus + ${RoundSlider} {
		background: ${teal[300]};
	}
`;

export const AuthContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-top: 4rem;
	width: 100%;
`;
export const ToggleButtonContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	bottom: 20%;

	.toggler {
		font-family: ${BodyFont};
		font-size: 1.2rem;
		font-weight: bolder;
		padding: 1rem;
	}
`;

export const SwitchLabel = styled.label`
	position: relative;
	display: inline-block;
	width: 8rem;
	height: 2.4rem;

	& ${ToggleButton} {
		opacity: 0;
		width: 0;
		height: 0;
	}
`;
