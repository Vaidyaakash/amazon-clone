import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../Data/StateProvider';
import "./Header.css"

const Header = () => {

    const [{ cart }] = useStateValue(0)

    return (
        <div className='header'>
            <Link to="/">
                <img
                    className='header_logo'
                    src='https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png' alt='not found' />
            </Link>
            <div className='header_search'>
                <input className='header_search_input' type="text" />
                <i className="fa-solid fa-magnifying-glass searchIcon"></i>
            </div>

            <div className='header_nav'>
                <div className='header_option flag'>
                    <span className='header_option_1'><i className="fa-solid fa-flag"></i></span>
                    <span className='header_option_2'><i className="fa-solid fa-sort-down"></i></span>
                </div>
                <Link to="/signup">
                    <div className='header_option'>
                        <span className='header_option_1'>Hello, Sign in</span>
                        <span className='header_option_2'>Account & Lists</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className='header_option'>
                        <span className='header_option_1'>Returns</span>
                        <span className='header_option_2'>& order</span>
                    </div>
                </Link>
                <Link to="/cart">
                    <div className='header_option cartOption'>
                        <span className='header_option_2'><i className="fa-solid fa-cart-shopping"></i></span>
                        <span className='header_option_1'>{cart.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;