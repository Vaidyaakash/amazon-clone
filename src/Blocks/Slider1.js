import React from 'react'
import { useStateValue } from '../Data/StateProvider'
import "./Slider1.css"

const Slider1 = (props) => {
    const [{cart}, dispatch] = useStateValue()

    // console.log(cart);
    const addToCart = () => {
        // dispatch an action or item to data layer
        dispatch({
            type: "ADD_CART_SLIDER",
            item: {
                id: id,
                description: title,
                price: price,
                rating: rating,
                img: img
            }
        })
    }

    const { img, id, price, title, rating } = props;
    
    return (
        <div className='slider'>
            <span>
                <div className='slider_img'>
                    <img src={img} />
                </div>
                <div className='title'>{title}</div>
                <div className='slider_price'>
                    <small>₹ </small>
                    <strong>{price}</strong>
                </div>
                {/* <div className='product_rating'>
                    {
                        Array(rating).fill().map((e, i) => (
                            <i key={i} className="fa-solid fa-star"></i>        //unique key prop warning
                        ))
                    }
                </div> */}
                <div className='button' onClick={addToCart}>Add to cart</div>
            </span>
        </div>
    )
}

export default Slider1;