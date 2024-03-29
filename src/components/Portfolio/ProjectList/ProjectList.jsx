import React from 'react';
import Project from '../Project/Project';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import projectsData from '../../../data/projects-data.json';

const ProjectList = () => {
    return (
        <div className="pt-10 px-5 gap-y-2 gap-x-2 bg-white dark:bg-black
        grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            {projectsData.map((project) => (
                <Link key={uuidv4()} to={`/project/${project.id}`}>
                    <Project project={project} />
                </Link>
            ))}
        </div>
    );
};

export default ProjectList;
