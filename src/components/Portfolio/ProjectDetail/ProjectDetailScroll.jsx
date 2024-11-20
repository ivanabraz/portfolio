import React from "react";
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { v4 as uuidv4 } from 'uuid';

const ProjectDetail = (projectsData) => {
    const imagePath = `/images/projects/${projectsData.id}/`;

    return (
        <div className='w-full flex flex-col pt-10 pb-10 px-5 border-t border-neutral-500 bg-white dark:bg-black'>
            <div className="w-full grid grid-cols-7 uppercase condensed leading-normal text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <div className='col-span-3 xs:col-span-3 md:col-span-3 text-black dark:text-neutral-100'>
                    {projectsData.title}
                </div>
                <div className='col-span-3 xs:col-span-3 md:col-span-3 text-black dark:text-neutral-500'>
                    {projectsData.categories}
                </div>
                <div className='text-right text-black dark:text-neutral-500'>
                    {projectsData.year}
                </div>
            </div>

            <div className="my-[2.5rem]">
                {Array.isArray(projectsData.images) && projectsData.images.length > 0 && (
                    <>
                    {projectsData.images[0].type === 'video' ? (
                        <video width="100%" autoPlay loop muted playsInline>
                        <source src={imagePath + projectsData.images[0].imgUrl} type="video/mp4" />
                        Tu navegador no soporta el tag de video.
                        </video>
                    ) : (
                        <img className="m-auto" src={imagePath + projectsData.images[0].imgUrl} alt={projectsData.imgAlt} loading="lazy" />
                    )}
                    </>
                )}
            </div>

            <div className="w-full flex justify-between grid grid-cols-10 gap-x-0 md:gap-x-10 lg:gap-x-30 gap-y-5 text-black dark:text-neutral-100 leading-normal text-sm xs:text-sm sm:text-sm md:text-md lg:text-xl">
                <div className='col-span-10 xs:col-span-10 sm:col-span-10 md:col-span-6 lg:col-span-6'>
                    {projectsData.text}
                </div>
                <div className="text-neutral-500 col-span-10 xs:col-span-10 sm:col-span-10 md:col-span-4 lg:col-span-4">
                    <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2'>
                        <div>
                            <p className='mb-3'>
                                {projectsData.textSecondary}
                            </p>
                        </div>
                        <div className='flex flex-row xs:flex-row sm:flex-row md:flex-col'>
                            {projectsData.links?.map((link) => (
                                link.length !== 0
                                    ?   <a key={uuidv4()} href={link.linkUrl} className='flex flex-row border-b border-neutral-500 w-fit mb-1 mr-3' target="_blank" rel="noopener noreferrer">
                                            {link.linkName} <ArrowUpRightIcon className="h-4 xs:h-4 sm:h-4 md:h-5 lg:h-6 w-4 xs:w-4 sm:w-4 md:w-5 lg:w-6 self-end" />
                                        </a>
                                    :   <React.Fragment key={uuidv4()}></React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-[2.5rem] w-full md:w-4/5 mx-auto">
            {Array.isArray(projectsData.images) && projectsData.images.slice(1).map((media, index) => (
                    <React.Fragment key={uuidv4()}>
                        {media.type === 'nested' ? (
                            <div className="w-full grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                                {media.nestedImages.map((nestedMedia, nestedIndex) => (
                                    <div key={uuidv4()} className="relative aspect-video md:aspect-square overflow-hidden">
                                        {nestedMedia.type === 'video' ? (
                                            <video className="md:object-cover md:w-full md:h-full" autoPlay loop muted playsInline>
                                            <source src={imagePath + nestedMedia.imgUrl} type="video/mp4" />
                                                Tu navegador no soporta el tag de video.
                                            </video>
                                        ) : (
                                            <img className="m-auto md:object-cover md:w-full md:h-full lg:h-full" src={imagePath + nestedMedia.imgUrl} alt={projectsData.imgAlt} loading="lazy"/>
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
                                    <img className="m-auto" src={imagePath + media.imgUrl} alt={projectsData.imgAlt} loading="lazy"/>
                                )}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default ProjectDetail;
