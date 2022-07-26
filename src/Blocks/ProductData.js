import React from 'react'
import Productblock from './ProductBlock';

const ProductData = () => {
    return (
        <div>
            <div className="home_row">
                <Productblock
                    id={1}
                    description="Glassware & dinnerware sets from local shops Glassware & dinnerware sets from local shops"
                    price={9500}
                    img="https://m.media-amazon.com/images/I/31AjJNtN3PL._AC_SY200_.jpg"
                    rating={5}
                />
                <Productblock
                    id={2}
                    description="Fastrack Casual Collection Analog Men's Wrist Watch (Blue Dial, Brown Band)"
                    price={5500}
                    img="https://m.media-amazon.com/images/I/61W4meSdVQL._AC_SY200_.jpg"
                    rating={4}
                />
            </div>
            <div className="home_row">
                <Productblock
                    id={4}
                    description="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, Beast™ Mode for Gaming"
                    price={900}
                    img="https://m.media-amazon.com/images/I/51HBom8xz7L._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                />
                <Productblock
                    id={5}
                    description="iQOO Neo 6 5G (Dark Nova, 8GB RAM, 128GB Storage) | Snapdragon® 870 5G | 80W FlashCharge"
                    price={35900}
                    img="https://m.media-amazon.com/images/I/413u56t+CiL._AC_UF226,226_FMjpg_.jpg"
                    rating={5}
                />
                <Productblock
                    id={3}
                    description="casual shoes for men Glassware & dinnerware sets from local shops"
                    price={10500}
                    img="https://m.media-amazon.com/images/I/51C+wfvxDkL._AC_SY200_.jpg"
                    rating={3}
                />
            </div>
            <div className="home_row">
                <Productblock
                    img="https://m.media-amazon.com/images/I/81g+1znNgVL._UX679_.jpg"
                    description="Kamiliant by American Tourister Kiza Combo set of 3 Ash Blue Small, Medium and Large 4-wheel Check-in Suitcase"
                    id={6}
                    price={5999.00}
                    rating={4}
                />
                <Productblock
                    img="https://m.media-amazon.com/images/I/91-aD4hhsiS._UX569_.jpg"
                    description="Amazon Brand - Symbol Men Pajama Bottom, Buy 2 get 5% off, Buy 3 get 10% off, 10% Instant Discount up to INR 500 on Citi Bank Credit Card Transactions."
                    id={6}
                    price={5999.00}
                    rating={5}
                />
            </div>
        </div>
    )
}

export default ProductData;