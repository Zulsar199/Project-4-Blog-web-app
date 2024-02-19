import { useEffect, useState } from "react";
import { Left } from "../icons/Left";
import { Right } from "../icons/Right";
import { useContext } from "react";
import { FirstContext } from "../utils/context.jsx";
import Link from "next/link";
export const Carousel2 = () => {
  const { carouselArticles } = useContext(FirstContext);
  const [carousel, setCarousel] = useState("");
  const [move, setMove] = useState(0);
  const { isLoading } = useContext(FirstContext);
  let carouselCss = "carousel";

  // let carouselCss = {"
  //   animation: to-let 50s linear infinite ;
  //   animation-delay: 3s ;

  // @keyframes to-let {
  //   0% {
  //     transform: translateX(0%);
  //   }
  //   20% {
  //     transform: translateX(-100%);
  //   }
  //   40% {
  //     transform: translateX(-200%);
  //   }
  //   60% {
  //     transform: translateX(-300%);
  //   }
  //   80% {
  //     transform: translateX(-400%);
  //   }
  //   100% {
  //     transform: translateX(-500%);
  //   }
  // }"}
  if (isLoading) {
    return (
      <div className="max-w-screen-xl m-auto py-[50px] ">
        <div className="flex flex-col justify-center overflow-hidden items-center gap-[11px] ">
          <div
            className={` flex transition ease-in-out duration-300 w-full h-[600px]  `}
          >
            <div className="flex w-full">
              <div className="rounded-md w-full">
                <div className="animate-pulse flex ">
                  <div className="flex-1 space-y-2 py-1 relative">
                    <div className="space-y-3 ">
                      <div className="h-[600px] bg-slate-300 rounded"></div>
                    </div>

                    <div className="h-[200px] w-[500px] bg-slate-400 rounded absolute bottom-[30px] left-[30px] z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-screen-xl m-auto py-[50px] max-[429px]:hidden">
      <div className="flex flex-col justify-center overflow-hidden items-center gap-[11px] ">
        <div
          style={{ transform: `translateX(${move}%) ${carouselCss}` }}
          className={` flex transition ease-in-out duration-300 lg:h-[600px] h-[400px] ${carouselCss} `}
        >
          {carouselArticles.map((el) => {
            return (
              <Link
                id={el.id}
                className=" flex items-center justify-center min-w-full "
                href={{ pathname: "/single-post", query: { Id: el.id } }}
              >
                <div className="relative min-h-full active:opacity-50">
                  <div className="min-h-full">
                    <img
                      className="rounded-xl min-w-full lg:h-[600px] h-[400px] z-1"
                      src={el.cover_image || "/CarouselImage.png"}
                      alt=""
                    />
                  </div>
                  <div className="rounded-xl bg-white lg:p-10 sm:p-3 w-1/2 absolute flex flex-col justify-between bottom-[13px] left-[11px] lg:h-[40%] sm:h-1/3">
                    <div className="flex flex-col lg:gap-4 lg:mb-6 sm:gap-1">
                      <div className="bg-[#4B6BFB] text-white lg:py-[4px] lg:px-[10px] sm:py[2px] sm:px-[5px] w-[fit-content] lg:rounded-xl sm:rounded-md">
                        {el.tags.split(",")[0]}
                      </div>
                      <div className="font-bold lg:text-4xl sm:text-lg">
                        {el.title}
                      </div>
                    </div>

                    <div className="text-gray-400 sm:text-sm">
                      {el.readable_publish_date}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* <div className="flex justify-end gap-[9px] max-w-screen-xl container">
          <Left onclick={left} />
          <Right onclick={right} />
        </div> */}
      </div>
    </div>
  );
};
