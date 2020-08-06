import React from 'react';

import {
	CartItemContainer,
	CartItemImage,
	CartItemDetails,
} from './cart-item.styles';

const CartItem = ({ item: { imageURL, price, name, quantity } }) => {
	return (
		<CartItemContainer>
			<CartItemImage
				src={require(`../../assets/media/${imageURL}`)}
				alt='item'
			/>
			<CartItemDetails>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} × R{price}
				</span>
			</CartItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
