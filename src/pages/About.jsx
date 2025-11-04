import React from 'react';
import { ArrowDownTrayIcon, ArrowUpRightIcon } from '@heroicons/react/20/solid';

const about = {
title: 'About',
text: [
    {
    name:
        "Visual designer & front-end dev based in Buenos Aires. With a passion for crafting experiences through a wide scope of disciplines. From graphic design, motion graphics to UX/UI and web development. Aiming to add everlasting value and to challenge boundaries.",
    },
    {
    name:
        "First studied photography at Universidad de Palermo and then went on to study Graphic Design. Currently diving into databases and SQL to expand my understanding of how things work behind the surface. I also run P05, a personal space where I share my passion for design.",
    },
],
};

const disciplines = {
title: 'Skills',
list: [
    { name: 'Concept design' },
    { name: 'Naming' },
    { name: 'Brand identity' },
    { name: 'Motion graphics' },
    { name: 'Web development' },
    { name: 'HTML, CSS' },
    { name: 'JavaScript, ReactJS' },
    { name: 'Tailwind' },
],
};

const contact = {
title: 'Links',
list: [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ivanabraz/' },
    { name: 'GitHub', href: 'https://github.com/ivanabraz' },
    { name: 'Behance', href: 'https://behance.net/ivanabraz' },
    { name: 'P05', href: 'https://instagram.com/piso.05' },
],
};

const About = () => {
return (
    <div className="w-full flex flex-col pt-10 pb-10 px-2 sm:px-5 border-t border-neutral-500 bg-white dark:bg-black">
    <div className="grid grid-cols-1 md:grid-cols-5 w-full gap-y-10 text-black dark:text-neutral-100 leading-normal text-sm xs:text-sm sm:text-sm md:text-md lg:text-xl">
        
        {/* About */}
        <section className="px-5 md:col-span-2 md:pr-14">
        <p className="pb-5 text-neutral-500">{about.title}</p>
        {about.text.map((item) => (
            <p key={item.name} className="pb-2">
            {item.name}
            </p>
        ))}
        </section>

        {/* Disciplines */}
        <section className="px-5">
        <p className="pb-5 text-neutral-500">{disciplines.title}</p>
        {disciplines.list.map((d) => (
            <p key={d.name} className="text-black dark:text-white">
            {d.name}
            </p>
        ))}
        </section>

        {/* Contact */}
        <section className="px-5">
        <p className="pb-5 text-neutral-500">{contact.title}</p>

        <div className="flex flex-col gap-1">
            {contact.list.map((item) => (
            <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center border-b border-transparent hover:border-current w-fit mr-3
                        text-neutral-black dark:text-white
                        transition-colors duration-700
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                        focus-visible:ring-neutral-800 dark:focus-visible:ring-neutral-200
                        focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
            >
                {item.name}
                <ArrowUpRightIcon className="h-4 xs:h-4 sm:h-4 md:h-5 lg:h-6 w-4 xs:w-4 sm:w-4 md:w-5 lg:w-6 self-end ml-1" />
            </a>
            ))}
        </div>

        {/* Resume */}
        <a
            href="https://drive.google.com/file/d/1A4_celGIW7vZVAkmJn7mX-mDEC0z-KHs/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 pt-10 w-fit border-b border-transparent hover:border-current
                    text-neutral-600 dark:text-neutral-500
                    transition-colors duration-700
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                    focus-visible:ring-neutral-800 dark:focus-visible:ring-neutral-200
                    focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
        >
            Download resume <ArrowDownTrayIcon className="h-4 xs:h-4 sm:h-4 md:h-5 lg:h-6 w-4 xs:w-4 sm:w-4 md:w-5 lg:w-6 self-end ml-1" />
        </a>
        </section>
    </div>
    </div>
);
};

export default About;
