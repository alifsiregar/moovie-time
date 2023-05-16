import clsx from 'clsx';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const Dropdown = ({
    customStyle,
}: {
    customStyle: string;
}) => {
  return (
    <div className={twMerge(clsx('', customStyle))}>
        <span>
            Dropdown
        </span>
    </div>
  )
}

export default Dropdown