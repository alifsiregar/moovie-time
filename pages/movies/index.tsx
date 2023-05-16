// components
import MovieCard from "@/components/MovieCard";
import Title from "@/components/Title";
import SortingMenu from "./components/SortingMenu";
import Button from "@/components/Button";

const Movies = () => {
  return (
    <div className="pt-[80px] relative before:content-[''] before:absolute before:h-[323px] before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-bgGray-100 before:z-0">
      <div className=" px-[120px] pb-[93px]">
        <Title
          text="Movies"
          customStyle="text-[36px] before:bottom-[55px]"
        />
        <div className="flex gap-[30px] mt-[60px]">
          <SortingMenu />
          <div className=" flex flex-col gap-[63px] items-center">
            <div className="min-h-[120px] text-textWhite grid grid-cols-4 gap-y-[27px] gap-x-[20px]">
              {new Array(10).fill(0).map((_, idx) => {
                return(
                  <MovieCard key={String(idx)} />
                )
              })}
            </div>
            <Button
              option={1}
            >
              <span className=" text-[14px] font-[500] text-textWhite">
                Load More
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Movies;