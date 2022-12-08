import React from 'react';

const contact = {

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
        { name: 'Enrolled in UI / UX Design Specialization at California Institute of the Arts'},
    ],
}

const Info = () => {
    return (
        <div className="w-screen h-screen flex items-center
        text-black dark:text-white">
            <div className='grid grid-flow-row-dense grid-cols-8 xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-8 lg:grid-cols-8'>
                <div className='p-5 sm:p-6 lg:p-10 
                leading-normal text-3xl xs:text-2xl md:text-3xl
                col-span-3 xs:col-span-8 sm:col-span-8 md:col-span-8 lg:col-span-3'>
                    <p>
                        I'm Ivana Braz a multidisciplinary designer with a passion for crafting experiences through a wide scope of disciplines. 
                        From graphic design, motion graphics, experimental 3D modeling to UX/UI and web development. Aiming to add everlasting value and to challenge boundaries.
                    </p>
                </div>
                <div className='p-5 sm:p-6 lg:p-10
                leading-normal text-3xl
                col-span-2 xs:col-span-8 sm:col-span-8 md:col-span-8 lg:col-span-2'>
                    {/* Disciplines */}
                    <p className='text-lg font-bold'>
                        Disciplines / Skills
                    </p>
                    {disciplines.disciplinesList.map((discipline) => (
                        <p key={discipline.name} className="text-lg">
                            {discipline.name}
                        </p>
                    ))}
                    {/* What I'm up to */}
                    <p className='text-lg mt-10 font-bold'>
                        What I'm up to
                    </p>
                    {whatUpTo.whatUpToList.map((whatUpToItem) => (
                        <p key={whatUpToItem.name} className="text-lg">
                            {whatUpToItem.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Info;