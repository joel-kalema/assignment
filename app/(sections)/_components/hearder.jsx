"use client"

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
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
    // console.log(items)

    return (
        <div className="relative w-[200%] ml-[-50%]">
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
             }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                items ?
                    items.map((item, index) => (
                        <SwiperSlide>
                            <div key={index} className="h-[70dvh]">
                                <div className="overflow-hidden">
                                    <Image
                                        src={item.pcImageUrl}
                                        alt="andrew's logo"
                                        // className="dark:invert"
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
            <div className="button-Atrrangement absolute top-28 left-[33.3%] w-2/6">
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