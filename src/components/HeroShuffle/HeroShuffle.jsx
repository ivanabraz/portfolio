import React, { useState } from 'react'
import BottomContainer from '../BottomContainer/BottomContainer';

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
        <div onClick={changeElement} 
        className={`flex flex-col justify-between w-full h-[96.5vh] text-neutral-100
        items-center ${HeroShuffleProps.customClass}`}>
            <div></div>
            <p className='wagon font-thin leading-[0.6em] break-all 
            text-[10em] xs:text-[10rem] md:text-[15rem] lg:text-[15rem] text-center'>
                {shuffle[index].name}
            </p>
            {HeroShuffleProps.children}
            <BottomContainer/>
        </div>
    )
}

export default HeroShuffle