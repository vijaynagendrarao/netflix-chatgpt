// import React from 'react';
import Header from './Header';
import useNowPlayingHooks from '../hooks/useNowPlayingMovies';

const Browse = () => {

    useNowPlayingHooks();

    return (
        <div><Header />
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