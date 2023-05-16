import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Title = ({
    customStyle,
    text,
}: {
    customStyle?: string;
    text: string;
}) => {
  return (
    <span className={twMerge(clsx("relative text-textWhite font-[500] text-[24px] before:content-[''] before:w-[112px] before:h-[6px] before:bg-[#E74C3C] before:absolute before:bottom-[45px]", customStyle))}>
        {text}
    </span>
  )
}

export default Title