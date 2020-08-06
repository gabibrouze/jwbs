import React from 'react';
import { connect } from 'react-redux';

import {
	CheckoutItemContainer,
	ImageContainer,
	CheckoutItemImage,
} from './checkout-item.styles';

import {
	addItemToCart,
	removeItem,
	clearItemFromCart,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
	const { name, imageURL, price, quantity } = cartItem;
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<CheckoutItemImage
					src={require(`../../assets/media/${imageURL}`)}
					alt='item'
				/>
			</ImageContainer>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => removeItem(cartItem)}>
					&#45;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(cartItem)}>
					&#43;
				</div>
			</span>

			<span className='price'>R{price}</span>
			<div className='remove-button' onClick={() => clearItem(cartItem)}>
				&#10006;
			</div>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItemToCart(item)),
	removeItem: item => dispatch(removeItem(item)),
	clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
