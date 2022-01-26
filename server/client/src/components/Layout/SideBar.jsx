import React from 'react'
import { Link } from 'react-router-dom'

function SideBar({ page }) {
  return (
    <>
      <div className="columns is-fullheight">
        <div className="column is-2 is-sidebar-menu is-hidden-mobile has-background-light">
          <aside className="menu">
            <p className="menu-label"></p>
            <ul className="menu-list">
              <li>
                <Link to={'/Services'}>
                  {' '}
                  <button className=" button is-info is-outlined  ">
                    SERVICES
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/Convert'}>
                  {' '}
                  <button className="  button is-info is-outlined ">
                    CONVERT
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/Exchange'}>
                  {' '}
                  <button className=" button is-info is-outlined ">
                    Exchange
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/Trending'}>
                  {' '}
                  <button className=" button is-info is-outlined ">
                    Trending&nbsp;
                  </button>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
        <div className="column is-main-content">
          <section
            className="hero  is-fullheight"
            style={{
              backgroundImage:
                'url(https://i.ibb.co/6bt3fr3/photo-1639815188508-13f7370f664a-ixlib-rb-1-2.jpg)',
              backgroundSize: 'cover',
              backgroundBlendMode: 'soft-light',
            }}
          >
            <div className="tile is-parent" >
         {page}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default SideBar
