import {type HTMLAttributes, type ReactNode, useRef, useState} from "react";
import clsx from "clsx";
import {useButton} from 'react-aria';


const HamburgerButton = ({ className, ...restProps }: HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={clsx("rounded-full p-4 hover:bg-gray-200/30", className)} {...restProps}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
    )
}

const ExitButton = ({ className, onClick }: { className?: string, onClick?: () => void }) => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const { buttonProps } = useButton({
        onPress: () => {
            onClick?.();
        },
        },
        ref
    );
    return (
        <button className={clsx("rounded-full p-4 hover:bg-gray-200/30", className)} {...buttonProps}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
    )
}

const NavLink = ({href, label}: { href: string, label: string }) => {
    return <a href={href ? href : '#'} className="group flex flex-col">
        <span>{label}</span>
        <div className="w-full border-b-2 border-white scale-x-0 group-hover:scale-x-100 transition-transform"/>
    </a>
}

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref = useRef<HTMLButtonElement | null>(null);
    const { buttonProps } = useButton({
        onPress: () => {
            setIsMenuOpen((prev) => !prev);
        }},
        ref
    );
    return (
        <nav className="flex bg-gray-700 text-white h-full items-center px-4 justify-between gap-1">
            <div className="grow">
                <a href="/" className="whitespace-nowrap text-4xl">Kamil Kędzior</a>
            </div>
            <div className="grow-[3] hidden xl:flex justify-center">
                <ul className="flex uppercase gap-6">
                    <li><NavLink href="/o-mnie/" label="O mnie"/></li>
                    <li><NavLink href="/o-gestalt/" label="Gestalt - czym jest?"/></li>
                    <li>Komu pomagam</li>
                    <li><NavLink href="/oferta/" label="Oferuję"/></li>
                    <li>Kontakt</li>
                </ul>
            </div>
            <div className="grow hidden sm:flex justify-end">
                <button
                    className="uppercase bg-transparent text-white border-2 border-white px-4 py-4 rounded-xl whitespace-nowrap"
                >
                    Zarezerwuj termin
                </button>
            </div>
            <HamburgerButton className="xl:hidden" {...buttonProps} />
            <div className={`fixed top-0 left-0 p-8 h-full w-full bg-gray-700 text-white transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="w-full flex justify-end">
                    <ExitButton onClick={() => setIsMenuOpen(false)} />
                </div>
                <ul className="flex flex-col items-start justify-start h-full gap-6 uppercase">
                    <li><NavLink href="/o-mnie/" label="O mnie"/></li>
                    <li><NavLink href="/o-gestalt/" label="Gestalt - czym jest?"/></li>
                    <li>Komu pomagam</li>
                    <li><NavLink href="/oferta/" label="Oferuję"/></li>
                    <li>Kontakt</li>
                    <li>
                        <button>Zarezerwuj termin</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}