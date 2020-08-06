import styled from 'styled-components';
import { neutral, teal } from '../../utils';
import { transparentize } from 'polished';

export const SpinnerOverlay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SpinnerContainer = styled.div`
	display: inline-block;
	width: 4rem;
	height: 4rem;
	border: 3px solid ${transparentize(0.6, neutral[300])};
	border-radius: 50%;
	border-top-color: ${teal[200]};
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;

	@keyframes spin {
		to {
			transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;
