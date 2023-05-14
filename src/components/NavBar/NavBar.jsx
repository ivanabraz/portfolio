import React from "react";
import { Link } from 'react-router-dom';

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
        <nav className="absolute w-full top-0 left-0 right-0 z-40 border-b border-white">
            <div className="flex flex row flex justify-between px-5 py-2">
                {navigation.pages.map((page) => (
                    page.external !== 1
                        ?   <div key={page.name} >
                                <Link to={page.href} className="flex items-center text-white transition-all	duration-700 ease-in-out border-b border-transparent hover:border-solid hover:border-b hover:border-white"> 
                                    {page.name}
                                </Link>
                            </div>
                            
                        :   <div key={page.name}>
                                <a href={"https://" + page.href} className="flex items-center text-white transition-all	duration-700 ease-in-out border-b border-transparent hover:border-solid hover:border-b hover:border-white" target="_blank" rel="noopener noreferrer">
                                    {page.name}
                                </a>
                            </div>
                ))}
            </div>
        </nav>
        </>
    )
}

export default NavBar;