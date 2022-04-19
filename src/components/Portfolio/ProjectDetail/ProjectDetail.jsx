import React from 'react';

import ArrowToggle from '../../../images/arrows/arrow-toggle.svg';

const ProjectDetail = (projectsData) => {

    return (
        <div className='w-full content-center flex justify-center my-20 '>
            <div className="w-12/12 xs:w-12/12 sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-9/12 2xl:w-6/12 font-light text-zinc-400
            content-center">
                <p className='text-white leading-normal xs:leading-normal md:leading-normal lg:leading-normal text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                    {projectsData.title}
                </p>
                <img src={projectsData.imageHeader} alt={projectsData.title} className="w-full h-auto my-3"/>

                <div className='w-full my-20 grid gap-10 grid-cols-3'>
                    <div className="col-span-2">
                        <p className='leading-normal text-md'>
                            {projectsData.textIntro}
                        </p>
                        {projectsData.text?.map((txt, i) => (
                            <p className='leading-normal text-md mt-5'>
                                {txt}
                            </p>
                        ))}
                    </div>

                    <div className="">
                        <div className="w-full border-t border-solid border-zinc-600 pt-5">
                            {projectsData.tags?.map((tag, i) => (
                                <p className='leading-normal text-sm bg-zinc-900 mr-2 px-2 py-1 rounded inline-flex' key={i}>
                                    {tag}
                                </p>
                            ))}
                        </div>
                        <div className="w-full border-t border-solid border-zinc-600 pt-5 mt-5">
                            {projectsData.links?.map((link) => (
                                <>
                                    {link.length !== 0
                                        ?   <a href={link.linkUrl} className='leading-normal text-sm block mb-5'>
                                                <img src={ArrowToggle} alt="Arrow toggle" className="w-auto h-3 self-center inline-flex"/>  {link.linkName}
                                            </a>
                                        :   <></>
                                    }
                                </>
                            ))}
                        </div>
                        <div className="w-full border-t border-solid border-zinc-600 pt-5 mt-5">
                            {projectsData.icons?.map((icon) => (
                                <>
                                    {icon.length !== 0
                                        ?   <img src={icon.iconImg} alt={icon.iconName} className="w-7 h-auto inline-flex mr-2"/>
                                        :   <></>
                                    }
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                {projectsData.images?.map((img, i) => (
                    <img key={i} src={projectsData.images} alt={projectsData.title} className="w-full h-auto mb-10"/>
                ))}
            </div>
        </div>
    );
}

export default ProjectDetail;