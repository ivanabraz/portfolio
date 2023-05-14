<<<<<<< HEAD
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = (projectsData) => {
    return (
        <div className='w-full flex justify-center pt-3'>
            <div className="w-12/12 xs:w-12/12 sm:w-10/12 md:w-9/12 lg:w-9/12 xl:w-9/12 2xl:w-7/12 font-light text-black dark:text-white content-center">
                <p className='text-black dark:text-white leading-normal text-4xl'>
=======
import React from "react";
import SwiperSlider from "../../SwiperSlider/SwiperSlider";

const ProjectDetail = (projectsData) => {
    return (
        <div className='w-full flex flex-col px-5 py-10 border-t border-white mt-10 mb-20'>
            <div className="w-full grid grid-cols-5 uppercase condensed text-white leading-normal text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <div className='col-span-3'>
>>>>>>> newdesign
                    {projectsData.title}
                </div>
                <div>
                    {projectsData.categories}
                </div>
                <div className='text-right'>
                    {projectsData.year}
                </div>
            </div>

<<<<<<< HEAD
                <div className='w-full my-20
                grid gap-10 grid-cols-1 sx:grid-cols-1 sm:grid-cols-3 md:sx:grid-cols-3 lg:sx:grid-cols-3 xl:sx:grid-cols-3 2xl:sx:grid-cols-3'>
                    {/* Texto */}
                    <div className="col-span-2">
                        <p className='leading-normal text-base'>
                            {projectsData.textIntro}
                        </p>
                        {projectsData.text?.map((txt) => (
                            <p key={txt} className='leading-normal text-base mt-5'>
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
                                            ↳ {link.linkName}
                                        </a>
                                    :   <></>
                            ))}
                        </div>
                        {/* Icons */}
                        <div className="w-full border-t border-solid border-black dark:border-white pt-5 mt-5">
                            {projectsData.icons?.map((icon) => (
                                icon.length !== 0
                                    ?   <img key={icon.iconName} src={icon.iconImg} alt={icon.iconName} className="w-7 h-auto inline-flex mr-2 invert0 dark:invert100"/>
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
                            <p className='leading-normal text-bsm mr-2 inline-flex'>
                                Tags  <FontAwesomeIcon className="h-3 self-center" icon={faTags} />
                            </p>
                            {projectsData.tags?.map((tag) => (
                                <p className='leading-normal text-sm mr-2 inline-flex' key={tag}>
                                    {tag}
                                </p>
                            ))}
                        </div>
=======
            <SwiperSlider {...projectsData} />

            <div className="w-full flex justify-between grid grid-cols-10
            gap-x-0 md:gap-x-10 lg:gap-x-30 gap-y-5
            text-white leading-normal text-sm xs:text-sm sm:text-sm md:text-md lg:text-xl">
                <div className='col-span-10 xs:col-span-10 sm:col-span-10 md:col-span-6 lg:col-span-6'>
                    {projectsData.text}
                </div>
                <div className='col-span-10 xs:col-span-10 sm:col-span-10 md:col-span-4 lg:col-span-4'>
                    <p className='mb-3'>
                        {projectsData.textSecondary}
                    </p>
                    <div className='flex flex-row'>
                        {projectsData.links?.map((link) => (
                                link.length !== 0
                                    ?   <a key={link.linkName} href={link.linkUrl} className='text-neutral-500 border-b border-neutral-500 w-fit mb-1 mr-3' target="_blank" rel="noopener noreferrer">
                                            {link.linkName} 🡥
                                        </a>
                                    :   <></>
                            ))}
>>>>>>> newdesign
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectDetail;