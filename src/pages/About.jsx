import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { v4 as uuidv4 } from 'uuid';

const about = {
    title:'About',
    text: [
        { name: "Ivana Agustina Braz (Buenos Aires, Argentina, 1992)"},
        { name: "Buenos Aires based multidisciplinary senior designer & junior front-end dev. With a passion for crafting experiences through a wide scope of disciplines. From graphic design, motion graphics to UX/UI and web development. Aiming to add everlasting value and to challenge boundaries."},
        { name: "First studied photography at Universidad de Palermo and then went on to study Graphic Design. Currently specialising in UX / UI and also web programming."},
    ],
}

const disciplines = {
    title:'Disciplines / Skills',
    list: [
        { name: 'Concept design'},
        { name: 'Naming'},
        { name: 'Brand identity'},
        { name: 'UX/UI design'},
        { name: 'Motion graphics'},
        { name: 'Web development'},
        { name: 'HTML, CSS'},
        { name: 'JavaScript, ReactJS'},
        { name: 'Bootstrap, Tailwind'},
    ],
}
const contact = {
    title:'Contact / Links',
    list: [
        {
            name: 'Linkedin',
            external: 1, 
            href: 'linkedin.com/in/ivanabraz/',
        },
        {
            name: 'GitHub',
            external: 1, 
            href: 'github.com/ivanabraz',
        },
        {
            name: 'Behance',
            external: 1, 
            href: 'behance.net/ivanabraz',
        },
    ],
}

const About = () => {
    return (
        <>
            <div className="pt-10 flex text-md text-black dark:text-neutral-100 bg-white dark:bg-black">
                <div className='grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-4'>
                    {/* About */}
                    <div className='px-5 leading-normal mb-10 col-span-2 pr-14'>
                        <p className='pb-5 font-bold'>
                            {about.title}
                        </p>
                        {about.text.map((item) => (
                            <p key={uuidv4()} className='pb-2'>
                                {item.name}
                            </p>
                        ))}
                    </div>

                    {/* Disciplines */}
                    <div className='px-5 leading-normal mb-10'>
                        <p className='pb-5 font-bold'>
                            {disciplines.title}
                        </p>
                        {disciplines.list.map((discipline) => (
                            <p key={uuidv4()}>
                                {discipline.name}
                            </p>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className='px-5 leading-normal mb-10'>
                        <p className='pb-5 font-bold'>
                            {contact.title}
                        </p>
                        {contact.list.map((item) => (
                            <a key={uuidv4()} href={"https://" + item.href} 
                            className="w-fit
                            border-solid border-b border-neutral-100
                            hover:border-neutral-600 transition ease-in-out
                            dark:border-solid dark:border-b dark:border-neutral-900
                            flex flex-col" 
                            target="_blank" rel="noopener noreferrer">
                                {item.name}
                            </a>
                        ))}

                        {/* Resume */}
                        <a href={"https://drive.google.com/file/d/1A4_celGIW7vZVAkmJn7mX-mDEC0z-KHs/"} 
                            className="flex pt-10 w-fit font-bold 
                            border-b border-transparent 
                            hover:border-solid hover:border-b hover:border-neutral-100
                            transition ease-in-out" 
                            target="_blank" rel="noopener noreferrer">
                            Download resume <ArrowDownTrayIcon className="h-4 self-center" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;