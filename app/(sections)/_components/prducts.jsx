"use client"

import axios from "axios";
import Image from "next/image";
import React, { useState } from 'react';

import { RiShareForwardFill } from "react-icons/ri";
import { MdOutlineStarPurple500 } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Products = () => {
    const [items, setItems] = useState([])


    const getProduct = () => {
        axios.get(`https://api.testvalley.kr/collections?prearrangedDiscount`)
            .then((response) => {
                setItems(response.data)
            })
    }

    getProduct();

    function calculateDiscountPercentage(originalPrice, discountPrice) {
        let discountPercentage = ((originalPrice - discountPrice) / originalPrice) * 100;
        if (isNaN(discountPercentage)) {
            return '';
        }
        discountPercentage = Math.round(discountPercentage);
        
        return discountPercentage + "%";
    }

    const filteredProduct = items.items ? items.items.filter((item) => item.type === "SINGLE") : [];

    return (
        <div className="w-6/6 px-4 lg:w-4/6 mx-auto mt-10">
            {
                filteredProduct ?
                    filteredProduct.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row justify-between relative mb-16 my-swiper">

                            <div className="w-full md:w-2/6 flex flex-col mt-10 mb-4 md:mb-0">
                                <h1 className="font-bold text-xl lg:text-2xl w-[70%] mb-3">{item.title}</h1>
                                <h2 className="text-[12px] w-[70%] text-[#414141]">{item.subtitle}</h2>
                            </div>

                            <div className="w-full md:w-4/6 relative">
                                <Swiper
                                    className=""
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    breakpoints={{
                                        100: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 10,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                    }}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <div className="flex justify-between">
                                        {item.items.map((product, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="">
                                                    <div className="overflow-hidden rounded relative mb-2">
                                                        <Image
                                                            src={product.publication.media[0].uri}
                                                            alt={product.publication.title}
                                                            layout="responsive" width={500} height={500} quality={80}
                                                            priority
                                                        />

                                                        <div className={product.publication.tagsOnImage[0] ? "text-[10px] text-[#fff] bg-[#009E8A] absolute left-0 bottom-0 p-1 flex items-center" : "hidden"}>
                                                            <RiShareForwardFill className="rotate-180" />
                                                            <p>{product.publication.tagsOnImage[0]}</p>
                                                        </div>

                                                    </div>
                                                    <h1 className="text-xs mb-2">{product.publication.title}</h1>
                                                    <h1 className="font-extrabold mb-2 text-sm lg:text-[18px] text-[#545454] flex items-end">
                                                        <p className="text-[#e54444]">{calculateDiscountPercentage(product.publication.priceInfo.price, product.publication.priceInfo.discountPrice)}</p>
                                                        <p>{product.publication.priceInfo.price}</p>
                                                        <p className="text-[10px]">원</p>
                                                    </h1>
                                                    <p className="text-[10px]">{product.publication.brandName}</p>
                                                    <div className="text-xs flex items-center">
                                                        <MdOutlineStarPurple500 />
                                                        <p>{product.publication.rating}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </div>
                                </Swiper>

                            </div>
                            <div className="button-Atrrangement absolute bottom-0 left-[-3%] w-[10%]">
                                <div className="button-swiper">
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-pagination"></div>
                                    <div className="swiper-button-next"></div>
                                </div>
                            </div>
                        </div>
                    )) :

                    <div className="text-center">Loading</div>
            }
        </div>
    )
}

export default Products;