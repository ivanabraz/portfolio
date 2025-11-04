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
    <div className="w-full mb-3 text-black dark:text-neutral-100">
    {/* CONTENEDOR CON GROUP SOLO PARA LA IMAGEN */}
    <div className="relative overflow-hidden group">
        {/* MEDIA */}
        {currentMedia && currentMedia.type === 'nested' ? (
        <div className="relative w-full aspect-[1920/990] overflow-hidden grid grid-cols-2">
            {currentMedia.nestedImages.map((nestedMedia) => (
            <div key={nestedMedia.imgUrl || uuidv4()} className="relative w-full h-full">
                <img
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
                src={`/images/projects/${project.id}/${nestedMedia.imgUrl}`}
                alt={nestedMedia.imgAlt || project.title}
                loading="lazy"
                />
            </div>
            ))}
        </div>
        ) : currentMedia && currentMedia.type === 'image' ? (
        <img
            src={imagePath}
            alt={currentMedia.imgAlt || project.title}
            className="w-full h-auto bg-white dark:bg-black transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
        />
        ) : currentMedia && currentMedia.type === 'video' ? (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto bg-white dark:bg-black transition-transform duration-700 group-hover:scale-[1.02]"
        >
            <source src={imagePath} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        ) : null}

        {/* OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-700" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
        className="uppercase condensed text-sm md:text-base lg:text-lg
                    text-white border border-white rounded-full px-4 py-1
                    opacity-0 group-hover:opacity-100
                    transition-all duration-700
                    group-hover:scale-105"
        aria-hidden="true"
        >
        View
        </span>
        <span className="sr-only">View {project.title}</span>
        </div>
    </div>

    {/* INFO */}
    <div className="w-full flex uppercase condensed">
        <p className="text-sm pt-1">{project.title} / &nbsp;</p>
        <p className="text-sm text-neutral-500 pt-1">{project.categories} / &nbsp;</p>
        <p className="text-sm text-neutral-500 pt-1">{project.year}</p>
    </div>
    </div>
);
};

export default Project;
