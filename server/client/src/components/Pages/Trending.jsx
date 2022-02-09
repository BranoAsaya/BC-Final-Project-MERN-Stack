import React from 'react';
import TradingViewWidget, { Themes } from "react-tradingview-widget";

function Trending() {
  return (
    <article
      className="tile is-child box"
      style={{
        background:'#131722',
        // backgroundImage: 'url(https://i.ibb.co/BrbqxH2/bgwww.png)',
        backgroundSize: 'cover',
      }}
    >
     
        <TradingViewWidget
      symbol={"BTCUSDT"}
      theme={Themes.DARK}
      interval="D"
      locale="en"
      timezone="America/New York"
      hideSideToolbar={false}
      details
      news={["headlines"]}
    />
      Trending
    </article>
  );
}

export default Trending;
