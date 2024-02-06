import Link from "next/link"

export const BlogPostCard = ({ picture, position, title, date, id }) => {
  return (
    <Link href={{pathname : "/single-post", query: {Id: id}}}>
    <div id={id} className=" w-[100%] p-4 flex flex-col justify-between h-[450px] border border-gray-100 rounded-xl ">
      <div className="w-full h-[50%]">
        <img className="w-full h-full" src={picture} alt="" />
      </div>
      <div className="flex flex-col justify-between gap-5 p-2 h-[45%]">
        <div className="flex flex-col gap-4">
          <div className="text-[#4B6BFB] bg-gray-100 py-[4px] px-[10px] w-[fit-content] rounded-xl">
            {position}
          </div>
          <div className="'font-semibold text-2xl">{title}</div>
        </div>
        <div className="text-gray-400">{date}</div>
      </div>
    </div>
    </Link>
  );
};
