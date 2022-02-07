import React, { useContext, useEffect, useState } from 'react'
import userContext from '../../Context/userContext'
import { useRequestAxios } from '../CustomHooks/getHooks'
import './News.css'

function News() {
  const { state, dispatch } = useContext(userContext)
  const { data, loading, error, refetch } = useRequestAxios(null)

  const options = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: { q: 'cryptocurrency', lang: 'en' },
    headers: {
      'x-rapidapi-host': 'free-news.p.rapidapi.com',
      'x-rapidapi-key': 'b8d2430d88msh471842c86e1fe28p18fc6ejsn580afcd244c0',
    },
  }
  const style = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '900px',
  }

  useEffect(() => {
    refetch(options)
  }, [])
  console.log(data?.articles)
  let size = 4
  const articles = data
    ? data.articles.map((article, i) => {
        size = i < 2 ? 6 : 4

        return (
          <div className={`column post is-${size}`} key={i}>
            <article className="columns is-multiline">
              <div className="column is-12 post-img container-media">
                <img
                  src={article.media}
                  alt="Featured"
                  className="article-media"
                />
              </div>

              <div className="column is-12 featured-content ">
                <h3 className="heading post-category">{article.clean_url}</h3>
                <h1 className="title post-title article-title">
                  {article.title}
                </h1>
                <p className="post-excerpt article-summary">
                  {article.summary}
                </p>
                <br />
                <a
                  href={article.link}
                  target="_blank"
                  className="button is-primary"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </article>
          </div>
        )
      })
    : ''
  return (
    <article
      className="tile is-child box"
      style={{
        background: '#d0f3ff',
        backgroundImage:
          'url(https://i.ibb.co/QQgTSJ5/photo-1643101311704-933e4ed268c4-ixlib-rb-1-2.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <article className="columns featured">
        <div className="column is-7 post-img ">
          <img
            src="https://images.unsplash.com/photo-1640457298166-fe3eddec2d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt=""
          />
        </div>
        <div className="column is-5 featured-content va">
          <div>
            <h3 className="heading post-category">Category Name</h3>
            <h1 className="title post-title">Cryptocurrency News</h1>
            <p className="post-excerpt">
            BRANOCryptocurrency is the go-to website for your cryptocurrency
              news. Covering crypto trends, coin price updates, and global
              regulatory laws you won't miss a beat in the crypto world. •
              Advertise with CryptoCurrencyNews • Write for CryptoCurrencyNews •
              Submit your Company News INVESTOR NEWS How Risky Is Bitcoin? What
              to Look Out For
            </p>
            <br />
            <a href="#" className="button is-primary">
              Read More
            </a>
          </div>
        </div>
      </article>
      <div className="columns is-multiline">{articles}</div>
    </article>
  )
}

export default News
