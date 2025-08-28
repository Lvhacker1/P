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

export interface PageTitleProps {
    title: string;
}

export interface SocialLinks {
    name: string;
    url: string;
    icon: string;
}

export interface CopyrightProps {
    name: string;
    text: string;
    year: number;
}