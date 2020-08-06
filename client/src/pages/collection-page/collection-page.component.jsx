import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
	CollectionContainer,
	CollectionHeader,
	Items,
} from './collection-page.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionContainer>
			<CollectionHeader>{title}</CollectionHeader>
			<Items>
				{items.map(item => (
					<CollectionItem
						className='collection-item'
						key={item.id}
						item={item}
					/>
				))}
			</Items>
		</CollectionContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionPage);
