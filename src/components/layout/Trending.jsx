// import { TrendingData } from "../data/TrendingData";
import { TrendingCard } from "../ui/TrendingCard";

export const Trending = ({array}) => {

    return(
        <div className="max-w-screen-xl m-auto">
            <div className="container flex flex-col gap-[30px]">
                <div className="text-2xl font-bold">Trending</div>
                <div className="grid grid-cols-4 gap-x-5">{array.map((article) => {
                    return(
                        <TrendingCard picture={article.cover_image || "/TrendingRectangle38.png"} position="Technology" title={article.title}/>
                    )
                })}</div>
                
            </div>

        </div>
    )
}