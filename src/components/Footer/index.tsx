'use client'
import { navLinks, socialLinks } from "@/data/data";
import { SocialLinks, NavLink } from "@/types/types";
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
                    </a>
                ))}
            </div>
            <div>
                <p></p>
            </div>

        </footer>
    )
}

export default Footer;