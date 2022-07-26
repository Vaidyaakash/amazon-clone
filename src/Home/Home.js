import React from 'react'
// import Productblock from '../Blocks/ProductBlock'
import ProductData from '../Blocks/ProductData'
import ProductData2 from '../Blocks/ProductData2'
import Data from '../Data/SliderData'

import "./Home.css"

// slider info
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";



const Home = () => {

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                // spaceBetween={0}
                slidesPerView={1}
                // navigation
                autoplay={true}
                loop={true}
            >
                <SwiperSlide>
                    <img
                        className='home_img'
                        src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/GW/ACQ/IN-PD-22-teaser-GW_3000x1200_2._CB631707276_.jpg'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='home_img'
                        src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/jul22/bobciti/MA_3000._CB632287453_.jpg'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='home_img'
                        src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/JULYGTM2022/PC_Hero_3000x1200_Popular_Apps._CB631455503_.jpg'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='home_img'
                        src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/3000x1200-Read-lead--succeed_revised_june22._CB634065596_.jpg'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='home_img'
                        src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/BAU_HERO_3000x1200._CB648857949_.jpg'
                        alt=''
                    />
                </SwiperSlide>
            </Swiper>
            <div className='home'>
                <div className="home_container">
                    <div className="product_blocks">
                        <ProductData />
                    </div>
                </div>
            </div><br /><br />
            <div className='slider_all_data'>
                <Data />
            </div><br /><br /><br />
            <div className="product_blocks">
                <ProductData2 />
            </div>
        </>
    )
}

export default Home