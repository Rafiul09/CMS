"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';

function CatSearch() {
    const [searchTerm, setSearchTerm] = useState("");  // State for search term
    const [doctors, setDoctors] = useState([]);  // State for search results

    useEffect(() => {
        // Fetch search results whenever the searchTerm changes, but only if the searchTerm is not empty
        if (searchTerm) {
            fetch(`http://127.0.0.1:8080/api/search/doctors?query=${searchTerm}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setDoctors(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        } else {
            setDoctors([]);  // Clear results when search term is empty
        }
    }, [searchTerm]);

    return (
        <div className='mb-10 items-center flex flex-col gap-2'>
            <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
            <h2 className='text-gray-400 text-xl'>Search Your Doctors and Book Appointments in one click</h2>
            <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on input
                />
                <Button type="button">
                    <Search className='h-4 w-4 mr-1' />Search
                </Button>
            </div>
            <div className='mt-5 w-full max-w-full flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                    {doctors.length > 0 ? (
                        doctors.map((doctor, index) => (
                            <div key={index} className='flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                                {doctor.D_photo && (
                                    <img
                                        src={`data:image/jpeg;base64,${doctor.D_photo}`}
                                        alt={`${doctor.D_firstName} ${doctor.D_lastName}`}
                                        className='w-16 h-16 object-cover rounded-full mb-4'
                                    />
                                )}
                                <div className='text-center'>
                                    <div className='font-semibold'>{doctor.D_firstName} {doctor.D_lastName}</div>
                                    <div className='text-gray-600'>{doctor.D_specialist}</div>
                                    <h2 className='border-2 border-primary rounded-full px-7'>Book Now</h2>
                                </div>
                            </div>
                        ))
                    ) : searchTerm ? (
                        <div className='col-span-full text-center text-gray-500'>No doctors found</div>
                    ) : null}
                </div>
            </div>


            <div className='mt-10'>
                <h2 className='font-bold text-4xl tracking-wide mb-6 text-center'>
                    Our <span className='text-primary'>Specializations</span>
                </h2>

                <div className='grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4 '>
                    {['Cardiology', 'Neurology', 'Orthopedics', 'Opthalmology', 'Gynecology', 'Oncology', 'Urology', 'Dermatology', 'Oncology'].map((specialty, index) => (
                        <Link href={`/search/${specialty}`} key={index} className='relative hover:shadow-lg rounded-2xl transition-shadow duration-300'>
                            <Image
                                alt={specialty}
                                src={`/${specialty.toLowerCase()}.png`}
                                width={100}
                                height={100}
                                className="  rounded-2xl object-cover mx-5 mb-6"
                            />
                            <div className=' absolute inset-0 flex items-end justify-center  rounded-2xl shadow-lg '>
                                <h2 className='text-gray-400 text-xl'>{specialty}</h2>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>


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


    );
}

export default CatSearch;
