import React from 'react'; 

import { connect } from 'react-redux';
import './header.scss';
import { createStructuredSelector} from 'reselect'
import CartIcon from '../cartIcon/cartIcon';
import CartDropDown from '../cartDropdown/cartDropdown';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils.js'
import {selectCurrentUser } from '../../redux/User/userSelector';
import { cartHidden } from '../../redux/cart/cart.selector';



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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: cartHidden
}) 

export default connect(mapStateToProps)(Header);