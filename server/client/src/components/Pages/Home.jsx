import React from 'react'

function Home() {
  return (
    <article
      className="tile is-child box"
      style={{
        background:'#d0f3ff',
        backgroundImage:'url(https://images.unsplash.com/photo-1639182697243-9641e4b2f4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)',
        backgroundSize: 'cover',
      }}
    >
<div className="container">
  <div className="columns  is-vcentered reverse-columns">
    <div
      className="column is-10-mobile is-10-tablet is-5-desktop is-5-widescreen is-5-fullhd aos-init aos-animate"
      data-aos="fade-down"
    >
      <h1 className="title titled is-1 mb-6">
        Evolving  with technology
      </h1>
      <div className="buttons">
        <button className="button is-yellow">Start Exploring </button>
        <button className="button">Less-technical teams</button>
      </div>
    </div>
    <div
      data-aos="fade-right"
      className="column is-10-mobile is-10-tablet is-4-desktop is-7-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
    >
      
    </div>
  </div>
</div>
<section className="hero is-medium ">
  <div className="hero-body">
    {/* <p className="title">Medium hero</p>
    <p className="subtitle">Medium subtitle</p> */}
  </div>
</section>

<section className="featured">
  <div className="level">
    <div className="level-left">
      <div className="level-item">
        <h2 className="subtitle">Featured Articles</h2>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
        <div className="field has-addons has-addons-centered">
          <div className="control">
            <a className="button is-small" disabled="">
              <svg
                className="svg-inline--fa fa-chevron-left fa-w-8"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                />
              </svg>
              {/* <i class="far fa-chevron-left"></i> Font Awesome fontawesome.com */}
            </a>
          </div>
          <div className="control">
            <a className="button is-small">
              <svg
                className="svg-inline--fa fa-chevron-right fa-w-8"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
              {/* <i class="far fa-chevron-right"></i> Font Awesome fontawesome.com */}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="columns">
    <div className="column is-3">
      <article>
        <figure className="image is-3by3">
          <img src="https://cdn-icons-png.flaticon.com/512/2856/2856964.png" />
        </figure>
        <h2 className="subtitle">Creating a Group</h2>
        <span className="tag is-rounded">Users &amp; Groups</span>
      </article>
    </div>
    <div className="column is-3">
      <article>
        <figure className="image is-3by3">
          <img src="https://cdn-icons-png.flaticon.com/512/6698/6698835.png" />
        </figure>
        {/* <a class="button is-primary is-block is-alt is-large" href="#" >New Post</a> */}
        <span className="tag is-rounded">Billing &amp; Accounts</span>
      </article>
    </div>
    <div className="column is-3">
      <article>
        <figure className="image is-3by3">
          <img src="https://cdn-icons.flaticon.com/png/512/5675/premium/5675014.png?token=exp=1643665863~hmac=cb11b47a19b5f4228c8ec72c111389ed" />
        </figure>
        <h2 className="subtitle">Changing the Account </h2>
        <span className="tag is-rounded">Billing &amp; Accounts</span>
      </article>
    </div>
    <div className="column is-3">
      <article>
        <figure className="image is-3by3">
          <img src="https://cdn-icons-png.flaticon.com/512/6698/6698711.png" />
        </figure>
        <h2 className="subtitle">Adding Internal Notes</h2>
        <span className="tag is-rounded">Billing &amp; Accounts</span>
      </article>
    </div>
  </div>
</section>
    </article>
  )
}

export default Home
