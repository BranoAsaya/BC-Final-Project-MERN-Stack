import React, { useEffect } from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'
// import { useRequestAxios } from '../CustomHooks/getHooks'

function Trending() {
  // const { data, loading, error, refetch } = useRequestAxios('https://www.reddit.com/r/CryptoCurrency.json')

  return (
    <article
      className="tile is-child box"
      style={{
        background: '#131722',
        // backgroundImage: 'url(https://i.ibb.co/BrbqxH2/bgwww.png)',
        backgroundSize: 'cover',
      }}
    >
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <TradingViewWidget
          symbol={'BTCUSDT'}
          theme={Themes.DARK}
          interval="D"
          locale="en"
          timezone="America/New York"
          hideSideToolbar={false}
          details
          news={['headlines']}
        />
      </div>
    </article>
  )
}

export default Trending
