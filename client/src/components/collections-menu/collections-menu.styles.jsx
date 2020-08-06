import styled from 'styled-components';

import { typeScale, maroon } from '../../utils';

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	// background: ${maroon[300]};
	opacity: 0.8;
	border-radius: 15px;
	margin: 30px;
`;

export const CollectionPreviewTitle = styled.h1`
	font-size: ${typeScale.header3};
	text-align: center;
	margin-bottom: 24px;
	cursor: pointer;
`;

export const CollectionPreview = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
