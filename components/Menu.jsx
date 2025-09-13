import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
        <nav>
            <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-8 uppercase group'>
                <li><Link className='text-black font-medium group-hover:text-gray-400 hover:text-black transition duration-300 ease-in-out' href={'/'}>Home</Link></li>
                <li><Link className='text-black font-medium group-hover:text-gray-400 hover:text-black transition duration-300 ease-in-out' href={'/products'}>Products</Link></li>
                <li><Link className='text-black font-medium group-hover:text-gray-400 hover:text-black transition duration-300 ease-in-out' href={'/new'}>New Arrivals</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;