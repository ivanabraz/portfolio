import React from 'react';
<<<<<<< HEAD:src/pages/Info.jsx
// import Ivana from '../images/misc/ivana.jpg';

const about = {
    title:'About me',
    text: "Hello there! I'm Ivana Braz a senior multidisciplinary designer based in Buenos Aires, Argentina. With a passion for crafting experiences through a wide scope of disciplines. From graphic design, motion graphics, experimental 3D modeling to UX/UI and web development. Aiming to add everlasting value and to challenge boundaries.",
}
const whatUpTo = {
    title:"What I'm up to",
    list: [
        { name: 'Working as a graphic designer in the communication bureau at Teatro Colón. '},
        { name: 'Enrolled in UI / UX Design Specialization at California Institute of the Arts. '},
    ],
}
=======

>>>>>>> newdesign:src/pages/About.jsx
const disciplines = {
    title:'Disciplines / Skills',
    list: [
        { name: 'Concept development'},
        { name: 'Visual identity'},
        { name: 'Motion graphics'},
        { name: 'Photo retouching'},
        { name: 'User experience'},
        { name: 'User interface'},
        { name: 'Web programming'},
        { name: 'HTML, CSS'},
        { name: 'JavaScript, ReactJS'},
        { name: 'Bootstrap, Tailwind'},
    ],
}
const contact = {
    title:'Contact / Links',
    list: [
        {
            name: 'Email',
            external: 1, 
            href: 'mailto:braz.ivana@gmail.com',
        },
        {
            name: 'Linkedin',
            external: 1, 
            href: 'linkedin.com/in/ivanabraz/',
        },
        {
            name: 'Github',
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
<<<<<<< HEAD:src/pages/Info.jsx
const Info = () => {
=======

const About = () => {
>>>>>>> newdesign:src/pages/About.jsx
    return (
        <>
            <div className="pt-10 flex text-sm text-black dark:text-white">
                <div className='grid grid-cols-3 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                    <div className='px-5 leading-normal'>
                        {/* About */}
                        <p className='pb-5 font-bold'>
                            {about.title}
                        </p>
                        {about.text}
                        
                        {/* What I'm up to */}
                        <p className='py-5 pt-10 font-bold'>
                            {whatUpTo.title}
                        </p>
                        {whatUpTo.list.map((item) => (
                            <p key={item.name} className="inline">
                                {item.name}
                            </p>
                        ))}
                    </div>

                    {/* Disciplines */}
                    <div className='px-5 leading-normal'>
                        <p className='pb-5 font-bold'>
                            {disciplines.title}
                        </p>
                        {disciplines.list.map((discipline) => (
                            <p key={discipline.name}>
                                {discipline.name}
                            </p>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className='px-5 leading-normal pt-0 xs:pt-10 sm:pt-10 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0'>
                        <p className='pb-5 font-bold'>
                            {contact.title}
                        </p>
                        {contact.list.map((item) => (
                            <a key={item.name} href={"https://" + item.href} 
                            className="text-black dark:text-white w-fit
                            border-b border-transparent 
                            hover:border-solid hover:border-b hover:border-black dark:hover:border-white 
                            flex flex-col" 
                            target="_blank" rel="noopener noreferrer">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="grid grid-cols-3 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2
            pt-10 h-auto xs:h-auto md:h-screen flex text-black dark:text-white text-sm">
                <img alt="Ivana" src={Ivana} className="w-full h-auto px-5" />
            </div> */}
        </>
    );
}

export default About;