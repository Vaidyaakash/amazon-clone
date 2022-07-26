import React from 'react'
import CartProduct from '../Blocks/CartProduct';
import { useStateValue } from '../Data/StateProvider';
import { CardElement} from "@stripe/react-stripe-js"
import "./Checkout.css"

const Checkout = () => {
    const [{ cart }] = useStateValue()

    const store = []
    let j = 0;
    cart.map(e => store.push(e.price))
    for (let i = 0; i <= cart.length; i++) {
      if (store[i] === undefined) {
        store[i] = 0
      } else {
        j = store[i] + j
      }
    }


    return (
        <>
            <h1 id='h1'>Your Orders ({cart.length} items)</h1>
            <div className='checkout_container'>
                <div className='checkout'>

                    <div className='checkout_address'>
                        <b>Delivery Address:</b>
                        <div className='address'>
                            <p>Guest user </p> <p> React js family,</p> <p> new Mumbai, India</p>
                        </div>
                    </div><hr />
                    <div className='checkout_product'>
                        <b>Review items and Delivery</b>
                        <div className='item'>
                            {cart.map(e => (
                                <div className='item1'>
                                    <CartProduct
                                        key={e.id}
                                        img={e.img}
                                        id={e.id}
                                        title={e.description}
                                        price={e.price}
                                        rating={e.rating}
                                    />
                                </div>
                            ))}
                        </div>
                    </div><hr />
                    <div className='checkout_payment'>
                        <b>Payment Method</b>
                        <div className='real_payment'>
                            <form><br/>
                                <CardElement /><br/><br/>
                                <h2> Total Order: ₹{j} </h2><br />
                                <button type='submit'>Continue</button>
                            </form>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Checkout;