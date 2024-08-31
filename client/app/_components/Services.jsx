"use client";
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


function services() {
    return (
        <div className='mb-10 items-center flex flex-col gap-2'>
            <div className='mt-10'>
                <h2 className='font-bold text-4xl tracking-wide mb-6 text-center'>
                    Our <span className='text-primary'>Services</span>
                </h2>
            </div>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}

                        autoplay={{ delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className="mx-auto grid grid-cols-1 gap-8  lg:grid-cols-2 lg:gap-16">
                                <div className="relative  h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                                    <Image
                                        alt=""
                                        src="/xray.jpg"
                                        width={800}
                                        height={450}

                                        className="absolute inset-0 h-full  rounded-3xl w-full object-cover "
                                    />
                                </div>

                                <div className="lg:py-24">
                                    <h2 className="text-3xl font-bold sm:text-4xl">X-Ray</h2>

                                    <p className="mt-4 text-gray-600">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                        eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                                        quidem quam repellat.
                                    </p>

                                    <a
                                        href="#"
                                        className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                    >
                                        Get Started Today
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mx-auto grid grid-cols-1 gap-8  lg:grid-cols-2 lg:gap-16">
                                <div className="relative  h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                                    <Image
                                        alt=""
                                        src="/ultrasonography.jpg"
                                        width={800}
                                        height={450}

                                        className="absolute inset-0 h-full  rounded-3xl w-full object-cover "
                                    />
                                </div>

                                <div className="lg:py-24">
                                    <h2 className="text-3xl font-bold sm:text-4xl">Ultrasonography</h2>

                                    <p className="mt-4 text-gray-600">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                        eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                                        quidem quam repellat.
                                    </p>

                                    <a
                                        href="#"
                                        className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                    >
                                        Get Started Today
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mx-auto grid grid-cols-1 gap-8  lg:grid-cols-2 lg:gap-16">
                                <div className="relative  h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                                    <Image
                                        alt=""
                                        src="/mri.jpg"
                                        width={800}
                                        height={450}

                                        className="absolute inset-0 h-full  rounded-3xl w-full object-cover "
                                    />
                                </div>

                                <div className="lg:py-24">
                                    <h2 className="text-3xl font-bold sm:text-4xl">MRI</h2>

                                    <p className="mt-4 text-gray-600">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                        eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                                        quidem quam repellat.
                                    </p>

                                    <a
                                        href="#"
                                        className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                    >
                                        Get Started Today
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* Add additional SwiperSlide components here for more slides */}
                    </Swiper>
                </div>
            </section>
        </div>
    )
}

export default services