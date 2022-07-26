import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Data/StateProvider'

const Subtotal = () => {

  const store = []
  const [{ cart }] = useStateValue()
  let j = 0;
  cart.map(e => {
    store.push(e.price)
  })
  for (let i = 0; i <= cart.length; i++) {
    if (store[i] === undefined) {
      store[i] = 0
    } else {
      j = store[i] + j
    }
  }
  // console.log(j);


  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (        //whatever text we want with currency
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type="checkbox" id='gift' /> <label htmlFor='gift'>This order contain a gift</label>
            </small>
          </>
        )}
        decimalScale={2}    //₹45.99
        value={j}
        displayType={"text"}
        thousandSeparator={true}  //₹4,456
        prefix={"₹"}
      />
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>

    </div>
  )
}

export default Subtotal;