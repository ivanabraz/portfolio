import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Project = ({ project }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesOnly = project.images ? project.images.filter(media => media.type === 'image') : [];
    const allMedia = project.images || [];
    const mediaToShow = project.autoSlide ? imagesOnly : allMedia;
    const currentMedia = mediaToShow.length > 0 ? mediaToShow[currentIndex] : null;
    const imagePath = currentMedia
        ? `/images/projects/${project.id}/${currentMedia.imgUrl}`
        : null;

    useEffect(() => {
        if (project.autoSlide && imagesOnly.length > 1) {
            const intervalId = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % imagesOnly.length);
            }, 350);

            return () => clearInterval(intervalId);
        }
    }, [project.autoSlide, imagesOnly.length]);

    return (
        <>
            <div className="w-100 mb-3 relative group overflow-hidden text-black dark:text-neutral-100">
                {currentMedia && currentMedia.type === 'nested' ? (
                    <div className="relative w-full aspect-[1920/990] overflow-hidden grid grid-cols-2">
                        {currentMedia.nestedImages.map((nestedMedia) => (
                            <div key={uuidv4()} className="relative w-full h-full">
                                <img className="object-cover w-full h-full" src={`/images/projects/${project.id}/${nestedMedia.imgUrl}`} alt={nestedMedia.imgAlt || project.title} loading="lazy" />
                            </div>
                        ))}
                    </div>

                ) : currentMedia && currentMedia.type === 'image' ? (
                    <img
                        src={imagePath}
                        alt={currentMedia.imgAlt || project.title}
                        className="h-100 bg-white dark:bg-black"
                        loading="lazy"
                    />
                ) : currentMedia && currentMedia.type === 'video' ? (
                    <video autoPlay loop muted playsInline className="h-100 bg-white dark:bg-black" width="100%">
                        <source src={imagePath} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : null}
                <div className='w-full flex uppercase condensed'>
                    <p className='text-sm pt-1'>
                        {project.title} / &nbsp;
                    </p>
                    <p className='text-sm text-neutral-500 pt-1'>
                        {project.categories} / &nbsp;
                    </p>
                    <p className='text-sm text-neutral-500 pt-1'>
                        {project.year}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Project;
