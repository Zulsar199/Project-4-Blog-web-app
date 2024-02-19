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
            <div className="flex gap-[20px]">
              <button onClick={() => filteredTag("")}>All</button>
              <button onClick={() => filteredTag("html")}>Html</button>
              <button onClick={() => filteredTag("css")}>Css</button>
              <button onClick={() => filteredTag("javascript")}>
                Javascript
              </button>
              <button onClick={() => filteredTag("github")}>Github</button>
              <button onClick={() => filteredTag("next.js")}>Next.Js</button>
              <button onClick={() => filteredTag("tailwindcss")}>
                TailwindCss
              </button>
            </div>
            <Link href="/blogList">View All</Link>
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
    <div className="max-w-screen-xl m-auto py-[50px]">
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
                position="Technology"
                title={article.title}
                date={article.readable_publish_date}
              />
            );
          })}
        </div>
      </div>
      <div className="text-[#696A75] rounded-md px-5 py-3 border border-gray-100 w-[fit-content] m-auto my-[50px]">
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
};
