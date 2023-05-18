import clsx from 'clsx';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const Pagination = ({
    totalPages,
    currentPage,
    onClick,
}: {
    totalPages: number;
    currentPage: number;
    onClick: (e: number) => void
}) => {
  return (
    <div className='flex gap-[18px]'>
        { new Array(totalPages).fill(0).map((_, idx) => (
            <div key={String(idx)} onClick={() => onClick(idx)} className={twMerge(clsx(
                'h-[12px] duration-300 transition-all',
                {
                    'w-[12px] rounded-full bg-[#8d9195] cursor-pointer ': idx !== currentPage,
                    'w-[60px] rounded-[6px] bg-[#E74C3C]': idx === currentPage
                }
            ))} />
        ))
        }
    </div>
  )
}

export default Pagination