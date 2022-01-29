import React,{useContext} from 'react';
import userContext from '../../Context/userContext';
function News() {
  const { state, dispatch } = useContext(userContext)
  
  return(
    <article
      className="tile is-child box"
      style={{
        backgroundImage: 'url(https://i.ibb.co/BrbqxH2/bgwww.png)',
        backgroundSize: 'cover',
      }}
    >
      News
    </article>
  );
}

export default News;
