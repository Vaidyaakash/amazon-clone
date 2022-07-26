import React from 'react';
import { useStateValue } from '../Data/StateProvider';
import "./CartProduct.css"

const CartProduct = ({ id, img, title, price, rating }) => {
    const [, dispatch] = useStateValue()
    const DeleteFromCart = () => {
        dispatch({
            type: "DELETE_FORM_CART",
            id: id,
        })
    }
    return (
        <div className='cart_items'>
            <img className='cart_img' src={img} alt= ""/>
            <div className='cart_item_details'>
                <div className='cart_title'>{title}</div>
                <div className='cart_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </div>
                <div className='cart_rating'>
                    {
                        Array(rating).fill().map((e, index) => (
                            <>
                                <i key={id} className="fa-solid fa-star"></i>
                            </>
                        ))
                    }
                </div>
                <button onClick={DeleteFromCart}>Delete from cart</button>
            </div>
        </div>
    )
}

export default CartProduct