import React from 'react';
import ProjectDetail from '../components/Portfolio/ProjectDetail/ProjectDetail';

// Projects data
import {projectsData} from '../data/projects-data';

const Home = () => {
    return (
        <>
            <div className="px-5 my-24 leading-normal text-white text-sm xs:text-sm sm:text-md md:text-xl lg:text-2xl
            flex flex-row grid 
            grid-cols-1 xs:grid-cols-1 md:grid-cols-7">
                <div className='col-span-4'>
                    Buenos Aires based multidisciplinary designer & front-end dev apprentice. 
                    Currently working as a Senior Graphic Designer at <a className='text-neutral-500 border-b border-neutral-500' href='https://teatrocolon.org.ar/' target='_blank' rel='noopener noreferrer' >Teatro Colón</a>. 
                    Previously worked at <a className='text-neutral-500 border-b border-neutral-500' href='https://www.shakespearworks.com/' target='_blank' rel='noopener noreferrer' >ShakespearWorks</a>.
                    With a passion for crafting experiences through a wide scope of disciplines. From graphic design, motion graphics to UX/UI and web development.
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