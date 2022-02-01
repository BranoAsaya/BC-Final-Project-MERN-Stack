import React,{useContext} from 'react';
import userContext from '../../Context/userContext';
function News() {
  const { state, dispatch } = useContext(userContext)
  return(
    <article
    className="tile is-child box"
    style={{
      background:'#d0f3ff',
      backgroundImage:'url(https://i.ibb.co/QQgTSJ5/photo-1643101311704-933e4ed268c4-ixlib-rb-1-2.jpg)',
      backgroundSize: 'cover',
    }}
  >
<div className="container has-text-centered">
<div className="columns is-vcentered">
  <div className="column is-5">
    <figure className="image is-4by3">
      <img src="https://picsum.photos/800/600/?random" alt="Description" />
    </figure>
  </div>
  <div className="column is-6 is-offset-1">
    <h1 className="title is-2">Cryptocurrency News</h1>
    <h2 className="subtitle is-4">
      Let this cover page describe a product or service.
    </h2>
    <br />
    <p className="has-text-centered">
      <a className="button is-medium is-info is-outlined">Learn more</a>
    </p>
  </div>
</div>
</div>
<section className="container">

<div className="columns features">
  <div className="column is-4 modal-button" data-target="modal-card">
    <div className="card is-shady">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h4>
            Click anywhere on card to <br />
            expand into modal card
          </h4>
          <p>
            Purus semper eget duis at tellus at urna condimentum mattis. Non
            blandit massa enim nec. Integer enim neque volutpat ac tincidunt
            vitae semper quis. Accumsan tortor posuere ac ut consequat semper
            viverra nam.
          </p>
          <span className="button is-link modal-button">Modal card</span>
        </div>
      </div>
    </div>
  </div>
  <div className="column is-4">
    <div className="card is-shady">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://source.unsplash.com/hLyd1LukQ7E"
            alt="butterfly image"
            className="modal-button"
            data-target="modal-image4"
          />
        </figure>
      </div>
      <div className="card-content  modal-button" data-target="modal-card2">
        <div className="content">
          <h4>
            Click anywhere on card to <br />
            expand into modal card - header image expands into bigger image
          </h4>
          <p>
            Purus semper eget duis at tellus at urna condimentum mattis. Non
            blandit massa enim nec. Integer enim neque volutpat ac tincidunt
            vitae semper quis.
          </p>
          <span className="button is-link modal-button">Modal card</span>
        </div>
      </div>
    </div>
  </div>
  <div className="column is-4">
    <div className="card is-shady">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://source.unsplash.com/hLyd1LukQ7E"
            alt="butterfly image"
            className="modal-button"
            data-target="modal-image4"
          />
        </figure>
      </div>
      <div className="card-content  modal-button" data-target="modal-card2">
        <div className="content">
          <h4>
            Click anywhere on card to <br />
            expand into modal card - header image expands into bigger image
          </h4>
          <p>
            Purus semper eget duis at tellus at urna condimentum mattis. Non
            blandit massa enim nec. Integer enim neque volutpat ac tincidunt
            vitae semper quis.
          </p>
          <span className="button is-link modal-button">Modal card</span>
        </div>
      </div>
    </div>
  </div>
</div>

</section>
  </article>
  );
}

export default News;
