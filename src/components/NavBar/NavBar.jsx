import React from "react";
import { Link } from 'react-router-dom';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { v4 as uuidv4 } from 'uuid';

const navigation = {
    pages: [
        { name: 'Ivana Braz', href: '/', icon:'', target:'_self' },
        { name: 'Projects', href: '/projects', icon:'', target:'_self' },
        { name: 'About', href: '/about', icon:'', target:'_self' },
    ],
}

const NavBar = () => {
    return (
        <>
        <nav className="w-full z-40 border-b border-neutral-500 text-black dark:text-neutral-100 bg-white dark:bg-black">
            <div className="flex flex row flex justify-between px-5 py-2">
                {navigation.pages.map((page) => (
                    <div key={uuidv4()} className="self-center">
                        {page.external !== 1 ? (
                            <Link to={page.href} className="flex items-center transition-all duration-700 ease-in-out border-b border-transparent hover:border-solid hover:border-b hover:border-black dark:hover:border-neutral-100"> 
                                {page.name}
                            </Link>
                        ) : (
                            <a href={"https://" + page.href} className="flex items-center transition-all duration-700 ease-in-out border-b border-transparent hover:border-solid hover:border-b hover:border-black dark:hover:border-neutral-100" target="_blank" rel="noopener noreferrer">
                                {page.name}
                            </a>
                        )}
                    </div>
                ))}
                <ThemeToggle toggleWidth={4}/>
            </div>
        </nav>
        </>
    )
}

export default NavBar;
