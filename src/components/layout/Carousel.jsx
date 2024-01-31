import { Left } from "../icons/Left";
import { Right } from "../icons/Right";
export const Carousel = ({ array }) => {
  console.log(array);
  return (
    <div className="m-auto py-[50px]">
      <div className="flex flex-col overflow-hidden gap-[11px]">
        <div className="overflow-hidden w-[500%] flex">
        {array.map((el) => {
          return(<div className="relative max-w-screen-xl m-auto">
          <div className="">
            <img
              className="rounded-xl w-full h-[600px] z-1"
              src={el.cover_image}
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

            <div className="text-gray-400">{el.readable_publish_date}</div>
          </div>
        </div>);
          
        })}
        </div>
        

        <div className="flex justify-end gap-[9px]  container">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
};
