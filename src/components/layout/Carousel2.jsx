import { useEffect, useState } from "react";
import { Left } from "../icons/Left";
import { Right } from "../icons/Right";
export const Carousel2 = ({ array }) => {
  console.log(array);
  let autoSlide = false;
  let autoSlideInterval = 3000;
  const [carousel, setCarousel] = useState("");
  const [move, setMove] = useState(0);
  const left = () => {
    setCarousel(`translateX(${move}px)`);
    setMove((prevVal) => prevVal + 100);
  };
  const right = () => {
    setCarousel(`translateX(-${move}px)`);

    setMove((prevVal) => prevVal - 100);
  };
  useEffect(() => {
    left;
    right;
    if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval);
return() => clearInterval(slideInterval)
    
  }, [carousel]);
  return (
    <div className="py-[50px] ">
      <div  className="flex flex-col justify-center items-center gap-[11px] ">
        <div autoSlide={true} autoSlideInterval={1000} style={{transform: `translateX(${move}%)`}} className={`min-w-screen-xl max-w-[500%] flex  transition ease-in-out duration-300`}>
          {array.map((el) => {
            return (
              <div className=" flex items-center justify-center min-w-full carousel ">
                <div className="relative ">
                  <div className="">
                    <img
                      className="rounded-xl max-w-screen-xl h-[600px] z-1"
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
              </div>
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
