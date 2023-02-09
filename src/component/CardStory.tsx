import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

interface Props {
    postItem: {
        name: string;
        pictureProfile: string;
        description: string;
        picturePost: string;
    }[];
}
function CardStory({ postItem }: Props) {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-[12rem]"
            >
                {postItem.map(
                    (item: {
                        name: string;
                        pictureProfile: string;
                        description: string;
                        picturePost: string;
                    }) => (
                        <SwiperSlide
                            // style={{
                            //     backgroundImage:
                            //         "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBlWQjU1fz5qRe7kOq-ibS8mlGsowiYd4kg&usqp=CAU')",
                            // }}
                            className="rounded-lg object-fit h-10 w-10 "
                        >
                            <div className="w-full h-full rounded-lg">
                                <img
                                    src={item.picturePost}
                                    alt="story"
                                    className="absolute rounded-lg w-full h-full  "
                                />
                                <div className="mt-[0.4rem] ml-[0.4rem] rounded-full w-10 h-10 bg-gray-700">
                                    <img
                                        src={item.pictureProfile}
                                        alt="profile"
                                        className="relative mt-[0.4rem] ml-[0.4rem] w-10 h-10 rounded-full object-cover  hover:contrast-[.6]"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                )}

                {/* <SwiperSlide
                    style={{
                        backgroundImage:
                            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBlWQjU1fz5qRe7kOq-ibS8mlGsowiYd4kg&usqp=CAU')",
                    }}
                    className="rounded-lg object-fit h-10 w-10"
                >
                    <div>
                        <div className="mt-[0.4rem] ml-[0.4rem] rounded-full w-10 h-10 bg-gray-700">
                            <img
                                src="https://us-tuna-sounds-images.voicemod.net/f2704a30-e782-4217-9ac1-0ebb512c7dba-1664217479095.png"
                                alt="profile"
                                className="w-10 h-10 rounded-full object-cover  hover:contrast-[.6]"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="border-2 border-rose-500">
                    Slide 2
                </SwiperSlide>
                <SwiperSlide className="border-2 border-rose-500">
                    Slide 3
                </SwiperSlide>
                <SwiperSlide className="border-2 border-rose-500">
                    Slide 4
                </SwiperSlide>
                <SwiperSlide className="border-2 border-rose-500">
                    Slide 5
                </SwiperSlide>
                <SwiperSlide className="border-2 border-rose-500">
                    Slide 6
                </SwiperSlide>
                <SwiperSlide className="border-2 border-rose-500">
                    Slide 7
                </SwiperSlide>
                <SwiperSlide className="border-2 border-rose-500">
                    Slide 8
                </SwiperSlide>
                <SwiperSlide className="border-2 border-rose-500">
                    Slide 9
                </SwiperSlide>  */}
            </Swiper>
        </>
    );
}

const card = () => {
    return (
        <>
            <div className="border-2 border-rose-500"></div>
        </>
    );
};

export default CardStory;
