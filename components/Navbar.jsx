"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Link from 'next/link';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
    // State to manage whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // Add relative positioning for the absolutely positioned mobile menu
        <header className='sticky bg-neutral-800/50 border-b border-neutral-800 top-0 backdrop-blur-sm z-50'>
            <div className='container mx-auto flex items-center justify-between py-4 px-4 md:px-0'>
                <Logo />

                {/* Desktop Menu & Auth Buttons */}
                <div className='hidden md:flex items-center gap-8'>
                    <Menu />
                    <div className='flex gap-3 items-center'>
                        <Link href={'/signup'}>Sign Up</Link>
                        <Link className='px-4 py-2 bg-neutral-100 text-black rounded-md' href={'/signin'}>Sign In</Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className='flex md:hidden'>
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-neutral-800/95 shadow-lg">
                    <div className='container mx-auto flex flex-col items-center gap-6 py-8'>
                        {/* Re-use the Menu component for mobile */}
                        <Menu />

                        {/* Mobile Auth Buttons */}
                        <div className='flex flex-col items-center gap-4 w-full px-4'>
                            <Link href={'/signup'} className='w-full text-center py-2' onClick={toggleMenu}>Sign Up</Link>
                            <Link className='w-full text-center px-4 py-2 bg-neutral-100 text-black rounded-md' href={'/signin'} onClick={toggleMenu}>Sign In</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;