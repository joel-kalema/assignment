"use client"

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Icons = () => {
    const [items, setItems] = useState()

    const getIcon = () => {
        axios.get(`https://api.testvalley.kr/main-shortcut/all`)
            .then((response) => {
                setItems(response.data)
            })
    }

    getIcon();

    return (
        <div className="flex w-6/6 lg:w-4/6 mx-auto justify-between mt-10 flex-wrap px-4 lg:p-0">
            {
                items ?
                    items.map((item, index) => (
                        <div key={index} className="w-[19.6%] md:w-[10%] mb-2">
                            <div className="overflow-hidden p-3 lg:p-5">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    layout="responsive" width={500} height={500} quality={80}
                                    priority
                                />
                            </div>
                            <h1 className="text-xs text-center">{item.title}</h1>
                        </div>
                    )) :

                    <div className="text-center">Loading</div>
            }
        </div>
    )
}

export default Icons;