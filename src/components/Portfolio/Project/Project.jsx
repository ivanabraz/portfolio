import React from 'react';

const Project = ({project}) =>{
    return (
        <>
        <div class="w-100 relative group overflow-hidden">
            <img src={project.imageThumb} alt={project.title} className="h-100 transition ease-in-out duration-[500ms] group-hover:opacity-20"/>
            <div class="opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-0 top-0 right-0 z-10 flex flex-col justify-center items-center text-2xl text-black dark:text-white">
                <p>
                    {project.title}
                </p>
                <button key={project.linkName} href={project.linkUrl} className='bg-transparent text-sm text-black dark:text-white mt-3' target="_self" rel="noopener noreferrer">
                    See project
                </button>
            </div>
        </div>
        </>
    )
}

export default Project;