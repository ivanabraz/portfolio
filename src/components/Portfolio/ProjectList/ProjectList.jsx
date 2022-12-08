import React from 'react';
import Project from '../Project/Project';
import {Link} from 'react-router-dom';

// Projects data
import {projectsData} from '../../../data/projects-data';

const ProjectList = ({ project }) => {

    return (
            <div className="py-40 px-10">
                <div className="gap-y-10 gap-x-6 xl:gap-x-8
                grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                    {projectsData && projectsData.map((project) => (
                        <Link key={project.id} to={`/project/${project.id}`}> 
                            <Project project={project} />
                        </Link>
                    ))}
                </div>
            </div>
    );
};

export default ProjectList;