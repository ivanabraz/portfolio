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
        <div onClick={changeElement} className='flex-wrap overflow-hidden w-screen h-screen flex items-center justify-center'>
            <p className='wagon font-thin leading-[0.9em] break-all text-[15em] xs:text-[10rem] md:text-[15rem] lg:text-[15rem] text-black dark:text-white text-center self-center'>
                <p>{shuffle[index].name}</p>
            </p>
            {HeroShuffleProps.children}
        </div>
    )
}

export default HeroShuffle