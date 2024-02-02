export const TrendingCard = ({id, picture, position, title}) =>{
    return(
        <div id={id} className="relative flex items-end justify-center h-[320px]">
            <div className="h-[320px] bg-black rounded-xl">
                <img className="w-full h-full top-0 left-0 opacity-50 z-5 rounded-xl" src={picture} alt="" />
            </div>
            <div className="absolute flex flex-col w-[90%] h-2/5 mb-[15px] gap-4">
                <div className="bg-[#4B6BFB] text-white py-[4px] px-[10px] w-[fit-content] rounded-xl">{position}</div>
                <div className="text-white text-lg font-semibold">{title}</div>
            </div>
        </div>
    )
}