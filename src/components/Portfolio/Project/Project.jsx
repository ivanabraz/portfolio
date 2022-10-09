import React from 'react';

//IMAGES
import ArrowRight from '../../../images/arrows/arrow-right.svg';

const Project = ({project}) =>{
    return (
        <>
        <div class="w-100 relative group">
            <img src={project.imageThumb} alt={project.title} className="w-full h-full object-center object-cover transition ease-in-out duration-[500ms] group-hover:opacity-20"/>
            <div class="opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-0 top-0 right-0 z-10 flex flex-col justify-center items-center text-2xl text-white">
                <p>
                    {project.title}
                </p>
                <button key={project.linkName} href={project.linkUrl} className='bg-transparent text-sm text-zinc-400 mt-3' target="_self" rel="noopener noreferrer">
                    See project <img src={ArrowRight} className="h-3 w-auto inline" alt="arrow"/>
                </button>
            </div>
        </div>
        </>
    )
}

export default Project;