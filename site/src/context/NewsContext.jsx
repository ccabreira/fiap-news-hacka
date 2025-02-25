import { createContext, useState, useContext } from "react";
import { fetchNews } from "../services/newsService";

const NewsContext = createContext();
export function NewsProvider({ children }) {
  const [news, setNews] = useState([]);

  const loadNews = async () => {
    const data = await fetchNews();
    setNews(data);
  };

  return (
    <NewsContext.Provider value={{ news, loadNews }}>
      {children}
    </NewsContext.Provider>
  );
}
export function useNews() {
  return useContext(NewsContext);
}