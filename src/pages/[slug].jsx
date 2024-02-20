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
          <div dangerouslySetInnerHTML={{__html: articles.body_html}}></div>
          <h3 className="text-2xl max-[429px]:text-xl">Description</h3>
          <div className="text-gray-600">{articles.description}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
