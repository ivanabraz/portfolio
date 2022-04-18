import React, {Fragment} from 'react';
import ProjectList from '../components/Portfolio/ProjectList/ProjectList';

//IMAGES
import ArrowRight from '../images/arrows/arrow-right.svg';
import ArrowDiagonalLeft from '../images/arrows/arrow-diagonal-left.svg';
import ArrowToggle from '../images/arrows/arrow-toggle.svg';

const Home = () => {
    return (
        <Fragment>
            <div className="h-screen w-screen 
            p-5 sm:p-6 lg:p-10 mt-10 
            font-light text-zinc-400">
                <p className='leading-normal xs:leading-normal md:leading-normal lg:leading-normal text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                    Hello! My name is <span className='text-white'>Ivana Braz</span> (b. 1992)
                </p>
                <p className='leading-normal xs:leading-normal md:leading-normal lg:leading-normal text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                    I'm a Multidisciplinary Designer & Front-End Dev Apprentice.
                </p>
                <p className='hidden leading-normal text-zinc-400 xs:leading-normal md:leading-normal lg:leading-normal text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                    <img src={ArrowToggle} className="h-7 w-auto inline" alt="arrow"/> Graphic design / UX / UI / 3D / Web dev / Photo retouch / Video
                </p>
                <p className='leading-normal xs:leading-normal md:leading-normal lg:leading-normal text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                    Based in Buenos Aires, Argentina.
                </p>
                <p className='leading-normal xs:leading-normal md:leading-normal lg:leading-normal text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                    <img src={ArrowRight} className="h-5 xs:h-5 sm:h-5 md:h-6 lg:h-7 w-auto inline" alt="arrow"/> Currently working in the design bureau at <a href="https://teatrocolon.org.ar/" className='text-white border-b border-transparent
                    transition duration-500 hover:border-solid hover:border-b hover:border-zinc-400' target="_blank" rel="noopener noreferrer" >Teatro Colón</a>.
                    </p>
                <p className='leading-normal xs:leading-normal md:leading-normal lg:leading-normal text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                    <img src={ArrowDiagonalLeft} className="h-5 xs:h-5 sm:h-5 md:h-6 lg:h-7 w-auto inline" alt="arrow"/> Previously worked at <a href="https://www.shakespearworks.com/" className='text-white border-b border-transparent
                    transition duration-500 hover:border-solid hover:border-b hover:border-zinc-400' target="_blank" rel="noopener noreferrer" >ShakespearWorks
                    </a>.
                </p>
                <p className='hidden leading-normal text-zinc-400 xs:leading-normal md:leading-normal lg:leading-normal text-md'>
                    Commissioned | Autonomous | Academic
                </p>

                <ProjectList/>
            </div>
        </Fragment>
    );
}

export default Home;