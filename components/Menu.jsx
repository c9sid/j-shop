import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
        <nav>
            <ul className='flex flex-col md:flex-row items-center gap-5'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/products'}>Products</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;