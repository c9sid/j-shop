import Link from 'next/link'
import React from 'react'

const Menu = () => {
    return (
        <nav className='hidden md:flex'>
            <div>
                <ul className='flex gap-5'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/products'}>Products</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu