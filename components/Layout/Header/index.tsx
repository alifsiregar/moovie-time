// components
import Image from "@/components/Image";
import Searchbar from "./components/searchbar";

const Header = () => {
  return (
    <div className=" bg-bgGray-100 text-textWhite flex py-[18px] px-[120px] justify-between">
        <Image
          src="/images/company_logo.png"
          width="w-[112px]"
          height="h-[31px]"
          alt="Moviee Time Logo"
        />
        <Searchbar />
        <div className=" uppercase flex justify-center items-center">
          <div className="flex gap-[11px] mr-[48px] justify-center items-center cursor-pointer">
            <Image
              src="/icons/grid_icon.png"
              width="w-[20px]"
              height="h-[20px]"
              alt="Category Header Menu Icon"
            />
            <span>
              Categories
            </span>
          </div>
          <div className=" flex gap-[39px]">
            <span className="cursor-pointer">
              Movies
            </span>
            <span className="cursor-pointer">
              TV Shows
            </span>
            <span className="cursor-pointer">
              Login
            </span>
          </div>
        </div>
    </div>
  )
}

export default Header