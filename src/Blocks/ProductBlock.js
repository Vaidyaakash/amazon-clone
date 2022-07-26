import React from 'react';
import { useStateValue } from '../Data/StateProvider';
import "./Product-block.css";
const Productblock = (props) => {

    const [{cart}, dispatch] = useStateValue()

    // console.log(cart);

    const addToCart = () => {
        // dispatch an action or item to data layer
        dispatch({
            type: "ADD_CART",
            item: {
                id: id,
                description: description,
                price: price,
                rating: rating,
                img: img
            }
        })
    }

    const { id, description, price, rating, img } = props;
    return (
        <div className='product'>
            <div className='product_details'>
                <p>{description}</p>
                <div className='product_price'>
                    <span className='doller'>₹ </span>
                    <span className='price'>{price}</span>
                </div>
                <div className='product_rating'>
                    {
                        Array(rating).fill().map((e, i) => (
                            <i key={i} className="fa-solid fa-star"></i>        //unique key prop warning
                        ))
                    }
                </div>
            </div>
            <div className='img_space'>
            <img
                className='product_block_img'
                src={img}
                alt=''
            />
            </div>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Productblock;