import { useRouter } from 'next/router';

// components
import Image from "@/components/Image";
import Searchbar from "./components/searchbar";

const Header = () => {

  const router = useRouter();

  const handleMenuRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div className=" bg-bgGray-100 text-textWhite flex py-[18px] px-[120px] justify-between">
        <Image
          src="/images/company_logo.png"
          width="112px"
          height="31px"
          alt="Moviee Time Logo"
          containerStyle="w-[112px] h-[31px] cursor-pointer"
          onClick={() => handleMenuRedirect('/')}
        />
        <Searchbar />
        <div className=" uppercase flex justify-center items-center">
          <div className="flex gap-[11px] mr-[48px] justify-center items-center">
            <Image
              src="/icons/grid_icon.png"
              width="20px"
              height="20px"
              alt="Category Header Menu Icon"
              containerStyle="w-[20px] h-[20px]"
            />
            <span>
              Categories
            </span>
          </div>
          <div className=" flex gap-[39px]">
            <span onClick={() => handleMenuRedirect('/movies')} className="cursor-pointer">
              Movies
            </span>
            <span onClick={() => handleMenuRedirect('/tv-shows')} className="cursor-pointer">
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