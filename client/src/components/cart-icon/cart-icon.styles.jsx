import styled from 'styled-components';

import { typeScale, neutral } from '../../utils';

export const ItemCount = styled.span`
	position: absolute;
	font-size: ${typeScale.body1};
	font-weight: bold;
	background: ${neutral[300]};
	width: 1.6rem;
	height: 1.6rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${neutral[200]};
	border-radius: 50%;
	bottom: 0;
	right: 0;
`;

export const CartIconContainer = styled.div`
	width: 4.4rem;
	height: 4.4rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	& .shopping-icon {
		width: 4rem;
		height: 4rem;
	}
`;
