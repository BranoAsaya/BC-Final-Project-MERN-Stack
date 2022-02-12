import React, { useState, useRef } from 'react'
import { UseAxios } from '../CustomHooks/getHooks'

function ForgotPassword({ flag, setFlag }) {
  const emailInput = useRef(null)
  const [reset, setReset] = useState(null)
  const FB_KEY = process.env.REACT_APP_FB_KEY
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${FB_KEY}`

  const { response, error, loading } = UseAxios(url, reset)
  const handelSubmit = () => {
    setReset({
      requestType: 'PASSWORD_RESET',
      email: emailInput.current?.value,
    })
  }

  return (
    <div className={`modal ${flag ? 'is-active' : ''} is-clipped`}>
      <div className="modal-background" />
      <div className="modal-content">
        <div className="box">
          <figure className="avatar">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1000/1000948.png"
              className="image is-32x32"
            />
          </figure>
          <br />
          <form>
            <div className="field">
              <div className="control">
                <input
                  className="input is-large"
                  type="email"
                  placeholder="Your Email"
                  ref={emailInput}
                />
              </div>
            </div>
          </form>
          <br />
          <button
            className="button is-block is-info is-large is-fullwidth"
            onClick={handelSubmit}
          >
            Send password reset email{' '}
            <i className="fa fa-sign-in" aria-hidden="true" />
          </button>
          <br />
          <article className="message is-info">
            <div className="message-header">
              <p>Info</p>
              <button className="delete" aria-label="delete" />
            </div>
            <div className="message-body">{JSON.stringify(error.message)}</div>
          </article>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setFlag(!flag)}
      />
    </div>
  )
}

export default ForgotPassword
