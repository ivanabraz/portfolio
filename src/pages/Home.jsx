import React, {Fragment} from 'react';
import HeroShuffle from '../components/HeroShuffle/HeroShuffle';

const Home = () => {
    return (
        <Fragment>
            <HeroShuffle>
                <div className="absolute bottom-0 p-5 sm:p-6 lg:p-10 text-black dark:text-white 
                flex flex-row grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2">
                    <div className='text-lg'>
                        Hi there! My name is Ivana Braz (b. 1992) a Multidisciplinary Designer & Front-End Dev Apprentice, based in Buenos Aires. 
                        I’m currently working at <a className='text-black dark:text-white border-b border-transparent hover:border-solid hover:border-b hover:border-white' href='https://teatrocolon.org.ar/' target='_blank' rel='noopener noreferrer' >Teatro Colón</a>. 
                        Previously worked at <a className='text-black dark:text-white border-b border-transparent hover:border-solid hover:border-b hover:border-white' href='https://www.shakespearworks.com/' target='_blank' rel='noopener noreferrer' >ShakespearWorks</a>.
                    </div>
                    <div className='text-lg text-right xs:text-left sm:text-right mt-0 xs:mt-5 sm:mt-0'>
                        braz.ivana[at]gmail.com
                    </div>
                </div>
            </HeroShuffle>


        </Fragment>
    );
}

export default Home;