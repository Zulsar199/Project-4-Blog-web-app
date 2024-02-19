import { AllBlogPost } from "@/components/layout/AllBlogPost";
import { Carousel } from "@/components/layout/Carousel";
import { Carousel2 } from "@/components/layout/Carousel2";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Trending } from "@/components/layout/Trending";
import { useEffect, useState } from "react";

//   console.log(jsonData);
// const [articles, setArticles] = useState([])
//   useEffect(() =>{
//     fetch("https://dev.to/api/articles")
//     .then((response) => response.json())
//     .then((articles) => setArticles(articles))
//     .catch((error) => console.log(error));
//   }, [])
export default function Home() {
  console.log("helloo");
  // // const { data, blogData } = useGetData();
  // const [articles, setArticles] = useState([]);
  // const [trending, setTrending] = useState([]);
  // const [carousel, setCarousel] = useState([]);
  // const [filteredArray, setfilteredArray] = useState(articles);
  // const [count, setCount] = useState(9);
  // const loadMore = () => {
  //   setCount(count + 9);
  //   console.log("ajillaa");
  // };

  // const callAPI = async () => {
  //   try {
  //     const res = await fetch(`https://dev.to/api/articles?per_page=${count}`);
  //     const data = await res.json();
  //     setArticles(data);
  //     setfilteredArray(data);

  //     const res2 = await fetch(
  //       `https://dev.to/api/articles?state=rising&per_page=4`
  //     );
  //     const data2 = await res2.json();
  //     setTrending(data2);

  //     const res3 = await fetch(
  //       `https://dev.to/api/articles?state=rising&per_page=5`
  //     );
  //     const data3 = await res3.json();
  //     setCarousel(data3);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSearch = (event) => {
  //   const filteredArticles = articles.filter((article) =>
  //     article.title.toLowerCase().includes(event.target.value.toLowerCase())
  //   );
  //   setfilteredArray(filteredArticles);
  // };

  // useEffect(() => {
  //   callAPI();
  // }, [count]);

  return (
    <div className="m-auto">
      <Header />
      <Carousel2 />
      {/* <Carousel /> */}
      <Trending />
      <AllBlogPost />
      <Footer />
    </div>
  );
}
