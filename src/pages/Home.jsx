import React from 'react';
import ProjectDetail from '../components/Portfolio/ProjectDetail/ProjectDetail';

// Projects data
import {projectsData} from '../data/projects-data';

const Home = () => {
    return (
        <>
            <div className="px-5 mt-24 leading-normal text-white text-sm xs:text-sm sm:text-md md:text-xl lg:text-2xl
            flex flex-row grid gap-x-0 xs:gap-x-0 sm:gap-x-10 md:gap-x-10 lg:gap-x-40 gap-y-5 grid-cols-1 xs:grid-cols-1 md:grid-cols-2">
                <div>
                    Buenos Aires based multidisciplinary designer & front-end dev apprentice. 
                    Currently working as a Senior Graphic Designer at <a className='text-neutral-500 border-b border-neutral-500' href='https://teatrocolon.org.ar/' target='_blank' rel='noopener noreferrer' >Teatro Colón</a>. 
                    Previously worked at <a className='text-neutral-500 border-b border-neutral-500' href='https://www.shakespearworks.com/' target='_blank' rel='noopener noreferrer' >ShakespearWorks</a>.
                    With a passion for crafting experiences through a wide scope of disciplines. From graphic design, motion graphics, experimental 3D modeling to UX/UI and web development.
                </div>
                <div>
                    braz.ivana[at]gmail.com
                </div>
            </div>

            {projectsData && projectsData.slice(0, 1 && 2, 3).map((project) => (
                <ProjectDetail {...project} key={project.id}/>
            ))}
        </>
    );
}

export default Home;