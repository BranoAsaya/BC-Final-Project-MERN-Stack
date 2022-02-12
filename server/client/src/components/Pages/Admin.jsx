import React, { useContext, useEffect, useState } from 'react'
import userContext from '../../Context/userContext'
import {useFetch} from '../CustomHooks/getHooks'
import { Redirect } from 'react-router-dom'

function Admin() {
    const { state, dispatch } = useContext(userContext)
    const { data } = useFetch('/Users')
    

    const showMessages = Array.isArray(data)?data.map((obj,i)=>{
        if(typeof obj.data.kind === 'object'){
            const msg =obj.data.kind
            return(
                <article className="post" key={i}>
      <h4>{msg.message}</h4>
      <div className="media">
        <div className="media-left">
          <p className="image is-32x32">
            <img src="http://bulma.io/images/placeholders/128x128.png" />
          </p>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <a href="#">{msg.name}</a> {msg.title}
              <span className="tag">Question</span>
            </p>
          </div>
        </div>
        <div className="media-right">
          <span className="has-text-grey-light">
            <i className="fa fa-comments" /> 1
          </span>
        </div>
      </div>
    </article>
    
            )
        }
        return ''
    }):''
  return (
   
    <article
    className="tile is-child box"
    style={{
      background: '#131722',
      // backgroundImage: 'url(https://i.ibb.co/BrbqxH2/bgwww.png)',
      backgroundSize: 'cover',
    }}
  >
       {!state.auth ? <Redirect to={'/'} /> : ''}
    <div style={{ width: '100%', overflow: 'hidden' }}>
    <div className="column is-9">
  <div className="box content">
    
  {showMessages}

  </div>
</div>

    </div>
  </article>
  )
}

export default Admin