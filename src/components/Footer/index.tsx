'use client'
import { navLinks } from "@/data/data";
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

            </div>
            <div>
                <p></p>
            </div>

        </footer>
    )
}

export default Footer;