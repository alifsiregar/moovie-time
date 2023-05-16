import type { ReactNode } from "react";

// components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
    children,
}: {
    children: ReactNode
}) => {
  return (
    <div className="">
        <Header />
        <div className=" min-h-screen bg-bgGray-200">
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout;