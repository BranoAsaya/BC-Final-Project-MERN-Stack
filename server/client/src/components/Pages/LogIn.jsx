import React, { useState, useEffect, useRef, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { UseAxios, useFetch } from '../CustomHooks/getHooks'
import userContext from '../../Context/userContext'
import { setLocalStorage } from '../Tools/Tools'
import { Link } from 'react-router-dom'
import { BgLogIn } from '../Tools/getImges'

function LogIn() {
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const [userData, setUserData] = useState(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [newUrl, setNewUrl] = useState(null)
  const { state, dispatch } = useContext(userContext)
  const FB_KEY = process.env.REACT_APP_FB_KEY
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FB_KEY}`
  const { response, error, loading } = UseAxios(url, userData)
  const { UsersData } = state
  const { data, refetch } = useFetch(newUrl)
  useEffect(() => {
    if (data) {
      dispatch({ type: 'User', value: data })
    }
    return () => {
      if (data) {
        dispatch({ type: 'User', value: data })
      }
    }
  }, [data])

  useEffect(() => {
    if (response?.email) {
      setLocalStorage({ key: 'email', value: response.email })
      dispatch({ type: 'auth', value: true })
      const obj = UsersData.find((user) => user.email === response.email)
      refetch(`/Users/FindUser/${obj._id}`)
    }

    if (error && !response?.email) {
      alert('email/Password incorrect')
    }
    return () => {}
  }, [response, error])

  const handelSubmit = () => {
    setUserData({
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })
  }
  const handelChange = () => {
    if (
      emailInput.current.value !== '' &&
      passwordInput.current.value !== '' &&
      passwordInput.current.value.length > 5
    ) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }

  return (
    <>
      {response?.email && data ? <Redirect to={'/'} /> : ''}
      <article
        className="tile is-child box"
        style={{
          background: '#6148bf',
          backgroundImage: `url(${BgLogIn})`,
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
                    title="password must be at least 6 characters"
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
                LogIn
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
                  <Link to={'/SignUp'} className="has-text-white">
                    already registered
                  </Link>
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
