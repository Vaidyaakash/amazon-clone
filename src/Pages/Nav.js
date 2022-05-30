import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div className='nav'>
        <Link to='/homepage' className='nav__child'>Home</Link>
        <Link to='/student' className='nav__child'>Students</Link>
        <Link to='/contact' className='nav__child'>Contact</Link>
    </div>
  )
}

export default Nav;