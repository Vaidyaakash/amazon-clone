import React from 'react'
import Productblock from './ProductBlock';

const ProductData2 = () => {
    return (
        <div>
            <div className="home_row">
                <Productblock
                    id={1}
                    description="Redmi 9 Activ (Coral Green, 4GB RAM, 64GB Storage) Exchange Offer: Up to ₹9,000.00 off on Exchange"
                    price={9499}
                    img="https://m.media-amazon.com/images/I/91kAtEXPIeL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                />
                <Productblock
                    id={2}
                    description="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, Beast™ Mode(Low Latency Upto 80ms)"
                    price={1499}
                    img="https://images-eu.ssl-images-amazon.com/images/I/61LL4tCXoYL._AC_UL160_SR160,160_.jpg"
                    rating={4}
                />
            </div>
            <div className="home_row">
                <Productblock
                    id={4}
                    description="Mi Step Out 12 L Mini Backpack (Small Size, Black, Water Repellant)"
                    price={450}
                    img="https://m.media-amazon.com/images/I/71edjA10hZL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={4}
                />
                <Productblock
                    id={5}
                    description="Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black),SM-R840NZKAINS"
                    price={35900}
                    img="https://m.media-amazon.com/images/I/61w674PbGRL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={4}
                />
                <Productblock
                    id={3}
                    description="Dell Vostro 3400 Intel i3-1115G4 14 inches(35.5cm) FHD Display Laptop (4GB / 1TB HDD + 256GB SSD)"
                    price={10500}
                    img="https://m.media-amazon.com/images/I/61HCEPIeOmL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={3}
                />
            </div>
            <div className="home_row">
                <Productblock
                    img="https://m.media-amazon.com/images/I/61MUoISbzjL._AC_UL480_FMwebp_QL65_.jpg"
                    description="Redgear A-15 Wired Gaming Mouse with Upto 6400 DPI, RGB & Driver Customization for PC(Black)"
                    id={6}
                    price={389}
                    rating={5}
                />
                <Productblock
                    img="https://m.media-amazon.com/images/I/71hrx6vNjPL._AC_UL480_FMwebp_QL65_.jpg"
                    description="Lenovo Casual Laptop Briefcase T210 (Toploader) 39.62 cm (15.6-inch) Water Repellent Black"
                    id={6}
                    price={929}
                    rating={4}
                />
            </div>
        </div>
    )
}

export default ProductData2;