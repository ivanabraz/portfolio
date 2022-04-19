import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';import ProjectDetail from '../ProjectDetail/ProjectDetail';

// Projects data
import {projectsData} from '../../../data/projects-data';

const ProjectDetailContainer = () => {

    const [project, setProject] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProjects = new Promise((resolve) => {
            setTimeout(() => {
                resolve(projectsData);
            }, 0);
        });

        getProjects.then((result) => {
            id  && setProject(result.find((project) => project.id === id));
        })
    }, [id]);

    return (
        <Fragment>
            <ProjectDetail {...project}/>
        </Fragment>
    );
};

export default ProjectDetailContainer;