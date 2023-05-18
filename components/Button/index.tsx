import clsx from 'clsx';
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    customStyle,
    option,
    onClick,
}: { children: ReactNode; customStyle?: string; option: 1 | 2; onClick: () => void}) => {
  return (
    <button 
      className={twMerge(clsx(
        'rounded-[32px] max-w-max py-[6px] px-[36px] cursor-pointer',
        customStyle,
        {
            'bg-[#FF0000]': option === 1,
            'bg-[#21252b]': option === 2,
        }
      ))}
      onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button