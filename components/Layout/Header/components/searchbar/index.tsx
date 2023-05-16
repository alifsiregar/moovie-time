// components
import Image from "@/components/Image";

const Searchbar = () => {
  return (
    <div className=' flex items-center flex-grow bg-bgGray-300 ml-[37px] mr-[38px] rounded-[4px] px-[12px] py-[7px]'>
     <Image
        src="/icons/movie_icon.png"
        width="w-[24px]"
        height="h-[24px]"
        alt="Category Header Menu Icon"
      />
      <input
        className="w-full bg-transparent border-none mx-[15px]"
      />
     <Image
        src="/icons/finder_icon.png"
        width="w-[16px]"
        height="h-[16px]"
        alt="Category Header Menu Icon"
      />
    </div>
  )
}

export default Searchbar