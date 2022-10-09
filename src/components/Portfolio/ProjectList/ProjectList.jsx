import React from 'react';
import Project from '../Project/Project';
import {Link} from 'react-router-dom';

// Projects data
import {projectsData} from '../../../data/projects-data';

const ProjectList = ({ project }) => {

    return (
            <div className="w-full mt-20 xs:mt-20 sm:mt-20 md:mt-20 lg:mt-40 xl:mt-40 2xl:mt-40">
                <div className="gap-y-10 gap-x-6 xl:gap-x-8
                grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                    {projectsData && projectsData.map((project) => (
                        <Link key={project.id} to={`/project/${project.id}`}> 
                            <Project project={project} />
                            {/* <p className='text-md font-light text-zinc-600 mt-3 mb-10'>{project.title}</p> */}
                        </Link>
                    ))}
                </div>
            </div>
    );
};

export default ProjectList;