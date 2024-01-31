import { BlogPostCard } from "../ui/BlogPostCard";

export const AllBlogPost = ({ array, loadMore }) => {
  return (
    <div className="max-w-screen-xl m-auto py-[50px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="font-bold text-2xl">All Blog Post</div>
          <div className="*:text-#495057 flex justify-between">
            <div className="flex gap-[20px]">
              <button>All</button>
              <button>Design</button>
              <button>Travel</button>
              <button>Fashion</button>
              <button>Technology</button>
              <button>Branding</button>
            </div>
            <button>View All</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {array.map((article) => {
            return (
              <BlogPostCard
                id={article.id}
                picture={article.cover_image}
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
