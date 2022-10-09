import React from 'react';
import { Link } from 'react-router-dom'

const contact = {
    contactPages: [
        { name: 'braz.ivana[at]gmail.com', href: 'mailto:braz.ivana@gmail.com'},
        { name: 'Linkedin', href: 'linkedin.com/in/ivanabraz/'},
        { name: 'Github', href: 'github.com/ivanabraz'},
    ],
}
const disciplines = {
    disciplinesList: [
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
const whatUpTo = {
    whatUpToList: [
        { name: 'Working as a graphic designer in the communication bureau at Teatro Colón'},
        { name: 'Enrolled in UI / UX Design Course at California Institute of the Arts'},
    ],
}

const Info = () => {
    return (
        <div className="p-8 sm:p-6 lg:p-10 mt-20 text-white
        grid grid-flow-row-dense grid-cols-5
        xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-5">
            <div className='col-span-2 md:pl-20 lg:pl-40'>
                {contact.contactPages.map((page) => (
                    <div key={page.name} className="mb-3 flow-root max-w-fit">
                        <Link to={page.href} className="flex text-lg border-b border-transparent transition duration-[1000ms] 
                        hover:border-solid hover:border-b hover:border-zinc-600"> 
                            {page.name}
                        </Link>
                    </div>
                ))}
            </div>
            <div className='col-span-2 xs:mt-20 sm:mt-20 md:mt-0
            leading-normal xs:leading-normal md:leading-normal lg:leading-normal 
            text-3xl'>
                <p>
                    I'm Ivana Braz a multidisciplinary designer with a passion for crafting experiences through a wide scope of disciplines. 
                    From graphic design, motion graphics, experimental 3D modeling to UX/UI and web development. Aiming to add everlasting value and to challenge boundaries.
                </p>
                {/* Disciplines */}
                <p className='text-lg mt-20 font-bold'>
                Disciplines / Skills
                </p>
                {disciplines.disciplinesList.map((discipline) => (
                    <p key={discipline.name} className="text-lg">
                        {discipline.name}
                    </p>
                ))}
                {/* What I'm up to */}
                <p className='text-lg mt-20 font-bold'>
                    What I'm up to
                </p>
                {whatUpTo.whatUpToList.map((whatUpToItem) => (
                    <p key={whatUpToItem.name} className="text-lg">
                        {whatUpToItem.name}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Info;