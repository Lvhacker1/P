import Link from "next/link"
import { NavLinksProps } from "@/types/types"

const NavLinks = ({ link, onClick }: NavLinksProps) => {
  return (
    <Link href={link.path} onClick={onClick} 
    className="text-black hover:text-blue-600" >
      {link.name}
    </Link>
  )
}

export default NavLinks