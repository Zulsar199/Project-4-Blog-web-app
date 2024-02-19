import Link from "next/link";
import { useContext } from "react";
import { FirstContext } from "../utils/context";

export const BlogPostCard = ({ picture, position, title, date, id }) => {
  const { isLoading } = useContext(FirstContext);
  if (isLoading) {
    return (
      <div className="flex p-[20px]">
        <div className="border border-gray-300 shadow rounded-md  w-[500px] h-[450px]">
          <div className="animate-pulse flex ">
            <div className="flex-1 space-y-2 py-1">
              <div className="space-y-3">
                <div className="h-[250px] bg-slate-300 rounded"></div>
              </div>
              <div className="h-[20px] bg-slate-300 rounded mt-[40px]"></div>
              <div className="flex justify-between">
                <div className="h-[20px] w-[67%] bg-slate-300 rounded"></div>
                <div className="h-[20px] w-[30%] bg-slate-300 rounded"></div>
              </div>
              <div className="h-[20px] bg-slate-300 rounded"></div>
              <div className="h-[20px] bg-slate-300 rounded"></div>
              <div className="flex justify-between">
                <div className="h-[20px] w-[30%] bg-slate-300 rounded"></div>
                <div className="h-[20px] w-[67%] bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Link href={{ pathname: "/single-post", query: { Id: id } }}>
      <div
        id={id}
        className=" w-[100%] p-4 flex flex-col justify-between lg:h-[450px] sm:h-[280px] border border-gray-100 rounded-xl shadow-md hover:shadow-2xl active:bg-gray-100"
      >
        <div className="w-full h-[50%]">
          <img className="w-full h-full" src={picture} alt="" />
        </div>
        <div className="flex flex-col justify-between gap-5 sm:gap-2 p-2 h-[45%]">
          <div className="flex flex-col gap-4 sm:gap-2">
            <div className="flex">
              <div className="text-[#4B6BFB] bg-gray-100 lg:text-lg sm:text-sm py-[4px] px-[10px] sm:py[2px] sm:px-[5px] w-[fit-content] rounded-xl">
                {position.split(",")[0]}
              </div>
            </div>

            <div className="'font-semibold lg:text-2xl sm:text-base sm:max-h-[50px] lg:max-h-[70px] text-ellipsis overflow-hidden">
              {title}
            </div>
          </div>
          <div className="text-gray-400 lg:text-lg sm:text-sm">{date}</div>
        </div>
      </div>
    </Link>
  );
};
