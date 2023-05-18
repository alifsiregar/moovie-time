import { useState, ChangeEvent, useEffect } from "react";
import { useDebounce } from "@/lib/utils";
import { BeatLoader } from "react-spinners";

// components
import Image from "@/components/Image";

// service
import { useQueryMovieSearch } from "@/lib/services";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Searchbar = () => {

  const [query, setQuery] = useState<string>("");
  const [showResults, setShowResult] = useState<boolean>(false);
  const debouncedQuery = useDebounce(query, 1000);

  const {
    refetch,
    data,
    isLoading,
    isRefetching,
    isFetching
  } = useQueryMovieSearch(debouncedQuery);

  const handleQueryMovie = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: {
        value,
      }
    } = e;

    setQuery(value);
  };

  useEffect(() => {
    if(debouncedQuery){
      refetch();
    }
  }, [refetch, debouncedQuery]);

  useEffect(() => {
    if(query.length > 3){
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, [query]);

  return (
    <div className='relative flex items-center flex-grow bg-bgGray-300 ml-[37px] mr-[38px] rounded-[4px] px-[12px] py-[7px]'>
     <Image
        src="/icons/movie_icon.png"
        width="24px"
        height="24px"
        alt="Category Header Menu Icon"
        containerStyle="w-[24px] h-[24px]"
      />
      <input
        className="w-full bg-transparent border-none mx-[15px]"
        value={query}
        onChange={handleQueryMovie}
      />
     <Image
        src="/icons/finder_icon.png"
        width="16px"
        height="16px"
        alt="Category Header Menu Icon"
        containerStyle="w-[16px] h-[16px]"
      />
      <div className={twMerge(clsx(
         "absolute w-full ml-[-12px] bg-black rounded-bl-[8px] rounded-br-[8px] z-[101] p-[18px] transition-all duration-500",
         {
          'opacity-0 invisible top-0': !showResults,
          'opacity-100 visible top-[38px]': showResults,
         }
      ))}>
        <ul>
          {!isLoading && !isRefetching && !isFetching ? data?.results?.map((item: {
            [key: string]: string;
            title: string;
          }, idx: number) => (
            <li key={String(idx)} className="mb-[10px] last:mb-0 cursor-pointer">
              {item.title}
            </li>
          )) : (
            <li className="mb-[10px] last:mb-0 cursor-pointer">
              <BeatLoader color="#FFFFFF" />
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Searchbar