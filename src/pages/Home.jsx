import React, {Fragment} from 'react';
import BottomContainer from '../components/BottomContainer/BottomContainer';
import HeroShuffle from '../components/HeroShuffle/HeroShuffle';

const Home = () => {
    return (
        <Fragment>
            <HeroShuffle/>
            <BottomContainer/>
        </Fragment>
    );
}

export default Home;