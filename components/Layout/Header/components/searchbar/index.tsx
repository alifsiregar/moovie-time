// components
import Image from "@/components/Image";

const Searchbar = () => {
  return (
    <div className=' flex items-center flex-grow bg-bgGray-300 ml-[37px] mr-[38px] rounded-[4px] px-[12px] py-[7px]'>
     <Image
        src="/icons/movie_icon.png"
        width="24px"
        height="24px"
        alt="Category Header Menu Icon"
        containerStyle="w-[24px] h-[24px]"
      />
      <input
        className="w-full bg-transparent border-none mx-[15px]"
      />
     <Image
        src="/icons/finder_icon.png"
        width="16px"
        height="16px"
        alt="Category Header Menu Icon"
        containerStyle="w-[16px] h-[16px]"
      />
    </div>
  )
}

export default Searchbar