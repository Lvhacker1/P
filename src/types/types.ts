export interface NavLink {
    label: string;
    href: string;
}

export interface HeaderProps {
    logoSrc: string;
    logoAlt?: string;
    links: NavLink[];
    onMenuClick?: () => void;
}