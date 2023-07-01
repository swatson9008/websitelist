import { useState, useEffect } from "react";

export default function NewsInfo() {
  const [news, setNews] = useState([]);

  useEffect(function () {
    fetch("https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=8d8317ef5533cc42f0f22d13c8dfbfe2")
      .then((res) => res.json())
      .then((data) => {
        const updatedNews = data.articles.map(article => ({
          titleText: article.title,
          authorText: article.source.name,
          articleText: article.description,
          sourceText: article.url,
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
          <p className="articleBody">{item.articleText}</p>
          <p className="sourceText"><a href="{item.sourceText}">Read More</a></p>
          <div className="bottomArea"><p className="author">{item.authorText}</p>
          <span className="publishDate">{item.publishedTime}</span></div>
          <hr />
        </div>
      ))}
    </div>
  );
}
