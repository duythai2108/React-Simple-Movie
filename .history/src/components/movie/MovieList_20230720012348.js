import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";
// https://api.themoviedb.org/3/movie/now_playing?api_key=5ea43b5e959eb20d0dc94530da347c4d
const MovieList = () => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=5ea43b5e959eb20d0dc94530da347c4d",
    fetcher
  );
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  console.log("🚀 ~ file: MovieList.js:24 ~ MovieList ~ item:", item)
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
