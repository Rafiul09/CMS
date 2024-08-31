"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import Link from 'next/link';

function CatSearch({category}) {
    
    const [searchTerm, setSearchTerm] = useState(category||"");  // State for search term
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




        </div>


    );
}

export default CatSearch;
