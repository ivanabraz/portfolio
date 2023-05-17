import React from 'react';

const Project = ({project}) =>{
    return (
        <>
        <div className="w-100 relative group overflow-hidden text-neutral-100">
            <img src={project.imageThumb} alt={project.title} 
            className="h-100 bg-black"
            />
            <p className='text-sm pt-1'>
                {project.title}
            </p>
        </div>
        </>
    )
}

export default Project;