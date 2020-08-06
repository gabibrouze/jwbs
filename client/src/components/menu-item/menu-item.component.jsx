import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	MenuItemContainer,
	MenuItemContent,
	MenuItemTitle,
	BackgroundImage,
} from './menu-item.styles';

const MenuItem = ({ title, imageURL, size, history, linkURL, match }) => {
	console.log(require(`../../assets/icons/${imageURL}`));
	return (
		<MenuItemContainer
			size={size}
			onClick={() => history.push(`${match.url}${linkURL}`)}
		>
			<BackgroundImage
				src={require(`../../assets/icons/${imageURL}`)}
				alt='icons'
			/>
			<MenuItemContent>
				<MenuItemTitle>{title}</MenuItemTitle>
			</MenuItemContent>
		</MenuItemContainer>
	);
};
export default withRouter(MenuItem);
