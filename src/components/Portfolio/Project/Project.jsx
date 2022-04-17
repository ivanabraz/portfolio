import React from 'react';

const Project = ({project}) =>{
    return (
        <>
            <img src={project.image} alt={project.title} className="blur-sm w-full h-full object-center object-cover group-hover:opacity-75"/>

            {/* <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={project.image} alt={project.title} className="w-full h-full object-center object-cover group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-lg text-gray-700">{project.title}</h3> */}
        </>
    )
}

export default Project;