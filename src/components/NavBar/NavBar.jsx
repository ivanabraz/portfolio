import React from "react";
import { Link } from 'react-router-dom';
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navigation = {
    pages: [
        { name: 'Ivana Braz', href: '/', icon:'', target:'_self' },
        { name: 'Projects', href: '/projects', icon:'', target:'_self' },
        { name: 'About', href: '/about', icon:'', target:'_self' },
        // { name: 'Linkedin', external: 1, href: 'linkedin.com/in/ivanabraz/'},
        // { name: 'Github', external: 1, href: 'github.com/ivanabraz'},
    ],
}

const NavBar = () => {
    return (
        <>
        <nav className="w-full z-40 border-b border-neutral-500 text-black dark:text-neutral-100 bg-white dark:bg-black">
            <div className="flex flex row flex justify-between px-5 py-2">
                {navigation.pages.map((page) => (
                    page.external !== 1
                        ?   <div key={page.name} className="self-center">
                                <Link to={page.href} className="flex items-center transition-all duration-700 ease-in-out border-b border-transparent hover:border-solid hover:border-b hover:border-black dark:hover:border-neutral-100"> 
                                    {page.name}
                                </Link>
                            </div>
                            
                        :   <div key={page.name} className="self-center">
                                <a href={"https://" + page.href} className="flex items-center transition-all duration-700 ease-in-out border-b border-transparent hover:border-solid hover:border-b hover:border-black dark:hover:border-neutral-100" target="_blank" rel="noopener noreferrer">
                                    {page.name}
                                </a>
                            </div>
                ))}
                <ThemeToggle toggleWidth={4}/>
            </div>
        </nav>
        </>
    )
}

export default NavBar;