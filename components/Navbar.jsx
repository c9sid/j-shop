"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Link from 'next/link';
import { MenuIcon, User, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='sticky bg-white top-0 backdrop-blur-sm z-50'>
            <div className='container mx-auto flex items-center justify-between py-4 px-4 md:px-0'>

                <div className="logoDesktop hidden md:flex">
                    <Logo />
                </div>

                <div className='hidden md:flex'>
                    <Menu />
                </div>
                <div className='hidden md:flex items-center gap-8'>
                    <div className='flex gap-3 items-center'>
                        <Link href={'/'}><User /></Link>
                    </div>
                </div>

                <div className='flex md:hidden'>
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>

                <div className="mobLogo flex md:hidden">
                    <Logo />
                </div>

                <div className='flex md:hidden gap-3 items-center'>
                    <Link href={'/'}><User /></Link>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white">
                    <div className='container mx-auto flex flex-col items-center py-8'>
                        <Menu />
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;