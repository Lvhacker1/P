"use client";
import Link from 'next/link'
import { NavLink } from '@/types/types'
import { navLinks } from '@/data/data';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)
  
    return (
        <header className="flex items-center justify-between bg-blue-600 relative p-4" >
            <div>
                <Link href="/">
                <Image src="/logo1.png" alt='Logo' height={100} width={100}/>
                </Link>
            </div>
            <div>
                <button  className="cursor-pointer bg-sky-400 border-none text-white p-2 md:hidden"
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
                >☰
                </button>
            </div>
            <nav className={`flex-col gap-4 bg-cyan-300 p-6 min-h-full w-full fixed top-0 left-0 z-50 md:static md:flex md:flex-row md:bg-transparent md:min-h-0 md:p-0 
                ${menuOpen ? "flex" : "hidden"}`}>
                <button className="self-end text-3xl font-bold cursor-pointer text-gray-800 mb-4 md:hidden"
                onClick={closeMenu}
                aria-label="Close menu"> &times;
                </button>
                {navLinks.map((link: NavLink) => (
                    <Link key={link.path} href={link.name} onClick={closeMenu}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    )
}

export default Header