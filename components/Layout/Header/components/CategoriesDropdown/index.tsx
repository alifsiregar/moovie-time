/* eslint-disable react-hooks/exhaustive-deps */
import { useRef,  useEffect } from "react";

// components
import Image from "@/components/Image";
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const CategoriesDropdown = ({
    onClick,
    showCategories,
    categories,
    ref,
}: {
    onClick: (param:boolean) => void,
    showCategories: boolean,
    categories: string[],
    ref: any
}) => {

    const dropdownMenuRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (e: any) => {
        if (
            dropdownMenuRef.current &&
            !dropdownMenuRef.current.contains(e.target as Node)
        ) {
            onClick(false);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
          document.addEventListener('click', handleOutsideClick, false);
        }
    
        return () => {
            if (typeof window !== "undefined") {
            document.removeEventListener('click', handleOutsideClick, false);
            }
        };
    }, []);

  return (
    <div className="relative mr-[48px]">
        <div onClick={() => onClick(!showCategories)} ref={dropdownMenuRef} className='cursor-pointer flex gap-[11px] justify-center items-center'>
            <Image
                src="/icons/grid_icon.png"
                width="20px"
                height="20px"
                alt="Category Header Menu Icon"
                containerStyle="w-[20px] h-[20px]"
            />
            <span>
                Categories
            </span>
        </div>
        <div className={twMerge(clsx(
            ' absolute bg-white w-full z-50 rounded-[6px] shadow-2xl text-[#1E232B] py-[15px] pl-[14px] duration-500 transition-all',
            {
            'top-0 invisible opacity-0': !showCategories,
            'top-[28px] visible opacity-100': showCategories,
            }
        ))}>
            <ul>
            {categories.map((item:string, idx: number) => (
                <li key={String(idx)} className=' mb-[10px] font-[600] text-[12px] last:mb-0 cursor-pointer'>
                {item}
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default CategoriesDropdown