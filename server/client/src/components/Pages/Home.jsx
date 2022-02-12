import React, { useContext,useState } from 'react'
import userContext from '../../Context/userContext'
import { Redirect } from 'react-router-dom'

import './Home.css'
function Home() {
  const { state, dispatch } = useContext(userContext)
  const [flag, setFlag] = useState(false)

  return (
    <article
      className="tile is-child box"
      style={{
        background: '#d0f3ff',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1639182697243-9641e4b2f4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)',
        backgroundSize: 'cover',
      }}
    >
            {flag ? <Redirect to={'/Services'} /> : ''}

      <div className="container">
        <div className="columns  is-vcentered reverse-columns">
          <div
            className="column is-10-mobile is-10-tablet is-5-desktop is-5-widescreen is-5-fullhd aos-init aos-animate"
            data-aos="fade-down"
          >
            <h1 className="title titled is-1 mb-6">Evolving with technology</h1>
            <div className="buttons">
              <button className="button is-yellow" onClick={()=>setFlag(true)}>Start Exploring </button>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="column is-10-mobile is-10-tablet is-4-desktop is-7-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
          >
            {' '}
          </div>
        </div>
      </div>
      <section className="hero is-medium ">
        <div className="hero-body"></div>
      </section>
   

      <section className="featured">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <h2 className="subtitle is-underlined	has-text-weight-bold" >
                Explore
              </h2>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">
            <article>
              <figure className="image is-3by3">
                <img src="https://cdn-icons-png.flaticon.com/512/6738/6738869.png" />
              </figure>
              <h2 className="subtitle has-text-centered	has-text-weight-bold	">
                Technical Analysis
              </h2>
              <span className="tag is-rounded">Users &amp; Groups</span>
            </article>
          </div>
          <div className="column is-3">
            <article>
              <figure className="image is-3by3">
                <img src="https://cdn-icons-png.flaticon.com/512/6738/6738872.png" />
              </figure>
              <h2 className="subtitle has-text-centered	has-text-weight-bold	">
                Blockchain News
              </h2>
              <span className="tag is-rounded">Network &amp; Research</span>
            </article>
          </div>
          <div className="column is-3">
            <article>
              <figure className="image is-3by3">
                <img src="https://cdn-icons-png.flaticon.com/512/6738/6738843.png" />
              </figure>
              <h2 className="subtitle has-text-centered	has-text-weight-bold	">
                Convert Crypto
              </h2>
              <span className="tag is-rounded">Convert &amp; Accounts</span>
            </article>
          </div>
          <div className="column is-3">
            <article>
              <figure className="image is-3by3">
                <img src="https://cdn-icons-png.flaticon.com/512/6738/6738870.png" />
              </figure>
              <h2 className="subtitle has-text-centered	has-text-weight-bold	">
                Daily Transactions
              </h2>
              <span className="tag is-rounded">Gainers &amp; Losers</span>
            </article>
          </div>
        </div>
      </section>
      
    </article>
  )
}

export default Home
