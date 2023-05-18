import Image from "@/components/Image";

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
                containerStyle="h-[330px] w-[220px]"
            />
            <div className='absolute bg-[#1e232bcc] bg-opacity-[0.8] px-[10px] py-[5px] top-0 right-0'>
                {rating}
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