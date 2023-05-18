// components
import Image from "@/components/Image";

const Footer = () => {
  return (
    <div className="min-h-[160px] px-[120px] bg-bgGray-400 text-[#929292] flex items-center justify-between">
      <span>
        ©  2021 MoovieTime. All rights reserved.
      </span>
      <Image
        src="/images/company_gray_logo.png"
        width="88px"
        height="24px"
        alt="Category Header Menu Icon"
        containerStyle="w-[88px] h-[24px]"
      />
      <span>
        Made with Next JS.
      </span>
    </div>
  )
}

export default Footer