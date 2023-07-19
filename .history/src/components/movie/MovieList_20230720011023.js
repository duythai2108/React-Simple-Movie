import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import { useSWRConfig } from "swr";
// https://api.themoviedb.org/3/movie/now_playing?api_key=5ea43b5e959eb20d0dc94530da347c4d
const MovieList = () => {
  const { data, error, isLoading } = useSWR("/api/user/123", fetcher);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
