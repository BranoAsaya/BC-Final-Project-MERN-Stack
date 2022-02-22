import React, { useContext, useState } from 'react'
import userContext from '../../Context/userContext'
import { useRequestAxios } from '../CustomHooks/getHooks'
function Convert() {
  const { state, dispatch } = useContext(userContext)
  const { data, loading, error, refetch } = useRequestAxios(null)
  const [flag, setFlag] = useState(true)
  const [primaryCoin, setPrimaryCoin] = useState('BTC')
  const [SecondaryCoin, setSecondaryCoin] = useState('USD')
  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState('')
  const EXCHANGE_KEY = process.env.REACT_APP_RAPID_KEY
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      from_currency: primaryCoin,
      function: 'CURRENCY_EXCHANGE_RATE',
      to_currency: SecondaryCoin,
    },
    headers: {
      'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
      'x-rapidapi-key': EXCHANGE_KEY,
    },
  }
  const convert = () => {
    refetch(options)
    setFlag(true)
  }
  if (data && flag) {
    setFlag(false)
    setResult(
      +data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount,
    )
  }
  const isDisabled = !state.auth ? 'all' : 'none'
  return (
    <article
      className="tile is-child box"
      style={{
        background: '#d0f3ff',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1643101311704-933e4ed268c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
        backgroundSize: 'cover',
      }}
    >
      <iframe
        src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=358,618,963&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
        width="100%"
        height={85}
        style={{ border: 'unset', pointerEvents: 'none' }}
      />

      <section
        className="container"
        style={{
          pointerEvents: state.auth ? 'all' : 'none',
          opacity: !state.auth ? '0.4' : '1',
        }}
      >
        <div className="columns is-multiline">
          <div className="column is-8 is-offset-2 register">
            <div className="columns">
              <div className="column left">
                <h1 className="title is-1">
                  {state.auth ? 'Crypto Converter' : 'Subscribers Only'}
                </h1>
                <h2 className="subtitle colored is-4">
                  Convert all types of crypto
                </h2>
                <p>
                  Convert all types of cryptocurrency in real-time Quick
                  automated swap system without limits and verification non
                  custodial service with absolute safety. Crypto Conversion
                  Network.
                </p>
              </div>

              <div className="column right has-text-centered">
                <div className="field has-addons">
                  <p className="control">
                    <span
                      className="select"
                      onChange={(e) => setPrimaryCoin(e.target.value)}
                    >
                      <select>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>USD</option>
                        <option>XPR</option>
                        <option>LTC</option>
                        <option>ILS</option>
                      </select>
                    </span>
                  </p>
                  <p className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="Amount"
                      onChange={(e) => setAmount(+e.target.value)}
                      value={amount}
                    />
                  </p>
                </div>
                <div className="field has-addons">
                  <p className="control">
                    <span className="select">
                      <select
                        onChange={(e) => setSecondaryCoin(e.target.value)}
                      >
                        <option>USD</option>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>XPR</option>
                        <option>LTC</option>
                        <option>ILS</option>
                      </select>
                    </span>
                  </p>
                  <p className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="Exchange Rate"
                      disabled={true}
                      value={result}
                      onChange={() => {}}
                    />
                  </p>
                </div>
                <button
                  className="button is-primary is-large"
                  onClick={() => convert()}
                >
                  <span className="icon">
                    <i className="fa fa-btc"></i>
                  </span>
                  <span>Convert</span>
                </button>
              </div>
            </div>
            <article className="message is-info">
              <div className="message-header">
                <p>Info</p>
                <button className="delete" aria-label="delete" />
              </div>
              <div className="message-body">
                {error
                  ? JSON.stringify(error.message) + '5 requests per minute'
                  : 'working'}
              </div>
            </article>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Convert
