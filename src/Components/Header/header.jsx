import React from 'react'; 

import { connect } from 'react-redux';
import './header.scss';
import CartIcon from '../cartIcon/cartIcon';
import CartDropDown from '../cartDropdown/cartDropdown';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils.js'


const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut() }>SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropDown />
        }
    </div>
);

const mapStateToProps = ({user: {currentUser},cart: { hidden }}) => ({
    currentUser,
    hidden
}) 

export default connect(mapStateToProps)(Header);