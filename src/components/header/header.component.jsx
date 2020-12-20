import React from 'react';
import { Link as HeaderOption } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectHidden } from '../../redux/cart/cart.selectors';

import {
    HeaderContainer,
    HeaderLogoContainer,
    HeaderOptionsContainer,
    HeaderOptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <HeaderLogoContainer to='/'>
                <Logo className='logo' />
            </HeaderLogoContainer>
            <HeaderOptionsContainer>
                <HeaderOptionLink to='/shop'>SHOP</HeaderOptionLink>
                <HeaderOptionLink to='/shop'>CONTACT</HeaderOptionLink>
                {
                    currentUser
                        ?
                        (
                            <HeaderOptionLink as="div" onClick={() => auth.signOut()}>
                                SIGN OUT
                            </HeaderOptionLink>
                        )
                        :
                        (
                            <HeaderOptionLink to='/signin'>SIGN IN</HeaderOptionLink>
                        )
                }
                <CartIcon />
            </HeaderOptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    );
}

const mapsStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
});

export default connect(mapsStateToProps)(Header);