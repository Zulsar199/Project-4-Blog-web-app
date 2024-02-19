// import { TrendingData } from "../data/TrendingData";
import { TrendingCard } from "../ui/TrendingCard";
import { useContext } from "react";
import { FirstContext } from "../utils/context";

export const Trending = ({ array }) => {
  const { trendingArticles } = useContext(FirstContext);
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="container m-auto flex flex-col gap-[30px]">
        <div className="text-2xl font-bold">Trending</div>
        <div className="grid grid-cols-4 gap-x-5">
          {trendingArticles.map((article) => {
            return (
              <TrendingCard
                picture={article.cover_image || "/TrendingRectangle38.png"}
                position={article.tags || "Technology"}
                title={article.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
