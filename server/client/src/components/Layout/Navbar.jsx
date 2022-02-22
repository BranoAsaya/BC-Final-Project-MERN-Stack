/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import userContext from '../../Context/userContext'
import { Link } from 'react-router-dom'
import {DeleteAccount} from '../Pages/pages.js'

function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const { state, dispatch } = useContext(userContext)
  const [flag, setFlag] = useState(false)
  const closeNav=()=>setIsActive(!isActive)
  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ position: 'sticky', top: '0px' }}
      >
        <div className="navbar-brand">
          <Link to={'/'} className="navbar-item">
            <img
              src="https://i.ibb.co/7gDY4zv/ss112.png"
              width={112}
              height={28}
              alt=""
            />
          </Link>
          <i
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={closeNav}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </i>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        >
          <div className="navbar-start">
            <Link to={'/'} className="navbar-item"  onClick={closeNav}
            >
              <i className="fa fa-home" ></i>
              Home
            </Link>
            <Link to={'/News'} className="navbar-item" onClick={closeNav}>
              <i className="fa fa-rss-square"></i>
              News
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <Link to={'/About'} className="navbar-item" onClick={closeNav}>
                  About
                </Link>
                <Link to={'/Contact'} className="navbar-item" onClick={closeNav}>
                  Contact
                </Link>
                <hr className="navbar-divider" />
                <Link to={'/Convert'} className="navbar-item is-hidden-tablet" onClick={closeNav}>
                  Convert
                </Link>
                <Link to={'/Services'} className="navbar-item is-hidden-tablet" onClick={closeNav}>
                  Services
                </Link>
                <Link to={'/Exchange'} className="navbar-item is-hidden-tablet" onClick={closeNav}>
                  Exchange
                </Link>
                <Link to={'/Trending'} className="navbar-item is-hidden-tablet" onClick={closeNav}>
                  Trending
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            {state.auth ? (
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  <i className="fa fa-user"></i>Account
                </a>
                <div className="navbar-dropdown">
                  <a className="navbar-item" onClick={() => setFlag(!flag)}>
                  Settings
                  <DeleteAccount flag={flag} setFlag={setFlag} setIsActive={setIsActive}/>
                    </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item" onClick={()=>{
                     dispatch({type:'auth',value:false})
                     dispatch({type:'User',value:{}})
                     localStorage.setItem('email',null)
                     closeNav()

                  }} >Logout</a>
                </div>
              </div>
            ) : (
              <div className="navbar-item">
                <div className="buttons">
                  <Link to={'/SignUp'} className="button is-link" onClick={closeNav}>
                    <strong>Sign up</strong>
                  </Link>
                  <Link to={'/LogIn'} className="button is-light" onClick={closeNav}>
                    Log in
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
