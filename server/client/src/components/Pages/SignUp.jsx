import React, { useState, useEffect, useRef ,useContext} from 'react'
import { Redirect } from 'react-router-dom'
import userContext from '../../Context/userContext'
import {setLocalStorage,axiosPost} from '../Tools/Tools'
import UseAxios from '../CustomHooks/UseAxios'
// import setLocalStorage from '../Tools/setLocalStorage'
import { Link } from 'react-router-dom'
import {BgSignUp} from '../Tools/getImges'

function SignUp() {
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const confirmPasswordInput = useRef(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [userData, setUserData] = useState(null)
  const { state, dispatch } = useContext(userContext)
  const FB_KEY = process.env.REACT_APP_FB_KEY
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FB_KEY}`
  const { response, error, loading } = UseAxios(url, userData)

  useEffect(() => {
    if (response?.email) {
      setLocalStorage({ key: 'email', value: response.email })
      dispatch({type:'auth',value:true})
      axiosPost('/AddUser',{email:response.email,data:response})
    }
    if(error&& !response?.email){
      alert(`${emailInput.current.value} already registered`)
     }
     return ()=>{}
  }, [response,error])
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
    {response?.email?<Redirect to={'/'}/>:''}
      <article
        className="tile is-child box"
        style={{
          background: '#8181e1',
          backgroundImage:`url(${BgSignUp})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="hero-body has-text-centered">
          <div className="login">
            <img src="https://i.ibb.co/fkn9XYz/user.png" width="32px" alt=''/>
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
                  <Link to={'/LogIn'} className="has-text-white">
                    Already a user{' '}
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

export default SignUp
