import React from 'react'

const BottomContainer = () => {
    return (
        <div className="flex flex-col items-end text-black dark:text-white 
        grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2">
            <div className='text-lg row-span-1'>
                Hi there! My name is Ivana Braz (b. 1992) a Multidisciplinary Designer & Front-End Dev Apprentice, based in Buenos Aires. 
                I’m currently working at <a className='text-black dark:text-white border-b border-transparent hover:border-solid hover:border-b hover:border-white' href='https://teatrocolon.org.ar/' target='_blank' rel='noopener noreferrer' >Teatro Colón</a>. 
                Previously worked at <a className='text-black dark:text-white border-b border-transparent hover:border-solid hover:border-b hover:border-white' href='https://www.shakespearworks.com/' target='_blank' rel='noopener noreferrer' >ShakespearWorks</a>.
            </div>
            <div className='text-lg text-left xs:text-left sm:text-right'>
                braz.ivana[at]gmail.com
            </div>
        </div>
    )
}

export default BottomContainer