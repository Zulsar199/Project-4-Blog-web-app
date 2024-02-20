import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Footer } from "@/components/layout/Footer";
import { ContactHeader } from "@/components/layout/ContactHeader";

export default function SinglePost() {
  const router = useRouter();
  const id = router.query.Id;
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const callAPI = async () => {
    try {
      const res = await fetch(`https://dev.to/api/articles/${id}`);
      const data = await res.json();
      setArticles(data);
      setfilteredArray(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsloading(true);
    // if (id) {
    //   callAPI();
    // }
    callAPI();
    setIsloading(false);
  }, [id]);
  if (isLoading) {
    return (
      <div className="">
        <ContactHeader />
        <div className="flex justify-center items-center">
          <div className="w-1/2 h-[500px] m-auto">
            <div className="animate-pulse flex ">
              <div className="flex-1 space-y-2 py-1">
                <div className="space-y-3">
                  <div className="h-[250px] bg-slate-300 rounded"></div>
                </div>
                <div className="h-[20px] bg-slate-300 rounded mt-[40px]"></div>
                <div className="flex justify-between">
                  <div className="h-[20px] w-[67%] bg-slate-300 rounded"></div>
                  <div className="h-[20px] w-[30%] bg-slate-300 rounded"></div>
                </div>
                <div className="h-[20px] bg-slate-300 rounded"></div>
                <div className="h-[20px] bg-slate-300 rounded"></div>
                <div className="flex justify-between">
                  <div className="h-[20px] w-[30%] bg-slate-300 rounded"></div>
                  <div className="h-[20px] w-[67%] bg-slate-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="">
      <ContactHeader />
      <div className="m-auto lg:w-1/2 sm:w-2/3 py-[50px] max-[429px]:pt-[10px]">
        <div className="flex flex-col gap-6 max-[429px]:gap-4 max-[429px]:px-5">
          <h1 className="font-bold text-4xl sm:text-3xl max-[429px]:text-xl">
            {articles.title}
          </h1>
          <div className="flex gap-8">
            <div className="flex gap-2">
              <img
                className="w-[28px] h-[28px] rounded-full"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
              />
              <p className="text-gray-500">{articles.user?.name || "Name"}</p>
            </div>
            <p className="text-gray-500">{articles.readable_publish_date}</p>{" "}
          </div>
          <div>
            <img
              className="w-full rounded-xl"
              src={
                articles.cover_image
                // "https://ichef.bbci.co.uk/news/976/cpsprodpb/15C0D/production/_117310198_03.jpg.webp"
              }
              alt=""
            />
          </div>
          <h3 className="text-2xl max-[429px]:text-xl">Description</h3>
          <div className="text-gray-600">{articles.description}</div>
          <h3 className="text-2xl max-[429px]:text-xl">Title</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit cum
            ratione nostrum quisquam, atque minima dolorum, quas nemo quod
            mollitia vitae ab ullam! Dolorum atque commodi quae odio maiores
            iusto!
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id illum
            ipsam impedit, autem ullam unde officiis inventore nostrum beatae
            explicabo! Quia ratione veniam possimus nobis, nihil vel, eius error
            optio animi totam sed rem quasi provident incidunt quae dolores
            quisquam fugit. Odit sequi perspiciatis consequuntur aut voluptatem
            qui dolor distinctio.
          </p>
          <h3 className="text-2xl max-[429px]:text-xl">Title</h3>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            repudiandae, provident eligendi iusto consectetur consequuntur.
            Officiis eaque eligendi corrupti, saepe iusto adipisci ipsum quae,
            aut quod dolore, quos consequuntur ad tenetur commodi. Ullam,
            dolorum vitae commodi maxime sit saepe voluptas tempora enim, vel
            similique in deleniti distinctio cum quam fugiat vero iste
            laboriosam voluptates debitis consequuntur incidunt. Ipsa molestiae
            alias deserunt eveniet culpa earum consectetur, doloribus esse
            repellendus veniam hic repellat quidem ducimus ab maiores veritatis
            non, iusto modi temporibus.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
