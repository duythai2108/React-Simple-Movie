import React from "react";

const MovieCard = ({ item }) => {
  // console.log("🚀 ~ file: MovieCard.js:4 ~ MovieCard ~ item:", item)
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white h-full">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
