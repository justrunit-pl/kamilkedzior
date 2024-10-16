import {useState} from "react";
import clsx from "clsx";
import {Button, type ButtonProps} from "../Button";


const HamburgerButton = ({ className, ...restProps }: ButtonProps) => {
    return (
        <Button className={clsx("rounded-full p-4 hover:bg-gray-200/30", className)} {...restProps}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </Button>
    )
}

const ExitButton = ({ className, ...restProps }: ButtonProps) => {
    return (
        <Button className={clsx("rounded-full p-4 hover:bg-gray-200/30", className)} {...restProps}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </Button>
    )
}

const NavLink = ({href, label}: { href: string, label: string }) => {
    return <a href={href ? href : '#'} className="group flex flex-col">
        <span>{label}</span>
        <div className="w-full border-b-2 border-white scale-x-0 group-hover:scale-x-100 transition-transform"/>
    </a>
}

export const Header = ({hideLogo}: { hideLogo?: boolean}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="flex text-white h-full w-full items-center px-4 justify-between gap-1">
            {!hideLogo && <div className="grow w-full">
                <a href="/" className="whitespace-nowrap font-artistic flex border-2 rounded p-2 w-fit flex-col items-center justify-center">
                    <span className="text-3xl">Kamil Kędzior</span>
                    <span className="text-sm">Psychoterapia Gestalt</span>
                </a>
            </div>}
            <div className="w-full hidden lg:flex gap-4 justify-center whitespace-nowrap">
                <ul className="flex font-[300] font-primary text-sm gap-6 px-4 text-center">
                    <li><NavLink href="/o-mnie/" label="O mnie"/></li>
                    <li><NavLink href="/o-gestalt/" label="Moje podejście"/></li>
                    <li><NavLink href="/oferta/" label="Oferta"/></li>
                    <li><NavLink href="/kontakt/" label="Kontakt"/></li>
                </ul>
            </div>
            <div className="grow-[1] h-full w-full" />
            <HamburgerButton className="lg:hidden" onPress={() => setIsMenuOpen(true)} />
            <div className={`fixed z-20 top-0 left-0 p-8 h-screen w-full bg-primary-800 text-white transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="w-full flex justify-end">
                    <ExitButton onPress={() => setIsMenuOpen(false)} />
                </div>
                <ul className="flex flex-col font-primary items-start justify-start h-full gap-6 ">
                    <li><NavLink href="/o-mnie/" label="O mnie"/></li>
                    <li><NavLink href="/o-gestalt/" label="Moje podejście"/></li>
                    <li><NavLink href="/oferta/" label="Oferta"/></li>
                    <li><NavLink href="/kontakt/" label="Kontakt"/></li>
                </ul>
            </div>
        </nav>
    )
}