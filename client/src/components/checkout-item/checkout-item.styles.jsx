import styled from 'styled-components';

import { neutral, typeScale, BodyFont } from '../../utils';
import { lighten } from 'polished';

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 6.25rem;
	border-bottom: 1px solid ${lighten(0.15, neutral[300])};
	font-size: ${typeScale.header5};
	font-family: ${BodyFont};
	align-items: center;

	& .name,
	& .quantity,
	& .price {
		width: 24.3%;
	}

	& .quantity {
		display: flex;
		.arrow {
			cursor: pointer;
		}
		.value {
			margin: 0 0.6rem;
		}
	}

	& .remove-button {
		padding-left: 0.8rem;
		cursor: pointer;
	}
`;

export const ImageContainer = styled.div`
	width: 15%;
`;

export const CheckoutItemImage = styled.img`
	width: 100%;
	height: 100%;
	padding: 1rem 1.8rem 1rem 1rem;
`;
