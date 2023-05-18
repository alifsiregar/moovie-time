import axios from "axios";

// types
import { DiscoverMoviePropType } from "../types";

export const getUpcomingMovies = async () => {
    const res = await axios.get('/movie/upcoming');

    return res.data;
}; 

export const getPopularMovies = async () => {
    const res = await axios.get('/movie/popular');

    return res.data;
}; 

export const getMovieGenres = async () => {
    const res = await axios.get('/genre/movie/list');

    return res.data;
}; 

export const getTVShowsGenres = async () => {
    const res = await axios.get('/genre/tv/list');

    return res.data;
}; 

export const getDiscoverMovies = async ({
    page = 1,
    sort_by = 'popularity.desc',
    with_genres = '',
}: DiscoverMoviePropType) => {
    const res = await axios.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort_by}&with_genres=${with_genres}`);

    return res.data;
}; 

export const getDiscoverTVShows = async ({
    page = 1,
    sort_by = 'popularity.desc',
    with_genres = '',
}: DiscoverMoviePropType) => {
    const res = await axios.get(`/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort_by}&with_genres=${with_genres}`);

    return res.data;
}; 