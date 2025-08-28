'use client'
import { navLinks, socialLinks, copyright } from "@/data/data";
import { SocialLinks, NavLink } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white p-4 flex flex-col justify-between items-center gap-4">
            <nav className="flex gap-4">
                {navLinks.map((link: NavLink) => (
                    <Link key={link.path} href={link.name}>
                        {link.name}
                    </Link>
                ))}
            </nav>
            <div className="flex gap-4 cursor-grab">
                {socialLinks.map((socialLink: SocialLinks) => (
                    <a key={socialLink.name} href={socialLink.url} target="_blank" rel="noopener noreferrer">
                        <Image src={socialLink.icon} alt={socialLink.name} width={24} height={24} />
                    </a>
                ))}
            </div>
            <div>
                <p className="text-sm">© {copyright.year} | {copyright.name} | {copyright.text}</p>
            </div>
        </footer>
    )
}

export default Footer;