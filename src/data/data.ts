import { CopyrightProps, NavLink, SocialLinks } from "@/types/types";

export const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "l", path: "/l" },
  { name: "ll", path: "/ll" },
  { name: "lll", path: "/lll" },
];

export const socialLinks: SocialLinks[] = [
    {name: "GitHub", url: "https://github.com/Lvhacker1", icon: "/git.png"},
    {name: "LinkedIn", url: "https://www.linkedin.com/in/lava-sharif-24a400323/", icon: "/linkedin.png"}
];

export const copyright: CopyrightProps = {
    name: "Lava Sharif",
    text: "All rights reserved.",
    year: new Date().getFullYear()
};