import React from 'react';

const Project = ({ project }) => {
    const firstMedia = project.images && project.images.length > 0 ? project.images[0] : null;

    const imagePath = firstMedia
        ? `${process.env.PUBLIC_URL}/images/projects/${project.id}/${firstMedia.imgUrl}`
        : null;

    return (
        <>
        <div className="w-100 mb-1 relative group overflow-hidden text-black dark:text-neutral-100">
            {firstMedia && firstMedia.type === 'image' ? (
            <img
                src={imagePath}
                alt={project.title}
                className="h-100 bg-white dark:bg-black"
            />
            ) : firstMedia && firstMedia.type === 'video' ? (
            <video autoPlay loop muted className="h-100 bg-white dark:bg-black" width="100%">
                <source src={imagePath} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            ) : null}
            <p className='text-sm pt-1 flex justify-between'>
            {project.title}
            </p>
        </div>
        </>
    );
}

export default Project;
