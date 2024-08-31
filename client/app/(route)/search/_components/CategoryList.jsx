"use client";
import React from 'react'
import Image from 'next/image';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import Link from 'next/link'
import { usePathname } from 'next/navigation';


function CategoryList() {

    const params = usePathname();
    const category = params.split('/')[2];


    return (
        <div className='h-screen mt-5 flex flex-col  '>
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className='overflow-visible'>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions" >
                        {['Cardiology', 'Neurology', 'Orthopedics', 'Opthalmology', 'Gynecology', 'Oncology', 'Urology', 'Dermatology'].map((specialty, index) => (
                            <CommandItem>
                                <Link href={`/search/${specialty}`}
                                    className={`p-1 flex gap-2 text-[15px]  
                                    rounded-md cursor-pointer
                                    items-center
                                    w-full
                                      ${category === specialty ? 'bg-fuchsia-300' : ''}
                                `}>
                                    <Image
                                        alt={specialty}
                                        src={`/${specialty.toLowerCase()}.png`}
                                        width={40}
                                        height={40}
                                        className="rounded-2xl object-cover"
                                    />
                                    <label className=''>{specialty}</label>
                                </Link>
                            </CommandItem>
                        ))}

                    </CommandGroup>

                </CommandList>
            </Command>

        </div >
    )
}

export default CategoryList