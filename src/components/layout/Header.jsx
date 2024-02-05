import { SearchIcon } from "../icons/Search";
import Link from "next/link";
export const Header = ({ onchange }) => {
  return (
    <div className="bg-white  sticky top-0 z-20">
      <div className="max-w-screen-xl m-auto py-8">
        <div className="">
          <div className="container flex justify-between">
            <img src="/MetaBlogLogo.svg" alt="" />
            <div className="flex gap-10 text-[#3B3C4A]">
              <Link href="/">Home
              </Link>
              <Link href="/blogList">Blog
              </Link>
              <Link href="/contactUs">Contact
              </Link>
            </div>
            <div className="rounded-md bg-gray-100 flex items-center w-[166px] h-9 gap-[9px] py-2 pr-2 pl-4">
              <form
                className="flex justify-between items-center gap-3"
                action="/action_page.php"
              >
                <input
                  onChange={onchange}
                  className="w-[114px] bg-gray-100"
                  type="text"
                  placeholder="Search"
                  name="search"
                ></input>
                <button type="submit">
                  <SearchIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
