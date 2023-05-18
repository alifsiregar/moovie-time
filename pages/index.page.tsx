/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head';
import { useState } from "react";
import { dehydrate, QueryClient } from 'react-query';

// components
import MovieCard from "@/components/MovieCard";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Hero from "@/components/Hero";

// services
import { useQueryPopularAndUpcomingMovies } from '@/lib/services';
import {
  getPopularMovies,
  getUpcomingMovies,
} from '@/lib/outbound';

// consts
const POPULARITY = 'popularity';
const RELEASE_DATE = 'release_date';

// types
import { MovieType } from "@/lib/types";

export async function getStaticProps() {

  const queryClient = new QueryClient();

  // prefetch the data so it will be available on render
  await queryClient.prefetchQuery('query-popular-movie', getPopularMovies);
  await queryClient.prefetchQuery('query-upcoming-movie', getUpcomingMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {

  const [view, setView] = useState<string>(POPULARITY);

  const [
    {
      data: upcomingMoviesData,
      isLoading: upcomingMoviesLoading,
    },
    {
      data: popularMoviesData,
      isLoading: popularMoviesLoading,
    }
  ] = useQueryPopularAndUpcomingMovies();

  const handleChangeView = (type: string) => {
    setView(type);
  };

  return (
    <>
    <Head>
      <title>Moovie Time!</title>
      <meta property="og:title" content="Moovie Time!" key="title" />
    </Head>
    <Hero
      data={upcomingMoviesData?.slice(0, 4) || []}
    />
    <div className="px-[120px] pb-[120px] flex flex-col relative before:content-[''] before:h-[333px] before:bg-bgGray-100 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-[15px]">
      <div className="relative mt-[120px]">
        <div className=" flex justify-between">
          <Title
            text="Discover Movies"
          />
          <div className=" flex gap-[20px]">
            <Button
              option={view === POPULARITY ? 1 : 2}
              customStyle=" px-[16px]"
              onClick={() => handleChangeView(POPULARITY)}
            >
              <span className=" text-[14px] font-[500] text-textWhite">
                Popularity
              </span>
            </Button>
            <Button
              option={view === RELEASE_DATE ? 1 : 2}
              customStyle=" pl-[18px] pr-[15px]"
              onClick={() => handleChangeView(RELEASE_DATE)}
            >
              <span className=" text-[14px] font-[500] text-textWhite">
                Release Date
              </span>
            </Button>
          </div>
        </div>
        <div className="mt-[43px] relative min-h-[120px] text-textWhite grid grid-cols-5 gap-y-[37px] gap-x-[25px]">
          {!upcomingMoviesLoading && !popularMoviesLoading && (
            view === POPULARITY ? popularMoviesData : upcomingMoviesData
          )?.map((movie: MovieType, idx: number) => {
            return(
              <MovieCard
                key={String(idx)}
                title={movie?.title}
                year={movie?.release_date.substring(0, 4)}
                rating={movie?.vote_average}
                image={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}/${movie.poster_path}`}
              />
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
};
