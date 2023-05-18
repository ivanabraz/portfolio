import React from 'react';

const Project = ({project}) =>{
    return (
        <>
        <div className="w-100 mb-5 relative group overflow-hidden text-black dark:text-neutral-100">
            <img src={project.imageThumb} alt={project.title} 
            className="h-100 bg-white dark:bg-black"
            />
            <p className='text-lg pt-1 flex justify-between'>
                <p>{project.title}</p>
                {/* <p className='text-neutral-500'>{project.categories}</p>
                <p className='text-neutral-500'>{project.year}</p> */}
            </p>
        </div>
        </>
    )
}

export default Project;