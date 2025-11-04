import React from "react";
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

const ProjectDetailScroll = (projectsData) => {
const imagePath = `/images/projects/${projectsData.id}/`;

return (
    <div className="w-full flex flex-col pt-10 pb-10 px-5 border-t border-neutral-500 bg-white dark:bg-black">
    {/* Header */}
    <div className="w-full grid grid-cols-7 uppercase condensed leading-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        <div className="col-span-3 text-black dark:text-neutral-100">
        {projectsData.title}
        </div>
        <div className="col-span-3 text-neutral-500">
        {projectsData.categories}
        </div>
        <div className="text-right text-neutral-500">
        {projectsData.year}
        </div>
    </div>

    {/* Primera media (sin hover en imagen/video) */}
    <div className="my-[2.5rem]">
        {Array.isArray(projectsData.images) && projectsData.images.length > 0 && (
        <>
            {projectsData.images[0].type === 'nested' ? (
            <div className="relative w-full aspect-[1920/990] overflow-hidden grid grid-cols-2">
                {projectsData.images[0].nestedImages.map((nestedMedia) => (
                <div key={nestedMedia.imgUrl} className="relative w-full h-full">
                    <img
                    className="object-cover w-full h-full"
                    src={imagePath + nestedMedia.imgUrl}
                    alt={projectsData.imgAlt || projectsData.title}
                    loading="lazy"
                    />
                </div>
                ))}
            </div>
            ) : (
            <div className="mb-5">
                {projectsData.images[0].type === 'video' ? (
                <video width="100%" autoPlay loop muted playsInline>
                    <source src={imagePath + projectsData.images[0].imgUrl} type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                </video>
                ) : (
                <img
                    className="m-auto"
                    src={imagePath + projectsData.images[0].imgUrl}
                    alt={projectsData.imgAlt || projectsData.title}
                    loading="lazy"
                />
                )}
            </div>
            )}
        </>
        )}
    </div>

    {/* 3 columnas: descripción / secundario / links */}
    <div className="w-full grid grid-cols-10 gap-x-0 md:gap-x-10 lg:gap-x-30 gap-y-5 text-black dark:text-neutral-100 leading-normal text-sm sm:text-sm md:text-base lg:text-xl">
        {/* Descripción */}
        <div className="col-span-10 md:col-span-6 lg:col-span-6">
        {projectsData.text}
        </div>

        {/* Secundario + Links */}
        <div className="col-span-10 md:col-span-4 lg:col-span-4 text-neutral-500">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="pr-3">
                <p className="mb-3">{projectsData.textSecondary}</p>
            </div>

            <div className="flex flex-row md:flex-col">
            {projectsData.links?.map((link) =>
                link && link.linkUrl ? (
                <a
                    key={link.linkUrl}
                    href={link.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex flex-row items-center w-fit mb-1 mr-3
                    border-b border-transparent hover:border-current
                    text-neutral-600 dark:text-neutral-500
                    transition-colors duration-700
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                    focus-visible:ring-neutral-800 dark:focus-visible:ring-neutral-200
                    focus-visible:ring-offset-white dark:focus-visible:ring-offset-black
                    "
                >
                    {link.linkName}
                    <ArrowUpRightIcon className="h-4 w-4 md:h-5 md:w-5 self-end ml-1" />
                </a>
                ) : null
            )}
            </div>
        </div>
        </div>
    </div>

    {/* Resto de media en scroll (sin hover) */}
    <div className="my-[2.5rem] w-full md:w-4/5 mx-auto">
        {Array.isArray(projectsData.images) &&
        projectsData.images.slice(1).map((media) => (
            <React.Fragment key={media.imgUrl || `${media.type}-${Math.random()}`}>
            {media.type === 'nested' ? (
                <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-3 mb-5">
                {media.nestedImages.map((nestedMedia) => (
                    <div key={nestedMedia.imgUrl} className="relative aspect-video md:aspect-square overflow-hidden">
                    {nestedMedia.type === 'video' ? (
                        <video className="md:object-cover md:w-full md:h-full" autoPlay loop muted playsInline>
                        <source src={imagePath + nestedMedia.imgUrl} type="video/mp4" />
                        Tu navegador no soporta el tag de video.
                        </video>
                    ) : (
                        <img
                        className="m-auto md:object-cover md:w-full md:h-full lg:h-full"
                        src={imagePath + nestedMedia.imgUrl}
                        alt={projectsData.imgAlt || projectsData.title}
                        loading="lazy"
                        />
                    )}
                    </div>
                ))}
                </div>
            ) : (
                <div className="mb-5">
                {media.type === 'video' ? (
                    <video width="100%" autoPlay loop muted playsInline>
                    <source src={imagePath + media.imgUrl} type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                    </video>
                ) : (
                    <img
                    className="m-auto"
                    src={imagePath + media.imgUrl}
                    alt={projectsData.imgAlt || projectsData.title}
                    loading="lazy"
                    />
                )}
                </div>
            )}
            </React.Fragment>
        ))}
    </div>
    </div>
);
};

export default ProjectDetailScroll;
