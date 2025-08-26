export interface NavLink {
  name: string;
  path: string;
}

export interface NavLinksProps {
  link: NavLink;
  onClick?: () => void;
}

export interface HeaderProps {
    logoSrc: string;
    logoAlt?: string;
    links: NavLink[];
    onMenuClick?: () => void;
}