// components
import Image from "@/components/Image";
import Button from "@/components/Button";
import clsx from "clsx";

const MovieCard = ({
    image,
    rating,
    title,
    year
}: {
    image: string;
    rating: number;
    title: string;
    year: string;
}) => {
  return (
    <div className='flex flex-col'>
        <div className='relative w-[220px] h-[330px]'>
            <Image
                src={image}
                width="220px"
                height="330px"
                alt={`Poster of ${title}`}
                containerStyle="h-[330px] w-[220px] visible opacity-100 hover:invisible hover:opacity-0"
            />
            <div className={clsx(
                'absolute bg-[#1e232bcc] bg-opacity-[0.8] px-[10px] py-[5px] top-0 right-0 visible opacity-100',
                'hover:invisible hover:opacity-0'
            )}>
                {rating}
            </div>
            <div className={clsx(
                'absolute visible opacity-0 flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 bg-[#2e2e2e] duration-300 transition-all',
                'hover:visible hover:opacity-100'
            )}>
                <div className=" flex items-center font-[600] text-[24px] gap-[10px] mb-[45px]">
                    <Image
                        src='/icons/star_icon.svg'
                        alt='Star Icon'
                        width='32px'
                        height='32px'
                        containerStyle=' w-[32px] h-[32px]'
                    />
                    <span>
                        {rating}
                    </span>
                </div>
                <Button
                    option={1}
                    onClick={() => {}}
                >
                    <span className=" font-[700] text-[14px]">
                        VIEW
                    </span>
                </Button>
            </div>
        </div>
        <div className='flex flex-col mt-[13px]'>
            <span className=' text-textWhite font-[500]'>
                {title}
            </span>
            <span className=' text-[#929292]'>
                {year}
            </span>
        </div>
    </div>
  )
}

export default MovieCard