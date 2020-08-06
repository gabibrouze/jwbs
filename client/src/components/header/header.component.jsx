import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	HeaderContainer,
	LogoContainer,
	LogoImage,
	OptionsContainer,
	Option,
	SignOutOption,
} from './header.styles';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import Logo from '../../assets/icons/jwbs.png';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<LogoImage src={Logo} alt='JWBS Logo' className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<Option to='/shop'>SHOP</Option>
				<Option to='/events'>EVENTS</Option>
				<Option to='/initiatives'>INITIATIVES</Option>
				{currentUser ? (
					<SignOutOption onClick={signOutStart}>SIGN OUT</SignOutOption>
				) : (
					<Option to='/auth'>SIGN IN</Option>
				)}
				<CartIcon />
			</OptionsContainer>
			{!hidden && <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
