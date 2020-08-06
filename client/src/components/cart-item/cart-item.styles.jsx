import styled from 'styled-components';
import { typeScale } from '../../utils';

export const CartItemContainer = styled.div`
	width: 100%;
	height: 5rem;
	display: flex;
	margin-bottom: 1rem;
`;

export const CartItemImage = styled.img`
	width: 30%;
`;

export const CartItemDetails = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 0.6rem 1.4rem;
	font-size: ${typeScale.body2};
`;
