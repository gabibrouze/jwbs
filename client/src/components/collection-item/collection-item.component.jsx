import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import {
	CollectionItemContainer,
	CollectionItemImage,
	CollectionItemFooter,
} from './collection-item.styles';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item, addItemToCart }) => {
	const { imageURL, name, price } = item;
	return (
		<CollectionItemContainer>
			<CollectionItemImage imageURL={imageURL} />
			<CollectionItemFooter>
				<span className='name'>{name}</span>
				<span className='price'>R{price}</span>
			</CollectionItemFooter>
			<CustomButton
				className='custom-button'
				inverted
				onClick={() => addItemToCart(item)}
			>
				Add Item
			</CustomButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItemToCart: item => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
