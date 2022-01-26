import React from 'react'

function LogIn() {
  return (
    <>
      <article
        className="tile is-child box"
        style={{
          backgroundImage:
            'url(https://i.ibb.co/zHyqwCN/newbg11.png)',
          backgroundSize: 'cover',
        }}
      >
        <div className="hero-body has-text-centered">
          <div className="login">
            <img src="https://i.ibb.co/fkn9XYz/user.png" width="32px" />
            <form>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium is-rounded"
                    type="email"
                    placeholder="hello@example.com"
                    autoComplete="username"
                    required=""
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium is-rounded"
                    type="password"
                    placeholder="**********"
                    autoComplete="current-password"
                    required=""
                  />
                </div>
              </div>
              <br />
              <button
                className="button is-block is-fullwidth is-primary is-medium is-rounded"
                type="submit"
              >
                Login
              </button>
            </form>
            <br />
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className='has-text-white'>Forgot Password?</a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className='has-text-white'>Create an Account</a>
                </div>
              </div>
            </nav>
            <div className="card">
              <div className="card-image">
                <figure className="image is-16by9">
                  <img
                    src="https://i.ibb.co/mGdqf5m/Joinus.png"
                    alt="Placeholder"
                    width={'300px'}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default LogIn
