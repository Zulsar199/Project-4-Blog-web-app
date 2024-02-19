// import { TrendingData } from "../data/TrendingData";
import { TrendingCard } from "../ui/TrendingCard";
import { useContext } from "react";
import { FirstContext } from "../utils/context";

export const Trending = () => {
  const { trendingArticles } = useContext(FirstContext);
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="container m-auto flex flex-col gap-[30px] max-[429px]:px-5">
        <div className="text-2xl font-bold">Trending</div>
        <div className="grid lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-5 sm:grid-cols-2 sm:grid-rows-2 sm:gap-[20px] max-[429px]:gap-3">
          {trendingArticles.map((article) => {
            return (
              <TrendingCard
                picture={article.cover_image || "/TrendingRectangle38.png"}
                position={article.tags || "Technology"}
                title={article.title}
                id={article.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
