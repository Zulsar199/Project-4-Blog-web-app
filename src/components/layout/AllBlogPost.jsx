import { BlogPostCard } from "../ui/BlogPostCard";
import { useContext } from "react";
import { FirstContext } from "../utils/context";
import Link from "next/link";

export const AllBlogPost = () => {
  const { filteredArray, loadMore, displayBlock, filteredTag } =
    useContext(FirstContext);
  return (
    <div className="max-w-screen-xl m-auto py-[50px] max-[429px]:py-10">
      <div className="flex flex-col gap-8 max-[429px]:px-5">
        <div className="flex flex-col gap-8">
          <div className="font-bold text-2xl">All Blog Post</div>
          <div className="*:text-#495057 flex justify-between max-[429px]:hidden">
            <div className="flex lg:gap-[20px] *:rounded-[10px] *:py-[4px] *:px-[10px] hover:*:bg-gray-100 active:*:opacity-50 sm:w-[60%] sm:flex-wrap sm:gap-x-[10px]">
              <button onClick={() => filteredTag("")}>All</button>
              <button onClick={() => filteredTag("html")}>Html</button>
              <button onClick={() => filteredTag("css")}>Css</button>
              <button onClick={() => filteredTag("javascript")}>
                Javascript
              </button>
              <button onClick={() => filteredTag("git")}>Github</button>
              <button onClick={() => filteredTag("next.js")}>Next.Js</button>
              <button onClick={() => filteredTag("tailwindcss")}>
                TailwindCss
              </button>
            </div>
            <Link
              className="bg-white hover:bg-gray-200 rounded-[10px] py-[4px] px-[10px] active:opacity-30"
              href="/blogList"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 max-[429px]:grid-cols-1">
          {filteredArray.map((article) => {
            return (
              <BlogPostCard
                id={article.id}
                picture={article.cover_image || "/blogPostImg.png"}
                position={article.tags || "Technology"}
                title={article.title}
                date={article.readable_publish_date}
              />
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="text-[#696A75] rounded-md lg:px-5 lg:py-3 px-2 py-1 border border-gray-100 w-[fit-content] my-[50px] hover:bg-gray-100 active:opacity-50"
          onClick={loadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export const AllBlogPostList = () => {
  const { filteredArray, loadMore } = useContext(FirstContext);
  return (
    <div className="max-w-screen-xl container m-auto py-[50px] max-[429px]:py-10">
      <div className="flex flex-col gap-8 max-[429px]:px-5">
        <div className="flex flex-col gap-8">
          <div className="font-bold text-2xl">All Blog Post</div>
        </div>
        <div className="grid grid-cols-3 max-[429px]:grid-cols-1 gap-5">
          {filteredArray.map((article) => {
            return (
              <BlogPostCard
                id={article.id}
                picture={article.cover_image || "/blogPostImg.png"}
                position={article.tags || "Technology"}
                title={article.title}
                date={article.readable_publish_date}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="text-[#696A75] rounded-md lg:px-5 lg:py-3 px-2 py-1 border border-gray-100 w-[fit-content] my-[50px] hover:bg-gray-100 active:opacity-50"
          onClick={loadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
