import styled from 'styled-components';
import { lighten, darken } from 'polished';

import { neutral, teal } from '../../utils';

export const EmptyMessage = styled.span`
	text-align: center;
	padding-top: 1rem;
`;

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 24rem;
	height: 21.25rem;
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	border: 1px solid ${darken(0.1, teal[200])};
	border-radius: 15px;
	background: ${lighten(0.15, neutral[200])};
	top: 8rem;
	right: 6rem;
	z-index: 5;

	& button {
		padding: 0;
		margin-top: auto;
	}
`;

export const CartItems = styled.div`
	height: 15rem;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;
