import React, { useState, useEffect, useRef } from 'react'
import UseAxios from './UseAxios'
const FB_KEY = process.env.REACT_APP_FB_KEY

function SignUp() {
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const confirmPasswordInput = useRef(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [data, setData] = useState(null)
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FB_KEY}`
  // const data = { email: 'my12@gmail.com', password: '123456' }
  const { response, error, loading } = UseAxios(url, data)
console.log(response);
  const handelSubmit = () => {
    setData({
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })
  }
  const handelChange = () => {
    if (
      emailInput.current.value !== '' &&
      passwordInput.current.value !== '' &&
      passwordInput.current.value.length > 5 &&
      passwordInput.current.value === confirmPasswordInput.current.value
    ) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }

  return (
    <>
      <article
        className="tile is-child box"
        style={{
          backgroundImage: 'url(https://i.ibb.co/zHyqwCN/newbg11.png)',
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
                    ref={emailInput}
                    name="email"
                    onChange={handelChange}
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
                    ref={passwordInput}
                    name="password"
                    onChange={handelChange}
                    title="This field should not be left blank."
                    onBlur={() => {
                      if (passwordInput.current.value.length <= 5) {
                        alert('password must be at least 6 characters')
                      }
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium is-rounded"
                    type="password"
                    placeholder="confirm password"
                    autoComplete="current-password"
                    required=""
                    ref={confirmPasswordInput}
                    name="confirmPassword"
                    onChange={handelChange}
                  />
                </div>
              </div>
              <br />
              <button
                className="button is-block is-fullwidth is-primary is-medium is-rounded"
                type="button"
                disabled={isDisabled}
                onClick={handelSubmit}
              >
                SignUp
              </button>
            </form>
            <br />
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="has-text-white">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="has-text-white">
                    Already a user{' '}
                  </a>
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

export default SignUp
