import { render, screen } from "@testing-library/react";
import NavLinks from "@/components/NavLinks";

jest.mock("next/link", () => ({ children, href, ...rest }: any) => (
  <a href={href} {...rest}>{children}</a>
));

const testLinks = [
    { name: "Home", path: "/" },
    { name: "l", path: "/l" },
    { name: "ll", path: "/ll" },
    { name: "lll", path: "/lll" },
]

describe('NavLinks component', () => {
    test('Test that it renders 4 navigation links with correct names and paths from data file', () => {
        testLinks.forEach((linkItem) => {
            render(<NavLinks link={linkItem}/>)
            const renderLink = screen.getByRole('link', {name: linkItem.name})
            expect(renderLink).toBeInTheDocument();
            expect(renderLink).toHaveAttribute('href', linkItem.path)
        })
    })
})