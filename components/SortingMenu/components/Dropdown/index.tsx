import clsx from 'clsx';
import { useState } from 'react'
import { twMerge } from 'tailwind-merge';

// component
import Image from '@/components/Image';

const Dropdown = ({
    handleSelectSort,
    options,
    customStyle,
}: {
    handleSelectSort: (e: any) => void,
    options: {
      value: string,
      label: string,
    }[];
    customStyle: string;
}) => {

  const [show, setShow] = useState<boolean>(false);
  const [selected, setSelected] = useState<{
    value: string;
    label: string;
  }>(options[0])

  const handleShowDropdown = () => {
    setShow(!show);
  }

  const handleChangeSort = (sort: {
    value: string;
    label: string;
  }) => {
    setSelected(sort);
    handleSelectSort(sort);
    setShow(false);
  };

  return (
    <div className='relative z-50'>
      <div onClick={handleShowDropdown} className={twMerge(clsx('flex gap-[20px] relative z-50 justify-between items-center cursor-pointer w-full  min-w-max bg-[#2f363f] h-[36px] rounded-[4px] pb-[10px] pt-[8px] pl-[17px] pr-[10px]', customStyle))}>
          <span className=' text-[13px]'>
              {selected.label}
          </span>
          <Image
            src='/icons/down_arrow_icon.png'
            alt='Dropdown arrow down'
            width='10px'
            height='10px'
            containerStyle={twMerge(clsx(
              'w-[10px] h-[10px] duration-300',
              {
                'rotate-180': show,
                'rotate-0': !show,
              }
            ))}
          />
      </div>
      <div className={twMerge(clsx(
        ' bg-[#111419] rounded-[4px] p-[15px] absolute w-full duration-300',
        {
          'visible opacity-1 top-[36px]': show,
          'invisible opacity-0 top-0': !show,
        }
      ))}>
        <ul>
          {options.map((option) => (
            <li onClick={() => handleChangeSort(option)} className=' mb-[12px] last:mb-0 text-[14px] cursor-pointer' key={option.label}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown