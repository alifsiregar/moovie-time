import clsx from 'clsx';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const Checkbox = ({
  text,
  customStyle,
}: {
  text: string;
  customStyle: string;
}) => {
  return (
    <div className={twMerge(clsx('flex items-center justify-between', customStyle))}>
      <span className=' font-[300]'>
        {text}
      </span>
      <input
        type='checkbox'
        className=' cursor-pointer'
      />
    </div>
  )
}

export default Checkbox