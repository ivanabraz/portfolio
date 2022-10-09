import React, { Fragment, useContext } from "react";
import { Dialog, Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from "../Logo/Logo";

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';

const navigation = {
    pages: [
        { name: 'Work', href: '/', icon:'', target:'_self' },
        { name: 'Info', href: '/info', icon:'', target:'_self' },
        { name: 'Linkedin', href: 'linkedin.com/in/ivanabraz/', icon: <FontAwesomeIcon icon={faLinkedin} />},
        { name: 'Github', href: 'github.com/ivanabraz', icon: <FontAwesomeIcon icon={faGithub} />},
    ],
    languages: [
        { name: 'EN', href: '/' },
        { name: 'ES', href: '/' },
        { name: 'PT', href: '/' },
    ],
}

const NavBar = () => {

    const { open, setOpen} = useContext(NavBarContext);

    return (
            <>
                {/* Mobile menu */}
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                        <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0" >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>
                        <Transition.Child as={Fragment} enter="transition ease-in-out duration-400 transform" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                            <div className="relative w-full bg-black shadow-xl p-5 flex flex-col overflow-y-auto">
                                <div className="pt-5 pb-10 flex justify-end">
                                    <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-zinc-400" onClick={() => setOpen(false)}>
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="text-center">
                                        {navigation.pages.map((page) => (
                                            page.icon.length === 0 
                                                ?   <div key={page.name} className="flow-root my-20">
                                                        <Link to={page.href} className="block text-zinc-400 text-3xl xs:text-3xl sm:text-2xl lg:text-3xl" onClick={() => setOpen(false)}> 
                                                            {page.name}
                                                        </Link>
                                                    </div>
                                                    
                                                :   <div key={page.name} className="flow-root my-20">
                                                        <a href={"https://" + page.href} className="block text-zinc-400 text-3xl xs:text-3xl sm:text-2xl lg:text-3xl" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                                                            {page.icon}
                                                        </a>
                                                    </div>
                                        ))}
                                </div>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>
    
                <header className="left-0 right-0 z-40 p-5 sm:p-6 lg:p-10">
                    <nav aria-label="Top" className="mx-auto">
                        <div className="h-16 flex justify-between items-center">
                            {/* Flyout menus */}
                            <div className="hidden lg:flex hidden lg:block lg:self-stretch">
                                <Popover.Group className="hidden lg:block lg:self-stretch">
                                    <div className="h-full flex space-x-8">
                                        {navigation.pages.map((page) => (
                                            page.icon.length === 0 
                                                ?   <div key={page.name} className="flow-root">
                                                        <Link to={page.href} className="flex items-center text-zinc-400 hover:text-white border-b border-transparent transition duration-[1000ms] hover:border-solid hover:border-b hover:border-zinc-600" > 
                                                            {page.name}
                                                        </Link>
                                                    </div>
                                                    
                                                :   <div key={page.name} className="flow-root">
                                                        <a href={"https://" + page.href} className="flex items-center text-zinc-400 transition duration-[1000ms] hover:text-white" target="_blank" rel="noopener noreferrer">
                                                            {page.icon}
                                                        </a>
                                                    </div>
                                        ))}
                                    </div>
                                </Popover.Group>
                            </div>
                            {/* Logo */}
                            <Link to="/">
                                <Logo/>
                            </Link>
                            <button type="button" className="flex bg-transparent p-2 rounded-md text-white lg:hidden" onClick={() => setOpen(true)}>
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </nav>
                </header>
        </>
    )
}

export default NavBar;