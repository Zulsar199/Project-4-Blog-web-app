// const { createContext } = require("react")
import { useEffect, useState, createContext } from "react";

export const FirstContext = createContext([]);
export const FirstContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [carouselArticles, setCarouselArticles] = useState([]);
  const [filteredArray, setfilteredArray] = useState(articles);
  const [count, setCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setCount(count + 3);
  };
  const [displayBlock, setDisplayBlock] = useState("block");
  const callAPI = async () => {
    try {
      const res = await fetch(`https://dev.to/api/articles?per_page=${count}`);
      const data = await res.json();
      setArticles(data);
      setfilteredArray(data);

      const res2 = await fetch(
        `https://dev.to/api/articles?state=rising&per_page=4`
      );
      const data2 = await res2.json();
      setTrendingArticles(data2);

      const res3 = await fetch(
        `https://dev.to/api/articles?state=rising&per_page=5`
      );
      const data3 = await res3.json();
      setCarouselArticles(data3);
      setIsLoading(false);
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
  const filteredTag = (tagName) => {
    const filteredArticles1 = articles.filter((el) =>
      el.tags.split(",")[0].includes(tagName)
    );
    setfilteredArray(filteredArticles1);
    // setTag(tagName);
  };
  useEffect(() => {
    setIsLoading(true);
    callAPI();
  }, [count]);
  return (
    <FirstContext.Provider
      value={{
        articles,
        trendingArticles,
        carouselArticles,
        filteredArray,
        loadMore,
        handleSearch,
        filteredTag,
        displayBlock,
        isLoading,
      }}
    >
      {children}
    </FirstContext.Provider>
  );
};
