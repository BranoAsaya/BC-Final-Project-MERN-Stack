import React, { useContext } from 'react'
import userContext from '../../Context/userContext'
import { useRequestAxios } from '../CustomHooks/getHooks'

function DeleteAccount({ flag, setFlag, setIsActive }) {
  const { state, dispatch } = useContext(userContext)
  const FB_KEY = process.env.REACT_APP_FB_KEY
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${FB_KEY}`
  const { data, refetch } = useRequestAxios(null)

  const handelSubmit = () => {
    // const email = JSON.parse(localStorage.getItem('email'))
    // const user = state?.UsersData?.find((user) => user.email === email)|| ''
    // dispatch({ type: 'auth', value: false })
    // dispatch({ type: 'User', value: {} })
    // localStorage.setItem('email', null)
    // setIsActive(true)
    // const token = JSON.stringify(user.data.idToken)
    // const options = {
    //   method: 'POST',
    //   data: token,
    //   url,
    // }

    // refetch(options)
    alert('delete is beta')
  }
  return (
    <>
      <div className={`modal ${flag ? 'is-active' : ''} is-clipped`}>
        <div className="modal-background" />
        <div className="modal-content">
          <article className="message is-danger">
            <div className="message-header">
              <p>Delete Account</p>
              <button className="delete" aria-label="delete" />
            </div>
            <div className="message-body">
              <button className="button is-danger"
               onClick={handelSubmit}
               >
                Delete
              </button>
            </div>
          </article>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setFlag(!flag)}
        />
      </div>
    </>
  )
}

export default DeleteAccount
