import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Link from 'next/link'
import { MenuIcon, X } from 'lucide-react'

const Navbar = () => {

    // const [isOpen, setIsOpen] = useState();
    // const toggle = setIsOpen(!isOpen);

    return (
        <header className='bg-neutral-800/50 border-b border-neutral-800 sticky top-0'>
            <div className='container mx-auto flex items-center justify-between py-4 px-4 md:px-0'>
                <Logo />
                <Menu />
                <div className='hidden md:flex gap-3 items-center'>
                    <Link href={'/'}>Sign Up</Link>
                    <Link className='px-4 py-2 bg-neutral-100 text-black rounded-md' href={'/'}>Sign In</Link>
                </div>
                <div className='flex md:hidden'>
                    <MenuIcon />
                </div>
            </div>
        </header>

    )
}

export default Navbar