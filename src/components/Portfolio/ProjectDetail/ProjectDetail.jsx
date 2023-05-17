import React from "react";
import SwiperSlider from "../../SwiperSlider/SwiperSlider";
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const ProjectDetail = (projectsData) => {
    return (
        <div className='w-full flex flex-col px-5 py-10 border-t border-white mt-10 mb-20 text-neutral-100'>
            <div className="w-full grid grid-cols-7 condensed leading-normal text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <div className='col-span-4'>
                    {projectsData.title}
                </div>
                <div className='col-span-2'>
                    {projectsData.categories}
                </div>
                <div className='text-right'>
                    {projectsData.year}
                </div>
            </div>

            <SwiperSlider {...projectsData} />

            <div className="w-full flex justify-between grid grid-cols-10
            gap-x-0 md:gap-x-10 lg:gap-x-30 gap-y-5
            text-neutral-100 leading-normal text-sm xs:text-sm sm:text-sm md:text-md lg:text-xl">
                <div className='col-span-10 xs:col-span-10 sm:col-span-10 md:col-span-6 lg:col-span-6'>
                    {projectsData.text}
                </div>
                <div className='text-neutral-500 col-span-10 xs:col-span-10 sm:col-span-10 md:col-span-4 lg:col-span-2'>
                    <p className='mb-3'>
                        {projectsData.textSecondary}
                    </p>
                </div>
                <div className='col-span-10 xs:col-span-10 sm:col-span-10 md:col-span-4 lg:col-span-2'>
                    {projectsData.links?.map((link) => (
                            link.length !== 0
                                ?   <a key={link.linkName} href={link.linkUrl} className='flex flex-row text-neutral-500 border-b border-neutral-500 w-fit mb-1 mr-3' target="_blank" rel="noopener noreferrer">
                                        {link.linkName} <ArrowUpRightIcon className="h-4 xs:h-4 sm:h-4 md:h-5 lg:h-6 w-4 xs:w-4 sm:w-4 md:w-5 lg:w-6 self-end" />
                                    </a>
                                :   <></>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;


