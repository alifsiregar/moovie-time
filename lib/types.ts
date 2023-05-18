export type GeneralType = {
    [key: string]: string | number | boolean | number[];
    title: string;
    vote_average: number;
    release_date: string;
    poster_path: string;
};

export type MovieType = GeneralType & {
    release_date: string;
    title: string;
}

export type TVShowsType = GeneralType & {
    first_air_date: string;
    name: string;
}

export type DiscoverMoviePropType = {
    page: number;
    sort_by: string;
    with_genres: string;
  };
  
export type APIResponseType<T> = {
    [key: string]: string | number | T;
    page: number;
    total_pages: number;
    results: T
}

export type GenresType = {
    id: number;
    name: string;
}

export type GenresCheckedType = GenresType & { checked: boolean };