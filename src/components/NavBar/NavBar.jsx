import React, { Fragment, useContext } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';

const navigation = {
    pages: [
        { name: 'Work', href: '/work', icon:'', target:'_self' },
        { name: 'Info', href: '/info', icon:'', target:'_self' },
    ],
}

const NavBar = () => {

    const { open, setOpen} = useContext(NavBarContext);

    return (
            <>
                {/* Mobile menu */}
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden xl:hidden" onClose={setOpen}>
                        <Transition.Child as={Fragment} >
                            <Dialog.Overlay className="fixed inset-0 bg-white dark:bg-black" />
                        </Transition.Child>
                        <Transition.Child as={Fragment} 
                        enter="transition ease-in-out duration-400 transform" 
                        enterFrom="-translate-x-full" enterTo="translate-x-0" 
                        leave="transition ease-in-out duration-300 transform" 
                        leaveFrom="translate-x-0" leaveTo="-translate-x-full">
                            <div className="relative w-full bg-white dark:bg-black shadow-xl p-5 flex flex-col overflow-y-auto">
                                <div className="pt-5 pb-10 flex justify-start">
                                    <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-black dark:text-white" onClick={() => setOpen(false)}>
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="text-center flex flex-col content-center space-y-10 align-middle inline-block m-auto">
                                    {navigation.pages.map((page) => (
                                        page.external !== 1
                                            ?   <div key={page.name} >
                                                    <Link to={page.href} className="block text-black dark:text-white text-3xl xs:text-3xl sm:text-2xl lg:text-3xl" onClick={() => setOpen(false)}> 
                                                        {page.name}
                                                    </Link>
                                                </div>
                                                
                                            :   <div key={page.name}>
                                                    <a href={"https://" + page.href} className="block text-black dark:text-white text-3xl xs:text-3xl sm:text-2xl lg:text-3xl" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                                                        {page.name}
                                                    </a>
                                                </div>
                                    ))}
                                    <ThemeToggle toggleWidth={20}/>
                                </div>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>

                {/* Desktop menu */}
                <header className="h-[3.5vh] left-0 right-0 z-40 text-sm 
                pb-0 xs:pb-14 sm:pb-14 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0
                border-b border-black dark:border-white">
                    <nav aria-label="Top" className="mx-auto py-2 px-5">
                        <div className="h-auto flex justify-between">
                            <div className="hidden lg:flex lg:block lg:self-stretch flex justify-between space-x-8">
                                <Link to='/' className="uppercase text-black dark:text-white border-b border-transparent hover:border-solid hover:border-b hover:border-white" onClick={() => setOpen(false)}> 
                                    Ivana Braz
                                </Link>
                            </div>
                            <div className="hidden lg:flex lg:block lg:self-stretch flex justify-between space-x-24">
                                {navigation.pages.map((page) => (
                                    page.external !== 1
                                        ?   <div key={page.name} >
                                                <Link to={page.href} className="text-black dark:text-white border-b border-transparent hover:border-solid hover:border-b hover:border-black dark:hover:border-white " onClick={() => setOpen(false)}> 
                                                    {page.name}
                                                </Link>
                                            </div>
                                            
                                        :   <div key={page.name}>
                                                <a href={"https://" + page.href} className="text-black dark:text-white border-b border-transparent hover:border-solid hover:border-b hover:border-white" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                                                    {page.name}
                                                </a>
                                            </div>
                                ))}
                                <ThemeToggle toggleCustomClass={'hidden lg:flex lg:self-stretch '} toggleWidth={4}/>
                            </div>
                            <button type="button" className="flex bg-transparent p-2 rounded-md text-black dark:text-white lg:hidden" onClick={() => setOpen(true)}>
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