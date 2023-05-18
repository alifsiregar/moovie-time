import clsx from 'clsx';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const Checkbox = ({
  text,
  customStyle,
  checked,
  onChange,
}: {
  text: string;
  customStyle: string;
  checked: boolean;
  onChange: (e: any) => void
}) => {
  return (
    <div className={twMerge(clsx('flex items-center justify-between', customStyle))}>
      <span className=' font-[300]'>
        {text}
      </span>
      <input
        type='checkbox'
        className=' cursor-pointer'
        checked={checked}
        onChange={onChange}
      />
    </div>
  )
}

export default Checkbox