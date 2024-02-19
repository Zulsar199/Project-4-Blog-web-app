import Link from "next/link";
import { useContext } from "react";
import { FirstContext } from "../utils/context";
export const TrendingCard = ({ id, picture, position, title }) => {
  const { isLoading } = useContext(FirstContext);
  if (isLoading) {
    return (
      <div className="flex gap-[10px] p-[20px] w-[300px]">
        <div className="border border-gray-300 shadow rounded-md  w-[300px] h-[300px]">
          <div className="animate-pulse flex ">
            <div className="flex-1 space-y-2 py-1 relative">
              <div className="space-y-3 ">
                <div className="h-[290px] bg-slate-300 rounded"></div>
              </div>
              <div className="absolute bottom-[20px] left-[10px] w-[90%] h-[30%] flex flex-col justify-between">
                <div className="h-[20px] bg-slate-400 rounded"></div>
                <div className="flex justify-between">
                  <div className="h-[20px] w-[67%] bg-slate-400 rounded"></div>
                  <div className="h-[20px] w-[30%] bg-slate-400 rounded"></div>
                </div>
                <div className="h-[20px] bg-slate-400 rounded"></div>
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
        className="relative flex items-end justify-center h-[280px]  hover:h-[283px] active:opacity-35"
      >
        <div className="h-[280px] w-full bg-black rounded-xl">
          <img
            className="h-full lg:w-[300px] w-full top-0 left-0 opacity-30  z-5 rounded-xl"
            src={picture}
            alt=""
          />
        </div>
        <div className="absolute flex flex-col w-[90%] h-2/5 mb-[15px] gap-4">
          <div className="bg-[#4B6BFB] text-white py-[4px] px-[10px] w-[fit-content] rounded-xl">
            {position.split(",")[0]}
          </div>
          <div className="text-white text-lg font-semibold">{title}</div>
        </div>
      </div>
    </Link>
  );
};
