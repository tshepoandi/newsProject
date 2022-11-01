import React from 'react'

function NewsIcon({ title, urlToImage, description, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={urlToImage} alt={description} />
      <h5>{description}</h5>
      <p>{author}</p>
    </div>
  )
}

export default NewsIcon
