import React from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=5ea43b5e959eb20d0dc94530da347c4d`,
    fetcher
  );
  const movies = data?.results || [];
  // console.log("🚀 ~ file: Banner.js:11 ~ Banner ~ movies:", movies);
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerIntem item={item}></BannerIntem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerIntem({ item }) {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="absolute overlay inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg bg-opacity-1"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg object-top"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="p-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="p-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="p-2 px-4 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
}
export default Banner;
