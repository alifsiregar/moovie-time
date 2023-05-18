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
  useQueryDiscoverMovie,
  useQueryMovieGenres,
} from '@/lib/services';
import {
  getDiscoverMovies,
  getMovieGenres,
} from '@/lib/outbound';

// types
import {
  MovieType,
  DiscoverMoviePropType,
  APIResponseType,
  GenresCheckedType
} from '@/lib/types';

export async function getStaticProps() {

  const queryClient = new QueryClient();

  // prefetch the data so it will be available on render
  await queryClient.prefetchQuery('query-discover-movie', () => getDiscoverMovies({
    page: 1,
    sort_by: 'popularity.desc',
    with_genres: '',
  }));
  await queryClient.prefetchQuery('query-movie-genres', getMovieGenres);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Movies = () => {
  const queryClient = new QueryClient();

  const [movies, setMovies] = useState<MovieType[]>([]);
  const [genres, setGenres] = useState<GenresCheckedType[]>([]);
  const [params, setParams] = useState<DiscoverMoviePropType>({
    page: 1,
    sort_by: 'popularity.desc',
    with_genres: '',
  });

  useQueryMovieGenres((e: GenresCheckedType[]) => {
    setGenres(e);
  });

  const {
    data: movieData,
    isLoading: movieLoading,
  } = useQueryDiscoverMovie({
    params,
    onSuccess: ({
      page,
      results,
    }: APIResponseType<MovieType[]>) => {
      setMovies(prev => [...prev, ...results]);
      setParams(prev => ({
        ...prev,
        page,
      }));
    }
  });

  const {
    total_pages
  } = movieData || {};

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
    setMovies([]);
    setGenres(newGenres);
    setParams(prev => ({
      ...prev,
      page: 1,
      with_genres: formatToString,
    }));

    await queryClient.invalidateQueries({ queryKey: 'query-discover-movie' })
  };

  const handleSelectSort = async (sort: {
    value: string;
    label: string;
  }) => {
    setMovies([]);
    setParams(prev => ({
      ...prev,
      page: 1,
      sort_by: sort.value
    }));
    await queryClient.invalidateQueries({ queryKey: 'query-discover-movie' })
  };

  return (
    <div className="pt-[80px] relative before:content-[''] before:absolute before:h-[323px] before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-bgGray-100 before:z-0">
      <div className=" px-[120px] pb-[93px]">
        <Title
          text="Movies"
          customStyle="text-[36px] before:bottom-[55px]"
        />
        <div className="flex gap-[30px] mt-[60px]">
          <SortingMenu genres={genres} handleChangeGenres={handleChangeGenres} handleSelectSort={handleSelectSort} />
          <div className=" flex flex-col gap-[63px] items-center w-full">
            <div className="min-h-[120px] text-textWhite grid grid-cols-4 gap-y-[27px] gap-x-[20px]">
              {movies.length > 0 && movies.map((movie: MovieType, idx: number) => {
                return(
                  <MovieCard
                    key={String(idx)}
                    title={movie?.title}
                    year={movie?.release_date?.substring(0, 4)}
                    rating={movie?.vote_average}
                    image={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}/${movie.poster_path}`}
                  />
                )
              })}
            </div>
            {params.page !== total_pages && (
                <Button
                  option={1}
                  onClick={!movieLoading ? handleChangePage: () => {}}
                >
                  {movieLoading ? (
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
  )
};

export default Movies;