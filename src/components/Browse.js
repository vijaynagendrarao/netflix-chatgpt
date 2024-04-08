// import React from 'react';
import Header from './Header';
import useNowPlayingHooks from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

    useNowPlayingHooks();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* {
            MainContainer
                - VideoBackground
                - VideoTitle
            SecondaryContainer
                - MovieList * n
                    -MovieCards * n
        } */}
        </div>
    );
};

export default Browse