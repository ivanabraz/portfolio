import React from 'react';
import Project from '../Project/Project';
import { Link } from 'react-router-dom';

import projectsData from '../../../data/projects-data.json';

const ProjectList = () => {
    console.log(projectsData); // Agrega esta línea para imprimir los datos en la consola

    return (
        <div className="pt-10 px-5 gap-y-2 gap-x-2 bg-white dark:bg-black
        grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            {projectsData.map((project) => (
                <Link key={project.id} to={`/project/${project.id}`}>
                    <Project project={project} />
                </Link>
            ))}
        </div>
    );
};

export default ProjectList;
