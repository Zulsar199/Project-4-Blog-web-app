import { BlogPostCard } from "../ui/BlogPostCard";
import { useContext } from "react";
import { FirstContext } from "../utils/context";
import Link from "next/link";

export const AllBlogPost = () => {
  const { filteredArray, loadMore, displayBlock, filteredTag } =
    useContext(FirstContext);
  console.log(displayBlock);
  return (
    <div className="max-w-screen-xl m-auto py-[50px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="font-bold text-2xl">All Blog Post</div>
          <div className="*:text-#495057 flex justify-between">
            <div className="flex gap-[20px] *:rounded-[10px] *:py-[4px] *:px-[10px]">
              <button
                className="hover:bg-gray-100"
                onClick={() => filteredTag("")}
              >
                All
              </button>
              <button
                className="hover:bg-gray-100"
                onClick={() => filteredTag("html")}
              >
                Html
              </button>
              <button
                className="hover:bg-gray-100"
                onClick={() => filteredTag("css")}
              >
                Css
              </button>
              <button
                className="hover:bg-gray-100"
                onClick={() => filteredTag("javascript")}
              >
                Javascript
              </button>
              <button
                className="hover:bg-gray-100"
                onClick={() => filteredTag("git")}
              >
                Github
              </button>
              <button
                className="hover:bg-gray-100"
                onClick={() => filteredTag("next.js")}
              >
                Next.Js
              </button>
              <button
                className="hover:bg-gray-100"
                onClick={() => filteredTag("tailwindcss")}
              >
                TailwindCss
              </button>
            </div>
            <Link
              className="bg-white hover:bg-black hover:text-white rounded-[10px] py-[4px] px-[10px]"
              href="/blogList"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
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

      <div
        style={{ display: displayBlock }}
        className="text-[#696A75] rounded-md px-5 py-3 border border-gray-100 w-[fit-content] m-auto my-[50px]"
      >
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
};

export const AllBlogPostList = () => {
  const { filteredArray, loadMore } = useContext(FirstContext);
  return (
    <div className="max-w-screen-xl container m-auto py-[50px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="font-bold text-2xl">All Blog Post</div>
        </div>
        <div className="grid grid-cols-3 gap-5">
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
      <div className="hover:bg-black">
        <button
          className="text-[#696A75] rounded-md px-5 py-3 border border-gray-100 w-[fit-content] m-auto my-[50px] hover:bg-gray-100"
          onClick={loadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
