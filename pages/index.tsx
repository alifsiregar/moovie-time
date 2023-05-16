// components
import MovieCard from "@/components/MovieCard";
import Title from "@/components/Title";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
    <div className="px-[120px] pb-[120px] flex flex-col relative before:content-[''] before:h-[333px] before:bg-bgGray-100 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-[15px]">
      <div className="relative mt-[120px]">
        <div className=" flex justify-between">
          <Title
            text="Discover Movies"
          />
          <div className=" flex gap-[20px]">
            <Button
              option={1}
              customStyle=" px-[16px]"
            >
              <span className=" text-[14px] font-[500] text-textWhite">
                Popularity
              </span>
            </Button>
            <Button
              option={2}
              customStyle=" pl-[18px] pr-[15px]"
            >
              <span className=" text-[14px] font-[500] text-textWhite">
                Release Date
              </span>
            </Button>
          </div>
        </div>
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
