// components
import MovieCard from "@/components/MovieCard";

export default function Home() {
  return (
    <>
    <div className="px-[120px] pb-[120px] flex flex-col relative before:content-[''] before:h-[333px] before:bg-bgGray-100 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-[15px]">
      <div className="relative mt-[120px]">
        <span className=" relative text-textWhite font-[500] text-[24px] before:content-[''] before:w-[112px] before:h-[6px] before:bg-[#E74C3C] before:absolute before:bottom-[45px]">
          Discover Movies
        </span>
        <div className="mt-[43px] relative min-h-[120px] text-textWhite grid grid-cols-5 gap-y-[37px] gap-x-[25px]">
          {new Array(10).fill(0).map((_, idx) => {
            return(
              <MovieCard key={String(idx)} />
            )
          })}
      </div>
      </div>
    </div>
    </>
  )
};
