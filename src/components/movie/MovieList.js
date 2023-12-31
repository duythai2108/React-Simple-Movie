import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCard, { MovieCardSekeleton } from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];

  return (
    <div className="movie-list">
      {isLoading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCardSekeleton></MovieCardSekeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSekeleton></MovieCardSekeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSekeleton></MovieCardSekeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSekeleton></MovieCardSekeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSekeleton></MovieCardSekeleton>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

function fallback() {
  return (
    <p className="bg-red-50 text-red-400">
      Something went wrong with this component
    </p>
  );
}
export default withErrorBoundary(MovieList, {
  fallback: fallback,
});
