import React from 'react';
import Project from '../Project/Project';
import {Link} from 'react-router-dom';
// import {useParams} from 'react-router-dom';

// Pojects data
import {projectsData} from '../../../data/projects-data';

const ProjectList = ({project}) => {

    // const {id} = useParams();

    return (
            <div className="w-full mt-20 xs:mt-20 sm:mt-20 md:mt-20 lg:mt-40">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {projectsData && projectsData.map((project) => (
                        <Link key={project.id} className="nav-link" to={`/details/${project.id}`}> 
                            <Project project={project} />
                        </Link>
                    ))}
                </div>
            </div>
    );
};

export default ProjectList;