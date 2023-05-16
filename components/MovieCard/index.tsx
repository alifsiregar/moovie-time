import React from 'react'

const MovieCard = () => {
  return (
    <div className='flex flex-col'>
        <div className='relative w-[220px] h-[330px] bg-green-500'>
            <div className='absolute bg-[#1e232bcc] bg-opacity-[0.8] px-[10px] py-[5px] right-0'>
                10.0
            </div>
        </div>
        <div className='flex flex-col mt-[13px]'>
            <span className=' text-textWhite font-[500]'>
                This is the Title
            </span>
            <span className=' text-[#929292]'>
                Year
            </span>
        </div>
    </div>
  )
}

export default MovieCard