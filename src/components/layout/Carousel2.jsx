import { useEffect, useState } from "react";
import { Left } from "../icons/Left";
import { Right } from "../icons/Right";
import { useContext } from "react";
import { FirstContext } from "../utils/context";
import Link from "next/link";
export const Carousel2 = () => {
  const { carouselArticles } = useContext(FirstContext);
  const [carousel, setCarousel] = useState("");
  const [move, setMove] = useState(0);
  let carouselCss = "carousel";
  const left = () => {
    setCarousel(`translateX(${move}px)`);
    setMove((prevVal) => prevVal + 100);
    carouselCss = "";
    console.log("left ajillaa");
    console.log(carouselCss);
  };
  const right = () => {
    setCarousel(`translateX(-${move}px)`);
    setMove((prevVal) => prevVal - 100);
    carouselCss = "";
  };
  useEffect(() => {
    left;
    right;
  }, [carousel]);
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
  return (
    <div className="max-w-screen-xl m-auto py-[50px] ">
      <div className="flex flex-col justify-center overflow-hidden items-center gap-[11px] ">
        <div
          style={{ transform: `translateX(${move}%) ${carouselCss}` }}
          className={` flex transition ease-in-out duration-300 h-[600px] ${carouselCss} `}
        >
          {carouselArticles.map((el) => {
            return (
              <Link
                id={el.id}
                className=" flex items-center justify-center min-w-full "
                href={{ pathname: "/single-post", query: { Id: el.id } }}
              >
                  <div className="relative min-h-full">
                    <div className="min-h-full">
                      <img
                        className="rounded-xl min-w-full h-[600px]  z-1"
                        src={el.cover_image || "/CarouselImage.png"}
                        alt=""
                      />
                    </div>
                    <div className="rounded-xl bg-white p-10 w-1/2 absolute flex flex-col justify-between bottom-[13px] left-[11px]">
                      <div className="flex flex-col gap-4 mb-6">
                        <div className="bg-[#4B6BFB] text-white py-[4px] px-[10px] w-[fit-content] rounded-xl">
                          Technology
                        </div>
                        <div className="font-bold text-4xl">{el.title}</div>
                      </div>

                      <div className="text-gray-400">
                        {el.readable_publish_date}
                      </div>
                    </div>
                  </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-end gap-[9px] max-w-screen-xl container">
          <Left onclick={left} />
          <Right onclick={right} />
        </div>
      </div>
    </div>
  );
};
