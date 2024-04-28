// import React from 'react';
import Header from "./Header";
import useNowPlayingHooks from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingHooks();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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

export default Browse;
