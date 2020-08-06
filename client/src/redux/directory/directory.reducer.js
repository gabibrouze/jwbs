const INITIAL_STATE = {
	sections: [
		{
			title: 'Wine and Gifts',
			imageURL: 'gift.svg',
			id: 1,
			linkURL: 'shop/gifts',
		},
		{
			title: 'E-cards and Donations',
			imageURL: 'e-gift.svg',
			id: 2,
			linkURL: 'shop/ecards',
		},
		{
			title: 'Tickets',
			imageURL: 'events.svg',
			id: 3,
			linkURL: 'shop/tickets',
		},
	],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
