import { useState } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// components
import Dropdown from './components/Dropdown';
import Checkbox from './components/Checkbox';

// types
import {
    GenresCheckedType
} from '@/lib/types';

// consts
const SORT_OPTIONS = [
    {
        label: 'Popularity Descending',
        value: 'popularity.desc',
    },
    {
        label: 'Popularity Ascending',
        value: 'popularity.asc',
    },
    {
        label: 'Release Date Descending',
        value: 'primary_release_date.asc',
    },
    {
        label: 'Release Date Ascending',
        value: 'primary_release_date.desc',
    },
    {
        label: 'Rating Descending',
        value: 'vote_average.asc',
    },
    {
        label: 'Rating Ascending',
        value: 'vote_average.desc',
    },
];

const Border = ({customStyle}: {customStyle?: string}) => {
    return (
        <div className={twMerge(clsx(' h-[1px] bg-[#292f38]', customStyle))} />
    );
};

const SortingMenu = ({
    genres,
    handleChangeGenres,
    handleSelectSort,
}: {
    genres: GenresCheckedType[];
    handleChangeGenres: (e: GenresCheckedType) => void,
    handleSelectSort: (e: any) => void,
}) => {

  return (
    <div className='min-w-[270px] h-max bg-[#101824] relative rounded-[8px] py-[20px] text-textWhite flex flex-col'>
        <span className=' font-[600] text-[16px] px-[20px]'>
            Sort Result By
        </span>
        <Border
            customStyle=' my-[20px]'
        />
        <div className=' px-[20px]'>
            <Dropdown
                options={SORT_OPTIONS}
                customStyle=' px-[20px]'
                handleSelectSort={handleSelectSort}
            />
        </div>
        <Border
            customStyle=' mt-[31px]'
        />
        <span className=' font-[600] text-[16px] px-[20px] my-[13px]'>
            Genres
        </span>
        <Border
            customStyle=' mb-[18px]'
        />
        <div className='px-[20px]'>
            {genres?.map((genre: GenresCheckedType) => (
                <Checkbox
                    key={genre.id}
                    text={genre.name}
                    customStyle=' mb-[17px]'
                    checked={genre.checked}
                    onChange={() => handleChangeGenres(genre)}
                />
            ))}
        </div>
    </div>
  )
}

export default SortingMenu