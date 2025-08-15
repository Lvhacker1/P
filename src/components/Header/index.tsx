"use client";
import Link from 'next/link'
import styles from './header.module.css'
import { HeaderProps, NavLink } from '@/types/types'
import NavLinks from '../NavLinks'
import { navLinks } from '@/data/data';

const Header = ({ logoSrc, logoAlt = "Logo", links = navLinks, onMenuClick }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div>
                <Link href="/">
                <p>Change to next image and put logo here</p>
                </Link>
            </div>
            <div>
                <button
                className={styles.hamburgerMenu}
                aria-label="Open navigation menu"
                aria-expanded={!!onMenuClick}
                onClick={onMenuClick ?? (() => {})}
                >
                ☰
                </button>
            </div>
            <nav className={styles.navBar}>
                {links.map((link) => (
                <NavLinks key={link.href} link={link} />
                ))}
            </nav>
            
        </header>
    )
}

export default Header