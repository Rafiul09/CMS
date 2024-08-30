import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function header() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/'
        }

    ]
    return (
        <div className="flex items-center justify-between P-4 shadow-sm">
            <div className="flex items-center mt-1 gap-10">
                <Image src="/logo3.png" alt="logo" width={80} height={80} />
                <ul className=' md:flex gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <Link href={item.path}>
                            <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <Button>Get Started</Button>

        </div>
    )
}

export default header