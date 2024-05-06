import React from "react";
import { TMDBMOVIE_IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={TMDBMOVIE_IMAGE_CDN + posterPath}></img>
    </div>
  );
};

export default MovieCard;
