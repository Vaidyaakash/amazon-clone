import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { useStateValue } from '../Data/StateProvider';

const SignIn = () => {
    const history = useNavigate()
    const [{cart}] = useStateValue()

    const [signin, setSignin] = useState({
        password: "",
        email: "",
    })

    const onchangEvent = (e) => {
        setSignin({
            ...signin,
            [e.target.name]: e.target.value
        })
    }

    const formSubmit = (e) => { 
        e.preventDefault()
        cart.push(signin.email)
        console.log(cart);
    }

    const submitEvent = () => {
        if (signin.email) {
            history("/")
        }
    }

    return (
        <div className='signup'>
            {/* <Link to="/"><img src='https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?resize=768%2C219&ssl=1' /></Link> */}
            <div className='createaccount'>
                <p>Sign-In</p>
                <form onSubmit={formSubmit}>
                    <div className='login_name'>
                        <small>Mobile number or email</small>

                        <input
                            type="text"
                            name='email'
                            value={signin.email}
                            onChange={onchangEvent}
                        />
                    </div>
                    <div className='login_name'>
                        <small>Password</small>
                        <input
                            type="password"
                            name='password'
                            value={signin.password}
                            placeholder=''
                            onChange={onchangEvent}
                        />
                    </div>

                    <button type='submit' onClick={submitEvent}>Continue</button>

                    <div className='already_accout'>
                        If you not have an account? <Link to="/login">Create your Amazon account</Link>
                    </div>
                </form>
            </div>
            <div></div>
        </div>
    )
}

export default SignIn