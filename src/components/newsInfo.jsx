import { useState, useEffect } from "react";

export default function NewsInfo() {
  const [news, setNews] = useState([]);

  useEffect(function () {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=796ed59ef13445bf90ce58374c281f6b")
      .then((res) => res.json())
      .then((data) => {
        const updatedNews = data.articles.slice(0, 10).map(article => ({
          titleText: article.title,
          authorText: article.author,
          articleText: article.description,
          publishedTime: new Date(article.publishedAt).toLocaleString()
        }));
        setNews(updatedNews);
      });
  }, []);

  console.log(news);

  return (
    <div className="newsSpace">
      {news.map((item, index) => (
        <div key={index}>
          <h3 className="title">{item.titleText}</h3>
          <p className="author">{item.authorText}</p>
          <p className="articleBody">{item.articleText}</p>
          <p className="publishDate">{item.publishedTime}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
