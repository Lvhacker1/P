import Link from "next/link"
import { NavLink } from "@/types/types"


const NavLinks = ({link} :{link: NavLink}) => {
    return (
        <Link href={link.href}>
            {link.label}
        </Link>
    )
}

export default NavLinks