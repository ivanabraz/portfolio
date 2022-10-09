import React, {Fragment} from 'react';
import ProjectList from '../components/Portfolio/ProjectList/ProjectList';

//IMAGES
import ArrowRight from '../images/arrows/arrow-right.svg';
import ArrowDiagonalLeft from '../images/arrows/arrow-diagonal-left.svg';
// import ArrowToggle from '../images/arrows/arrow-toggle.svg';

const Home = () => {
    return (
        <Fragment>
            <div className="p-5 sm:p-6 lg:p-10 text-white 
            font-light text-zinc-400">
                    <div className='col-span-5 xs:col-span-6 sm:col-span-6 md:col-span-5
                    leading-normal xs:leading-normal md:leading-normal lg:leading-normal 
                    text-3xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl
                    mt-0 xs:mt-10 sm:mt-10 md:mt-0'>
                        <p>Hi there! My name is Ivana Braz (b. 1992)</p>
                        <p>A Multidisciplinary Designer & Front-End Dev Apprentice.</p>
                        <p>Based in Buenos Aires, Argentina.</p>
                        <p>
                            <img src={ArrowRight} className="h-5 xs:h-5 sm:h-5 md:h-6 lg:h-7 w-auto inline" alt="arrow"/> Working in the design bureau at <a href="https://teatrocolon.org.ar/" className='border-b border-transparent
                            transition duration-[1000ms] hover:text-zinc-400' target="_blank" rel="noopener noreferrer" >Teatro Colón</a>.
                            </p>
                        <p>
                            <img src={ArrowDiagonalLeft} className="h-5 xs:h-5 sm:h-5 md:h-6 lg:h-7 w-auto inline" alt="arrow"/> Previously worked at <a href="https://www.shakespearworks.com/" className='border-b border-transparent
                            transition duration-[1000ms] hover:text-zinc-400' target="_blank" rel="noopener noreferrer" >ShakespearWorks.
                            </a>
                        </p>
                    </div>
                    <p className='hidden leading-normal text-zinc-400 xs:leading-normal md:leading-normal lg:leading-normal text-md'>
                        Commissioned | Autonomous | Academic
                    </p>
                    <ProjectList/>
                </div>
        </Fragment>
    );
}

export default Home;