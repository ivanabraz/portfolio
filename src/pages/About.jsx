import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

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
title: 'Disciplines / Skills',
list: [
    { name: 'Concept design' },
    { name: 'Naming' },
    { name: 'Brand identity' },
    { name: 'Motion graphics' },
    { name: 'Web development' },
    { name: 'HTML, CSS' },
    { name: 'JavaScript, ReactJS' },
    { name: 'Bootstrap, Tailwind' },
],
};

const contact = {
title: 'Contact / Links',
list: [
    { name: 'LinkedIn', external: 1, href: 'https://linkedin.com/in/ivanabraz/' },
    { name: 'GitHub', external: 1, href: 'https://github.com/ivanabraz' },
    { name: 'Behance', external: 1, href: 'https://behance.net/ivanabraz' },
    { name: 'P05', external: 1, href: 'https://instagram.com/piso.05' },
],
};

const About = () => {
return (
    <div className="pt-10 flex">
    <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-y-10">
        {/* About */}
        <section className="px-5 leading-normal md:col-span-2 md:pr-14">
        <p className="pb-5 font-bold">{about.title}</p>
        {about.text.map((item) => (
            <p key={item.name} className="pb-2">
            {item.name}
            </p>
        ))}
        </section>

        {/* Disciplines */}
        <section className="px-5 leading-normal">
        <p className="pb-5 font-bold">{disciplines.title}</p>
        {disciplines.list.map((d) => (
            <p key={d.name}>{d.name}</p>
        ))}
        </section>

        {/* Contact */}
        <section className="px-5 leading-normal">
        <p className="pb-5 font-bold">{contact.title}</p>

        <div className="flex flex-col gap-1">
            {contact.list.map((item) => (
            <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit border-b border-transparent
                        hover:border-neutral-800 dark:hover:border-neutral-200
                        transition-colors duration-700
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                        focus-visible:ring-neutral-800 dark:focus-visible:ring-neutral-200
                        focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
            >
                {item.name}
            </a>
            ))}
        </div>

        {/* Resume */}
        <a
            href="https://drive.google.com/file/d/1A4_celGIW7vZVAkmJn7mX-mDEC0z-KHs/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 pt-10 w-fit font-bold border-b border-transparent
                    hover:border-neutral-800 dark:hover:border-neutral-200
                    transition-colors duration-700
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                    focus-visible:ring-neutral-800 dark:focus-visible:ring-neutral-200
                    focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
        >
            Download resume <ArrowDownTrayIcon className="h-4 self-center" />
        </a>
        </section>
    </div>
    </div>
);
};

export default About;
