import { Link } from 'react-router-dom';
import React from 'react'
import "./SignUp.css"

const SignUp = () => {
    return (
        <div className='signup'>
             {/* <Link to="/"><img src='https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?resize=768%2C219&ssl=1' /></Link> */}
            <div className='createaccount'>
                <p>Create account</p>
                <div className='login_name'>
                    <small>Your name</small>
                    <input type="text" placeholder='First and last name' />
                </div>
                <div className='login_name'>
                    <small>Mobile number or email</small>
                    <input type="text" />
                </div>
                <div className='login_name'>
                    <small>Password</small>
                    <input type="text" placeholder='At least 6 character' />
                </div>
                <div className='login_name'>
                    <small>Re-enter password</small>
                    <input type="text" />
                </div>
                <button>Continue</button>

                <div className='already_accout'>
                    Already have an account? <Link to="/signup">Sign-In</Link>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default SignUp;