import React, { useState } from 'react'

const HeroShuffle = (HeroShuffleProps) => {
    const shuffle = [
        { name: 'designer'},
        { name: 'ux/ui'},
        { name: 'dev'},
    ]

    const [index, setIndex] = useState(0);

    function changeElement() {
        let newIndex = Math.floor(Math.random() * (shuffle.length - 0) + 0);
        setIndex(newIndex);
    }

    return (
        <div onClick={changeElement} className={`flex items-center justify-center ${HeroShuffleProps.customClass}`}>
            <p className='wagon font-thin leading-[0.6em] break-all text-[10em] xs:text-[10rem] md:text-[15rem] lg:text-[15rem] text-black dark:text-white text-center'>
                {shuffle[index].name}
            </p>
            {HeroShuffleProps.children}
        </div>
    )
}

export default HeroShuffle