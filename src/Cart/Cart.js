import React from 'react'
import CartProduct from '../Blocks/CartProduct'
import { useStateValue } from '../Data/StateProvider'
import "./Cart.css"
import Subtotal from './Subtotal'

const Cart = () => {

    const [{ cart }] = useStateValue()

    return (
        <div className='cart'>
            <div className='cart_left'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/Revised/Latest/Cashback/New/640x45._CB631377515_.jpg' alt='' />
                <div>
                    <div className='cart_title'>
                       <h1> Your Shopping Cart</h1>
                    </div><hr />

                    {
                        cart.map(e => (
                            <CartProduct
                                key={e.id}
                                img={e.img}
                                id={e.id}
                                title={e.description}
                                price={e.price}
                                rating={e.rating}
                            />
                        ))
                    }
                </div>

            </div>
            <div className='cart_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Cart;