'use client'
import { navLinks, socialLinks, copyright } from "@/data/data";
import { SocialLinks, NavLink } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <nav>
                {navLinks.map((link: NavLink) => (
                    <Link key={link.path} href={link.name}>
                        {link.name}
                    </Link>
                ))}
            </nav>
            <div>
                {socialLinks.map((socialLink: SocialLinks) => (
                    <a key={socialLink.name} href={socialLink.url} target="_blank" rel="noopener noreferrer">
                        {socialLink.name}
                        <Image src={socialLink.icon} alt={socialLink.name} width={24} height={24} />
                    </a>
                ))}
            </div>
            <div>
                <p>© {copyright.year} | {copyright.name} | {copyright.text}</p>
            </div>
        </footer>
    )
}

export default Footer;