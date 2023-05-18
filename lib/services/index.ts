/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from "react";
import { useQueries, useQuery } from "react-query";

// outbound
import {
    getUpcomingMovies,
    getPopularMovies,
    getDiscoverMovies,
    getMovieGenres,
    getTVShowsGenres,
    getDiscoverTVShows,
    getQueryMovieSearch,
} from "@/lib/outbound";

// types
import {
    APIResponseType,
    MovieType,
    DiscoverMoviePropType,
    GenresCheckedType,
    GenresType,
    TVShowsType,
} from "@/lib/types";

export const useQueryPopularAndUpcomingMovies = () => {

    const sliceData = (res: APIResponseType<MovieType[]>) => {
        return res?.results?.slice(0, 10)
    }

    return useQueries([
        {
            queryKey: 'query-upcoming-movie',
            queryFn: getUpcomingMovies,
            select: sliceData,
        },
        {
            queryKey: 'query-popular-movie',
            queryFn: getPopularMovies,
            select: sliceData,
        },
    ]);
};

export const useQueryDiscoverMovie = ({
    params,
    onSuccess,
}: {
    params: DiscoverMoviePropType,
    onSuccess?: (e: APIResponseType<MovieType[]>) => void
},) => {
    return useQuery(['query-discover-movie', params], () => getDiscoverMovies(params), {
        onSuccess,
        onError: (e) => {
            console.log(`Error: ${e}`);
        }
    });
};

export const useQueryDiscoverTVShows = ({
    params,
    onSuccess,
}: {
    params: DiscoverMoviePropType,
    onSuccess?: (e: APIResponseType<TVShowsType[]>) => void
},) => {
    return useQuery(['query-discover-tv-shows', params], () => getDiscoverTVShows(params), {
        onSuccess,
        onError: (e) => {
            console.log(`Error: ${e}`);
        }
    });
};

export const useQueryMovieGenres = (onSuccess: (e: GenresCheckedType[]) => void) => {

    const formatData = (res: {
        genres: GenresType[]
    }) => {
        return res?.genres.map((genre: GenresType) => ({
            ...genre,
            checked: false,
        }));
    };

    const queryFn  = useCallback(getMovieGenres, []);

    return useQuery('query-movie-genres', queryFn, {
        select: formatData,
        onSuccess,
    });
};

export const useQueryTVShowsGenres = (onSuccess: (e: GenresCheckedType[]) => void) => {

    const formatData = (res: {
        genres: GenresType[]
    }) => {
        return res?.genres.map((genre: GenresType) => ({
            ...genre,
            checked: false,
        }));
    };

    const queryFn  = useCallback(getTVShowsGenres, []);

    return useQuery('query-tv-shows-genres', queryFn, {
        select: formatData,
        onSuccess,
    });
};

export const useQueryMovieSearch = (query: string) => {
    return useQuery([`query-movie-search`, query], () => getQueryMovieSearch(query), {
        enabled: false,
    });
};