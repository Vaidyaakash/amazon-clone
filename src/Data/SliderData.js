import React from 'react'
import Slider1 from '../Blocks/Slider1'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Data = () => {

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                loop={true}
            >
                <SwiperSlide>
                    <Slider1
                        img="https://m.media-amazon.com/images/I/31LoE81mjcL._AC_SY200_.jpg"
                        id={11}
                        title="boAt Wave Lite Smartwatch"
                        price={1499}
                        rating = {5}
                    />
                </SwiperSlide>
                <SwiperSlide>

                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/41BnHjRP0ZS._AC_SR400,600_.jpg"
                        id={12}
                        title="OPPO A74 5G (Fantastic Purple)"
                        price={14990.00}
                        rating = {4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://m.media-amazon.com/images/I/214Ck7MfbRL._AC_SY200_.jpg"
                        id={13}
                        title="Sony WI-C100 Wireless Headphones"
                        price={1699}
                        rating = {3}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/31gkDWqFvTL._AC_SR400,600_.jpg"
                        id={14}
                        title="HP K300 Backlit Wired Keyboard"
                        price={628.00}
                        rating = {5}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/41n2MqMIH5L._AC_SR400,600_.jpg"
                        id={15}
                        title="Redgear Pro Wireless Gamepad"
                        price={1299.00}
                        rating = {4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/41kLq+iVPHL._AC_SR400,600_.jpg"
                        id={16}
                        title="Tecno 3 (Electric Blue, 4GB RAM)"
                        price={11999.00}
                        rating = {5}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/41WfBNBSq1L._AC_SR400,600_.jpg"
                        id={17}
                        title="Fujifilm Mini 9 Instant Camera"
                        price={3999.00}
                        rating = {4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/31qznKIdJxL._AC_SR400,600_.jpg"
                        id={18}
                        title="AO Smith Storage 15 Litre"
                        price={7165.00}
                        rating = {3}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/51U1IGeVhZL._AC_SR400,600_.jpg"
                        id={19}
                        title="Mivi Roam 2 Bluetooth Speaker"
                        price={799.00}
                        rating = {3}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/41+sLJHyA8L._AC_SR400,600_.jpg"
                        id={20}
                        title="Vivo Y21G 4GB RAM"
                        price={13499.00}
                        rating = {3}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/51TJmvQswjL._AC_SR400,600_.jpg"
                        id={21}
                        title="Duracell AA 1300mAh Batteries"
                        price={499.00}
                        rating = {4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/3183iGEWksL._AC_SR400,600_.jpg"
                        id={22}
                        title="Amazonbasics Nylon Usb-C"
                        price={719.00}
                        rating = {4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://images-eu.ssl-images-amazon.com/images/I/51HqLr+k+vL._AC_SR400,600_.jpg"
                        id={23}
                        title="Gourmet Popcorn, Butter Toffee"
                        price={219.00}
                        rating = {5}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://m.media-amazon.com/images/I/41chkwxm5hL._AC_SY200_.jpg"
                        id={24}
                        title="Watamate Automatic Water"
                        price={1299.00}
                        rating = {4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://m.media-amazon.com/images/I/612h6HxucoL._AC_SY200_.jpg"
                        id={25}
                        price={1889.00}
                        rating = {5}
                        title="Cart 3D Wallpaper Sticker Roll"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://m.media-amazon.com/images/I/61RDQaMgaJL._AC_SY200_.png"
                        id={26}
                        title="US Polo Men's Fit Casual Shirt"
                        price={1349.00}
                        rating = {4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1
                        img="https://m.media-amazon.com/images/I/31xqRyQjKzL._AC_UY327_FMwebp_QL65_.jpg"
                        id={27}
                        title="Kohler Angle Valve for Bathroom"
                        price={1649.00}
                        rating = {5}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Data;