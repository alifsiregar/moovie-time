import { useState } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// components
import Dropdown from './components/Dropdown';
import Checkbox from './components/Checkbox';

const Border = ({customStyle}: {customStyle?: string}) => {
    return (
        <div className={twMerge(clsx(' h-[1px] bg-[#292f38]', customStyle))} />
    );
};

const SortingMenu = () => {

    const [genres, setGenres] = useState<{
        name: string;
        checked: boolean;
    }[]>([
        {
            name: 'Action',
            checked: false,
        },
        {
            name: 'Adventure',
            checked: false,
        },
        {
            name: 'Animation',
            checked: false,
        },
        {
            name: 'Comedy',
            checked: false,
        },
        {
            name: 'Crime',
            checked: false,
        },
        {
            name: 'Documentary',
            checked: false,
        },
        {
            name: 'Drama',
            checked: false,
        },
        {
            name: 'Family',
            checked: false,
        },
        {
            name: 'Fantasy',
            checked: false,
        },
        {
            name: 'History',
            checked: false,
        },
        {
            name: 'Horror',
            checked: false,
        },
    ])

  return (
    <div className='w-[240px] h-max bg-[#101824] rounded-[8px] py-[20px] text-textWhite flex flex-col'>
        <span className=' font-[600] text-[16px] px-[20px]'>
            Sort Result By
        </span>
        <Border
            customStyle=' my-[20px]'
        />
        <Dropdown
            customStyle=' px-[20px]'
        />
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
            {genres.map((item) => (
                <Checkbox
                    key={item.name}
                    text={item.name}
                    customStyle=' mb-[17px]'
                />
            ))}
        </div>
    </div>
  )
}

export default SortingMenu