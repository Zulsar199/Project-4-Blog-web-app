import { SearchIcon } from "../icons/Search";
import Link from "next/link";
import { useContext, useState } from "react";
import { FirstContext } from "../utils/context";
import { Menu } from "../icons/Menu";
import { Close } from "../icons/Close";
export const ContactHeader = () => {
  const { handleSearch } = useContext(FirstContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const handleOpen = () => {
    setShowMenu(!showMenu);
    setTimeout(() => {
      setShowSideBar(!showSideBar);
    }, 100);
  };
  const handleClose = () => {
    setShowSideBar(!showSideBar);
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 400);
  };
  return (
    <div className={`bg-white  sticky top-0 z-20`}>
      <div className="max-w-screen-xl m-auto py-8">
        <div className="container m-auto flex justify-between max-[429px]:px-5">
          <img
            className="max-[429px]:w-[150px]"
            src="/MetaBlogLogo.svg"
            alt=""
          />
          <div className="flex gap-10 text-[#3B3C4A] hover:*:text-[#4B6BFB] items-center max-[429px]:hidden">
            <Link href="/">Home</Link>
            <Link href="/blogList">Blog</Link>
            <Link href="/contactUs">Contact</Link>
          </div>

          <div className="hidden max-[429px]:block">
            <button
              onClick={handleOpen}
              className={`p-1.5 ${showSideBar ? "hidden" : "block"}`}
            >
              <Menu stroke={"black"} />
            </button>
            <button
              onClick={handleClose}
              className={`p-1.5 ${showSideBar ? "block" : "hidden"}`}
            >
              <Close stroke={"black"} />
            </button>
          </div>
        </div>
      </div>
      {/* -----modal---- */}
      {showMenu && (
        <div className="absolute w-full h-full z-[4]">
          <div className="relative  top-0 left-0  w-full h-full">
            <div
              onClick={handleClose}
              className={` ${
                showSideBar && "bg-black"
              }  w-[100vw] bg-opacity-40 h-[100vh] absolute left-0 top-0 transition-all duration-300  ease-in-out z-[3]`}
            ></div>

            {/* -------------modal-------------- */}
            <div className="absolute top-0 right-0 overflow-hidden w-[70vw] h-[100vh] z-7">
              <div
                className={`bg-white h-[100vh] w-[100%] absolute top-0 z-[7] right-0 ${
                  showSideBar ? "translate-x-0" : "translate-x-[100vw]"
                } transition-all duration-300  ease-in-out`}
              >
                <div className="flex justify-between p-4 border-b-[1px] border-solid border-gray-200">
                  <h2 className="flex items-center font-bold">Web App</h2>
                </div>
                <div className="*:py-.5 p-4 flex flex-col gap-4 border-b-[1px] border-solid border-gray-200">
                  <Link href="/">Home</Link>
                  <Link href="/blogList">Blog</Link>
                  <Link href="/contactUs">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
