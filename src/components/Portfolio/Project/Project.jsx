import React from 'react';

const Project = ({project}) =>{
    return (
        <>
            <img src={project.imageThumb} alt={project.title} className="w-full h-full object-center object-cover group-hover:opacity-75"/>
        </>
    )
}

export default Project;