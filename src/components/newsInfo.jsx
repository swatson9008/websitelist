import { useState } from "react";
import { useEffect } from "react";


export default function NewsInfo(){
    const [news, setNewNews] = useState({
        titleText: "example",
        articleText: "example",
        publishedTime: "example"
    })

    const [allNews, setAllNews] = useState();

    useEffect(function(){
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=796ed59ef13445bf90ce58374c281f6b")
            .then(res => res.json())
            .then(allNews => setAllNews(allNews))
            
    }, [])

    console.log(allNews)
}