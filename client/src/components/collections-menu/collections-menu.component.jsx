import React from 'react';

import {
	CollectionPreviewContainer,
	CollectionPreviewTitle,
	CollectionPreview,
} from './collections-menu.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionsMenu = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
			<CollectionPreview>
				{items
					.filter((item, idx) => idx < 3)
					.map(item => (
						<CollectionItem key={item.id} item={item}>
							{item.name}
						</CollectionItem>
					))}
			</CollectionPreview>
		</CollectionPreviewContainer>
	);
};

export default CollectionsMenu;
