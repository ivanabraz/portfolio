import React from 'react';
import ProjectDetail from '../components/Portfolio/ProjectDetail/ProjectDetail';
import { ArrowDownRightIcon } from '@heroicons/react/20/solid'
import { ArrowDownLeftIcon } from '@heroicons/react/20/solid'

// Projects data
import {projectsData} from '../data/projects-data';

const Home = () => {
    return (
        <>
            <div className="text-neutral-100 px-5 my-24 leading-normal text-sm xs:text-sm sm:text-md md:text-xl lg:text-2xl
            flex flex-row grid 
            grid-cols-1 xs:grid-cols-1 md:grid-cols-7">
                <div className='col-span-4 pr-14'>
                    <p>
                    Buenos Aires based multidisciplinary senior designer & front-end dev apprentice. With a passion for crafting experiences through a wide scope of disciplines. From graphic design, motion graphics to UX/UI and web development.
                    </p>
                    <p className='pt-3'>
                        <ArrowDownRightIcon className="h-4 xs:h-4 sm:h-4 md:h-5 lg:h-6 w-4 xs:w-4 sm:w-4 md:w-5 lg:w-6 self-end flex inline-flex"/> Currently working as a Senior Graphic Designer at <a className='text-neutral-500 border-b border-neutral-500' href='https://teatrocolon.org.ar/' target='_blank' rel='noopener noreferrer'>Teatro Colón</a>. 
                    </p>
                    <p className='pt-3'>
                        <ArrowDownLeftIcon className="h-4 xs:h-4 sm:h-4 md:h-5 lg:h-6 w-4 xs:w-4 sm:w-4 md:w-5 lg:w-6 self-end flex inline-flex"/> Previously worked at <a className='text-neutral-500 border-b border-neutral-500' href='https://www.shakespearworks.com/' target='_blank' rel='noopener noreferrer'>ShakespearWorks</a>.
                    </p>
                </div>
                <div className='col-span-3 mt-5 xs:mt-5 sm:mt-5 md:mt-0'>
                    braz.ivana[at]gmail[dot]com
                </div>
            </div>

            {projectsData && projectsData.slice(0, 3).map((project) => (
                <ProjectDetail {...project} key={project.id}/>
            ))}
        </>
    );
}

export default Home;