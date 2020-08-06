import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionsOverviewContainer } from './collections-overview.styles';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionsMenu from '../collections-menu/collections-menu.component';

const CollectionsOverview = ({ collections }) => {
	return (
		<CollectionsOverviewContainer>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionsMenu key={id} {...otherCollectionProps} />
			))}
		</CollectionsOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
