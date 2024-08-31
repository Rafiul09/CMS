import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function Category() {
    return (
        <div className='mb-10 items-center flex flex-col gap-2'>
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
        </div>
    )
}

export default Category