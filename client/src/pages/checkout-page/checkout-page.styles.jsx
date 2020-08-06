import styled from 'styled-components';
import { lighten } from 'polished';

import { neutral, HeaderFont, typeScale, BodyFont } from '../../utils';

export const CartTotal = styled.div`
	margin: 1.8rem 0 0 auto;
	font-family: ${HeaderFont};
	font-size: ${typeScale.header5};
	font-weight: bold;
`;

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 24.3%;
	font-family: ${HeaderFont};
	font-size: ${typeScale.header5};
	color: ${neutral[300]};
	&: first-child {
		width: 15%;
	}
	&:last-child {
		width: 12%;
	}
`;

export const CheckoutHeader = styled.div`
	width: 100%;
	height: 2.6rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${lighten(0.15, neutral[300])};
`;

export const CheckoutContainer = styled.div`
	width: 60%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 3rem auto 0;

	& button {
		margin-top: 3rem;
		margin-left: auto;
		padding: 2rem;
	}
`;

export const TestWarning = styled.div`
	margin-top: 2rem;
	text-align: center;
	font-family: ${BodyFont};
	font-size: ${typeScale.header5};
	color: red;
`;
