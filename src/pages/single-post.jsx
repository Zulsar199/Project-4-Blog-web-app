import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SinglePost() {
  const router = useRouter();
  console.log("router " + router);
  const id = router.query.Id;
  console.log("id " + id);
  const [articles, setArticles] = useState([]);
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
  console.log(articles);
  useEffect(() => {
    if (id) {
      callAPI();
    }
  }, [id]);
  return (
    <div className="">
      <Header />
      <div className="m-auto w-1/2 py-[50px]">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-4xl">{articles.title}</h1>
          <div className="flex gap-8">
            <div className="flex gap-2">
              <img
                className="w-[28px] h-[28px] rounded-xl"
                src="https://s3-alpha-sig.figma.com/img/0b91/04ea/6891be7496ccabdc2fd0b1a1d8a535d7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qSRhqaNWD8R1F1auW7ywVrtPxLiEKkumS4G4wGLuDvA70zxW0gYrgssV1HAF8LJfMQSs5MCKyjzaJWM8cUuoXV6XfmS1gCy3R-XvbBRVDdEpnmEdthuplVVvW15aku2ToB1NSE9XUxFlnWOB0KKqNnJfGzcX9y0rhC77ifKx3pAvpWIDxcaFLneAhGnuR6vmPtxPBaiB4grg8f4ef-mqShA9f-qzE8U-Ztq3ZQgyi6Pj5fDhrQDDVeyT-WRc5UMw~Ab2yEeLPZIUeKr-HaX2n8TB3FhramXQutvc1NQlz7A1b0-hz9olPqP0Pa0CY6zE15KU3WdIKIyD3l8x6Kj3Tg__"
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
                articles.cover_image ||
                "https://s3-alpha-sig.figma.com/img/eb1f/38cd/a6a8e0df2280c787cafc780464b002fe?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bKOrTN7gUeTiHmMS1ChL3p9qYr9NhyNZRGfx1nLLj~hxwYFZdmUOkzlBS-36Xl8Rr163FtBXSgjMyBV~q4EIZ6Fe8zdiHs2dQpyYCfvb2NoMx1nSKplLEzSfkla5Amz1gmWaHqym54Wc4F5yNVHqiGQ2jNyLW-T93dh5RrMo4lx0ETt7Da6E9~WSGZ0AzdDIahQROt0Dte5WxTg-zr6VcmXEtmA1hXIWFRvXg6t6kn7YE14e8EJbBJjO1ILftB1EKLqSQuwDOBHKE2gxG~GT7vh-nTk36ggcTlkWaVFBXd2-cigmBB0~Rd~bRg9xQMkpTF0uH16ngJnx8pzGFbCLfg__"
              }
              alt=""
            />
          </div>
          <h3 className="text-2xl">Description</h3>
          <div className="text-gray-600">{articles.description}</div>
          <h3 className="text-2xl">Title</h3>
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
          <h3 className="text-2xl">Title</h3>
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
