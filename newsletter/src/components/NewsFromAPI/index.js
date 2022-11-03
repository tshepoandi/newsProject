import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import NewsIcon from '../NewsItem'

function News() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=9681cb797f994be98cea46a78a5992b8',
      )
      setArticles(res.data.articles)
      console.log(res)
    }
    getArticles()
  }, [])

  return (
    <div>
      {articles.map(({ title, urlToImage, content, author }) => (
        <NewsIcon
          title={title}
          urlToImage={urlToImage}
          content={content}
          author={author}
        />
      ))}
    </div>
  )
}

export default News
