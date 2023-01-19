import React from 'react';
import Project from '../Project/Project';
import {Link} from 'react-router-dom';

// Projects data
import {projectsData} from '../../../data/projects-data';

const ProjectList = ({ project }) => {

    return (
        <div className="py-2 px-5 gap-y-2 gap-x-2 xl:gap-x-2
        grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            {projectsData && projectsData.map((project) => (
                <Link key={project.id} to={`/project/${project.id}`}> 
                    <Project project={project} />
                </Link>
            ))}
        </div>
    );
};

export default ProjectList;