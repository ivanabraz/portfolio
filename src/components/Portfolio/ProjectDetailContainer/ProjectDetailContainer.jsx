import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import projectsData from '../../../data/projects-data.json';

const ProjectDetailContainer = () => {
    const [project, setProject] = useState(null); 
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const selectedProject = projectsData.find((project) => project.id === id);
            setProject(selectedProject);
        }
    }, [id]);

    return (
        <Fragment>
            {project && <ProjectDetail {...project} />}
        </Fragment>
    );
};

export default ProjectDetailContainer;
