import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

// components
import Image from "@/components/Image";
import Searchbar from "./components/Searchbar";
import CategoriesDropdown from './components/CategoriesDropdown';

// consts
const DEFAULT_CATEGORIES = [
  'ACTION',
  'ADVENTURE',
  'ANIMATION',
  'COMEDY',
  'CRIME',
  'DOCUMENTARY',
  'DRAMA',
  'FAMILY',
  'FANTASY',
  'HISTORY',
  'HORROR',
];

const Header = () => {

  const router = useRouter();
  const dropdownMenuRef = useRef();

  const [showCategories, setShowCategories] = useState<boolean>(false);

  const handleMenuRedirect = (path: string) => {
    router.push(path);
    setShowCategories(false);
  };

  const handleChangeCategories = (param: boolean) => {
    setShowCategories(param);
  }

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
          <CategoriesDropdown 
            onClick={handleChangeCategories}
            categories={DEFAULT_CATEGORIES}
            showCategories={showCategories}
            ref={dropdownMenuRef}
          />
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