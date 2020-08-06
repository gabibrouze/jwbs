import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51GwYoaLfHty0bZ0nRjvjdvtt26nPpG5xqbGKNbIggenYut0s4L8VMnt1NCtGKfCXLohmyfS9Fsvf8gib1a1Q1w9300YP2KCTsH';

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then(response => {
				alert('Payment successful');
			})
			.catch(error => {
				console.log('Payment error: ', JSON.parse(error));
				alert(
					'There was an issue with your paymenet. Please make sure you use the provided test card details.'
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay'
			name='JWBS'
			billingAddress
			shippingAddress
			image={require('../../assets/icons/jwbs.png')}
			description={`Your total is: R${price}`}
			amount={priceForStripe}
			currency='ZAR'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
