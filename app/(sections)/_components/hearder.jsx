"use client"

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Header = () => {

    const [items, setItems] = useState()

    const getImage = () => {
        axios.get(`https://api.testvalley.kr/main-banner/all`)
            .then((response) => {
                setItems(response.data)
            })
    }

    getImage();

    return (
        <div className="relative w-[100%] lg:w-[200%] lg:ml-[-50%] prod mt-[3.5rem] lg:mt-[4.3rem]">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'bullets',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {
                    items ?
                        items.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="">
                                    <div className="overflow-hidden md:hidden">
                                        <Image
                                            src={item.mobileImageUrl}
                                            alt="home image"
                                            layout="responsive" width={500} height={500} quality={80}
                                            priority
                                        />
                                    </div>

                                    <div className="overflow-hidden hidden md:block h-[100%]">
                                        <Image
                                            src={item.pcImageUrl}
                                            alt="home image"
                                            layout="responsive" width={500} height={500} quality={80}
                                            priority
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                        : (
                            <div>
                                <h1>Loading...</h1>
                            </div>
                        )
                }
            </Swiper>

            <div className="button-Atrrangement absolute top-28 lg:left-[33.3%] w-6/6 lg:w-2/6">
                <div className="button-swiper">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </div>
    )
}

export default Header;