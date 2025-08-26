import {render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/Header';
import { navLinks } from '@/data/data'; 
import { NavLink } from '@/types/types';


jest.mock('next/image', () => (props: any) => <img {...props} />);
jest.mock('next/link', () => ({ children, href, ...rest }: any)  => (
  <a href={href} {...rest}>{children}</a>
));

jest.mock('@/data/data', () => ({
  navLinks: [
    { name: "Home", path: "/" },
    { name: "l", path: "/l" },
    { name: "ll", path: "/ll" },
    { name: "lll", path: "/lll" }
  ]
}));

describe('Header', () => {
    test('Test that the logo image renders with alt text and correct src', () => {
        render (<Header/>);
        const logo = screen.getByAltText('Logo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '/logo1.png');
    });

    test('Test that logo image is a link to the homepage, pointing to "/"', () => {
        render (<Header/>);
        const logoLink = screen.getByRole('link', { name: /logo/i });
        expect (logoLink).toBeInTheDocument();
        expect (logoLink).toHaveAttribute('href', '/')
    });

    test('Test that header renders 5 links (4 navlinks + 1 logo)', () => {
        render(<Header/>);
        const links = screen.getAllByRole('link');
        expect(links.length).toBe(5);
    });

    test('Test that the navigation links has correct names and paths from data file', () => {
        render(<Header/>);
        const navLinks: NavLink[] = [
            { name: "Home", path: "/" },
            { name: "l", path: "/l" },
            { name: "ll", path: "/ll" },
            { name: "lll", path: "/lll" }
        ];
        navLinks.forEach((link) => {
            const renderLink = screen.getByRole('link', {name: link.name})
            expect(renderLink).toBeInTheDocument();
            expect(renderLink).toHaveAttribute('href', link.name)
        })
    })


    test('Test that navigation menu shows and hides in mobile when menu button is clicked', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
    fireEvent.click(menuButton);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('flex');   

    const closeButton = screen.getByRole('button', { name: /close menu/i });
    fireEvent.click(closeButton);

    expect(nav).toHaveClass('hidden');
    });
})

