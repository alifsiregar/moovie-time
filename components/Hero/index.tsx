import { useState } from 'react';

// components
import Image from '@/components/Image';

// types
import { MovieType } from '@/lib/types';
import Pagination from '../Pagination';

const Hero = ({
    data,
}: {
    data: MovieType[]
}) => {
    const [page, setPage] = useState(0);

    const handleChangePage = (currentPage: number) => {
        setPage(-currentPage);
    };

  return (
    <>
        <div className=' h-[500px] flex items-center gap-[20px] flex-nowrap overflow-hidden w-full'>
                {data.map(movie => (
                    <div key={movie.title} className='flex items-center h-[364px] min-w-[541px] relative carousel-item'>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_POSTER_BASE_URL}/${movie.poster_path}`}
                            alt={`Poster of ${movie.title}`}
                            width='243px'
                            height='364px'
                            containerStyle=' w-[243px] h-[364px]'
                        />
                        <div className=' bg-black flex flex-col flex-grow h-[324px] px-[25px] py-[20px] text-textWhite'>
                            <div className=' flex items-center gap-[10px]'>
                                <Image
                                    src='/icons/star_icon.svg'
                                    alt='Star Icon'
                                    width='21px'
                                    height='21px'
                                    containerStyle=' w-[21px] h-[21px]'
                                />
                                <span className=' text-[18px] font-[700]'>
                                    {movie.vote_average}
                                </span>
                            </div>
                            <span className=' font-[600] text-[28px]'>
                                {movie.title}
                            </span>
                            <div className=' my-[10px]'>
                                <span className=' text-[16px]'>{movie?.release_date.substring(0, 4)}</span>
                            </div>
                            <span className=' text-[12px]'>
                                {movie.overview}
                            </span>
                        </div>
                    </div>
                ))}
        </div>
        <div className=' w-full flex justify-center'>
            <Pagination
                currentPage={(-page)}
                onClick={handleChangePage}
                totalPages={4}
            />
        </div>
        <style jsx>
            {`
                .carousel-item {
                    translate: ${(0.8 + page) * 100}%;
                    transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
                }
            `}
         </style>
    </>
  )
}

export default Hero