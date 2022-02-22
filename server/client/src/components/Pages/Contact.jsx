import React, { useContext, useRef, useState } from 'react'
import userContext from '../../Context/userContext'
import { BgContact } from '../Tools/getImges'
import { useRequestAxios } from '../CustomHooks/getHooks'

function Contact() {
  const { state, dispatch } = useContext(userContext)
  const { data, loading, error, refetch } = useRequestAxios(null)
  const nameRef = useRef('')
  const titleRef = useRef('')
  const massageRef = useRef('')
  const email = JSON.parse(localStorage.getItem('email'))

  const handelSubmit = () => {
    const options = {
      method: 'PATCH',
      url: `/Users/addMassage/${email}`,
      data: {
        name: nameRef.current?.value,
        title: titleRef.current?.value,
        message: massageRef.current?.value,
      },
    }
    refetch(options)
  }
  return (
    <article
      className="tile is-child box"
      style={{
        background: '#d0f3ff',
        backgroundImage: `url(${BgContact})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-8 is-variable ">
            <div className="column is-two-thirds has-text-left">
              <h1 className="title is-1">Contact Us</h1>
              <p className="is-size-4">
                To contact us, please subscribe and we will get your message
              </p>
              <div className="social-media">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="button is-light is-large"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="button is-light is-large"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="button is-light is-large"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="column is-one-third has-text-left">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    ref={nameRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    ref={titleRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea is-medium"
                    defaultValue={''}
                    ref={massageRef}
                  />
                </div>
              </div>
              <div className="control">
                <button
                  type="submit"
                  className="button is-link is-fullwidth has-text-weight-medium is-medium"
                  disabled={!state.auth}
                  title={'sign up / log in'}
                  onClick={handelSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Contact
