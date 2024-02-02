import { AllBlogPost, AllBlogPostList } from "@/components/layout/AllBlogPost"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
// import { searchFromArray } from "@/components/utils"
import { useEffect, useState } from "react";
export default function BlogListing () {
    // searchFromArray([{name: "Bilguundul"}, {name}])
    // useGetData
    const [articles, setArticles] = useState([]);

    const [filteredArray, setfilteredArray] = useState(articles);
    const [count, setCount] = useState(12);
    const loadMore = () => {
      setCount(count + 9);
      console.log("ajillaa");
    };
  
    const callAPI = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles?per_page=${count}`);
        const data = await res.json();
        setArticles(data);
        setfilteredArray(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleSearch = (event) => {
      const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setfilteredArray(filteredArticles);
    };
  
    useEffect(() => {
      callAPI();
    }, [count]);
    return(
        <div>
            <Header onchange={handleSearch} />
            <AllBlogPostList array={filteredArray} loadMore={loadMore}/>
            {/* <AllBlogPost /> */}     
            <Footer />
        </div>
    )
}