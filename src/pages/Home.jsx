import React from 'react';
import ProjectDetail from '../components/Portfolio/ProjectDetail/ProjectDetail';
import { ArrowDownRightIcon, ArrowDownLeftIcon } from '@heroicons/react/20/solid';

// Projects data
import projectsData from '../data/projects-data.json';

const Home = () => {
const featuredProjects = projectsData.filter((project) => project.featured);

return (
    <>
    <div
        className="
        text-black dark:text-neutral-100
        px-2 sm:px-5
        py-20
        leading-relaxed
        grid grid-cols-1 md:grid-cols-7 gap-y-6
        "
    >
        <div className="md:col-span-4 md:pr-14">
            <p className="text-base md:text-xl lg:text-2xl">
                Graphic designer & front-end dev based in Buenos Aires.
            </p>
            <p className="text-base md:text-xl lg:text-2xl">
                With a passion for crafting experiences through a wide scope of disciplines.
            </p>

            <p className="text-base md:text-xl lg:text-2xl">
                <ArrowDownRightIcon
                className="inline-block align-baseline h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-1"
                aria-hidden="true"
                />
                Currently working as a creator at{' '}
                <a
                className="
                    text-neutral-400 dark:text-neutral-500
                    border-b border-transparent hover:border-current
                    transition-colors duration-700
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                    focus-visible:ring-neutral-800 dark:focus-visible:ring-neutral-200
                    focus-visible:ring-offset-white dark:focus-visible:ring-offset-black
                "
                href="https://www.instagram.com/piso.05/"
                target="_blank"
                rel="noopener noreferrer"
                >
                P05
                </a>.
            </p>

            <p className="text-base md:text-xl lg:text-2xl">
                <ArrowDownLeftIcon
                className="inline-block align-baseline h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-1"
                aria-hidden="true"
                />
                Previously worked at{' '}
                <a
                className="
                    text-neutral-400 dark:text-neutral-500
                    border-b border-transparent hover:border-current
                    transition-colors duration-700
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                    focus-visible:ring-neutral-800 dark:focus-visible:ring-neutral-200
                    focus-visible:ring-offset-white dark:focus-visible:ring-offset-black
                "
                href="https://teatrocolon.org.ar/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Teatro Colón
                </a>{' '}
                &{' '}
                <a
                className="
                    text-neutral-400 dark:text-neutral-500
                    border-b border-transparent hover:border-current
                    transition-colors duration-700
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                    focus-visible:ring-neutral-800 dark:focus-visible:ring-neutral-200
                    focus-visible:ring-offset-white dark:focus-visible:ring-offset-black
                "
                href="https://www.shakespearworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Shakespear Works
                </a>.
            </p>
        </div>
    </div>

    {featuredProjects.map((project) => (
        <ProjectDetail
        {...project}
        key={project.id || project.slug || project.title}
        />
    ))}
    </>
);
};

export default Home;
