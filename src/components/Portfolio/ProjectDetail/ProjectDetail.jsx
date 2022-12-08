import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons';

import ArrowToggle from '../../../images/arrows/arrow-toggle.svg';

const ProjectDetail = (projectsData) => {
    return (
        <div className='w-full content-center flex justify-center py-40'>
            <div className="w-12/12 xs:w-12/12 sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-9/12 2xl:w-6/12 font-light text-black dark:text-white content-center">
                <p className='text-black dark:text-white leading-normal text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                    {projectsData.title}
                </p>
                <img src={projectsData.imageHeader} alt={projectsData.title} className="w-full h-auto my-3"/>

                <div className='w-full my-20
                grid gap-10 grid-cols-1 sx:grid-cols-1 sm:grid-cols-3 md:sx:grid-cols-3 lg:sx:grid-cols-3 xl:sx:grid-cols-3 2xl:sx:grid-cols-3'>
                    {/* Texto */}
                    <div className="col-span-2">
                        <p className='leading-normal text-md'>
                            {projectsData.textIntro}
                        </p>
                        {projectsData.text?.map((txt) => (
                            <p key={txt} className='leading-normal text-md mt-5'>
                                {txt}
                            </p>
                        ))}
                    </div>

                    {/* Data sheet */}
                    <div className="">
                        {/* Categories */}
                        <div className="w-full border-t border-solid border-black dark:border-white pt-5">
                            {projectsData.categories?.map((category) => (
                                <p key={category} className='leading-normal text-sm bg-black dark:bg-white text-white dark:text-black mr-2 px-2 py-1 rounded inline-flex'>
                                    {category}
                                </p>
                            ))}
                        </div>
                        {/* Links */}
                        <div className="w-full border-t border-solid border-black dark:border-white pt-5 mt-5">
                            {projectsData.links?.map((link) => (
                                link.length !== 0
                                    ?   <a key={link.linkName} href={link.linkUrl} className='leading-normal text-sm block mb-5' target="_blank" rel="noopener noreferrer">
                                            <img src={ArrowToggle} alt="Arrow toggle" className="w-auto h-3 self-center inline-flex"/>  {link.linkName}
                                        </a>
                                    :   <></>
                            ))}
                        </div>
                        {/* Icons */}
                        <div className="w-full border-t border-solid border-black dark:border-white pt-5 mt-5">
                            {projectsData.icons?.map((icon) => (
                                icon.length !== 0
                                    ?   <img key={icon.iconName} src={icon.iconImg} alt={icon.iconName} className="w-7 h-auto inline-flex mr-2"/>
                                    :   <></>
                            ))}
                        </div>
                        {/* Further information */}
                        {projectsData.furtherInformation?.length > 1
                            ?   <div className="w-full border-t border-solid border-black dark:border-white pt-5 mt-5">
                                    {projectsData.furtherInformation?.map((furtherInformation) => (
                                        <p className='text-sm mr-2 ' key={furtherInformation}>
                                            {furtherInformation}
                                        </p>
                                    ))}
                                </div>
                            : <></>
                        }
                        {/* Tags */}
                        <div className="w-full border-t border-solid border-black dark:border-white pt-5 mt-5">
                            <p className='leading-normal text-sm mr-2 inline-flex'>
                                Tags  <FontAwesomeIcon className="h-3 self-center" icon={faTags} />
                            </p>
                            {projectsData.tags?.map((tag) => (
                                <p className='leading-normal text-sm mr-2 inline-flex' key={tag}>
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Images */}
                <div className="mt-5 xs:mt-5 sm:mt-5 md:mt-10 lg:mt-20 xl:mt-32 2xl:mt-32">
                    {projectsData.images?.map((image) => (
                        <img key={image.imgAlt} src={image.imgUrl} alt={projectsData.title + " - " + image.imgAlt} className="w-full h-auto mb-5 xs:mb-5 sm:mb-5 md:mb-5 lg:mb-10 xl:mb-10 2xl:mb-10"/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;