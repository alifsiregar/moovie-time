import Head from 'next/head';
import { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';

// components
import MovieCard from "@/components/MovieCard";
import Title from "@/components/Title";
import SortingMenu from "@/components/SortingMenu";
import Button from "@/components/Button";
import { BeatLoader } from 'react-spinners';

// services and outbounds
import {
  useQueryDiscoverTVShows,
  useQueryTVShowsGenres,
} from '@/lib/services';
import {
  getDiscoverTVShows,
  getTVShowsGenres,
} from '@/lib/outbound';

// types
import {
  TVShowsType,
  DiscoverMoviePropType,
  APIResponseType,
  GenresCheckedType
} from '@/lib/types';

export async function getStaticProps() {

  const queryClient = new QueryClient();

  // prefetch the data so it will be available on render
  await queryClient.prefetchQuery('query-discover-tv-shows', () => getDiscoverTVShows({
    page: 1,
    sort_by: 'popularity.desc',
    with_genres: '',
  }));
  await queryClient.prefetchQuery('query-tv-shows-genres', getTVShowsGenres);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const TVShows = () => {
  const queryClient = new QueryClient();

  const [shows, setShows] = useState<TVShowsType[]>([]);
  const [genres, setGenres] = useState<GenresCheckedType[]>([]);
  const [params, setParams] = useState<DiscoverMoviePropType>({
    page: 1,
    sort_by: 'popularity.desc',
    with_genres: '',
  });

  useQueryTVShowsGenres((e: GenresCheckedType[]) => {
    setGenres(e);
  });

  const {
    data: showsData,
    isLoading: showsLoading,
  } = useQueryDiscoverTVShows({
    params,
    onSuccess: ({
      page,
      results,
    }: APIResponseType<TVShowsType[]>) => {
      setShows(prev => [...prev, ...results]);
      setParams(prev => ({
        ...prev,
        page,
      }));
    }
  });

  const {
    total_pages
  } = showsData || {};

  const handleChangePage = () => {
    setParams(prev => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  const handleChangeGenres = async (genreItem: GenresCheckedType) => {
    const newGenres = genres;
    const idx = newGenres.findIndex((genre: GenresCheckedType) => genre.id === genreItem.id);
    
    newGenres[idx].checked = !newGenres[idx].checked;
    const formatToString = newGenres.filter((item: GenresCheckedType) => item.checked).map((item: GenresCheckedType) => item.id).join(",");
    setShows([]);
    setGenres(newGenres);
    setParams(prev => ({
      ...prev,
      page: 1,
      with_genres: formatToString,
    }));

    await queryClient.invalidateQueries({ queryKey: 'query-discover-tv-shows' })
  };

  const handleSelectSort = async (sort: {
    value: string;
    label: string;
  }) => {
    setShows([]);
    setParams(prev => ({
      ...prev,
      page: 1,
      sort_by: sort.value
    }));
    await queryClient.invalidateQueries({ queryKey: 'query-discover-tv-shows' })
  };

  return (
    <>
      <Head>
        <title>Discover TV Shows - Moovie Time!</title>
        <meta property="og:title" content="Discover TV Shows - Moovie Time!" key="title" />
      </Head>
      <div className="pt-[80px] relative before:content-[''] before:absolute before:h-[323px] before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-bgGray-100 before:z-0">
        <div className=" px-[120px] pb-[93px]">
          <Title
            text="TV Shows"
            customStyle="text-[36px] before:bottom-[55px]"
          />
          <div className="flex gap-[30px] mt-[60px]">
            <SortingMenu genres={genres} handleChangeGenres={handleChangeGenres} handleSelectSort={handleSelectSort} />
            <div className=" flex flex-col gap-[63px] items-center w-full">
              <div className="min-h-[120px] text-textWhite grid grid-cols-4 gap-y-[27px] gap-x-[20px]">
                {shows.length > 0 && shows.map((show: TVShowsType, idx: number) => {
                  return(
                    <MovieCard
                      key={String(idx)}
                      title={show?.name}
                      year={show?.first_air_date?.substring(0, 4)}
                      rating={show?.vote_average}
                      image={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}/${show.poster_path}`}
                    />
                  )
                })}
              </div>
              {params.page !== total_pages && (
                  <Button
                    option={1}
                    onClick={!showsLoading ? handleChangePage: () => {}}
                  >
                    {showsLoading ? (
                      <BeatLoader color="#E5E5E5" size={10} />
                    ): (
                      <span className=" text-[14px] font-[500] text-textWhite">
                        Load More
                      </span>
                    )}
                  </Button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default TVShows;