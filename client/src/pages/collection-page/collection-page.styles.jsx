import styled from 'styled-components';
import { typeScale, HeaderFont, neutral } from '../../utils';

export const CollectionContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const CollectionHeader = styled.h1`
	font-side: ${typeScale.header2};
	font-family: ${HeaderFont};
	color: ${neutral[300]};
	margin: 0 auto 1.8rem;
`;

export const Items = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 0.6rem;

	& .collection-item {
		margin-bottom: 1.8rem;
	}
`;
