import React, { useContext, useEffect, useState } from 'react'
import userContext from '../../Context/userContext'
import { useRequestAxios } from '../CustomHooks/getHooks'
function Exchange() {
  const { state, dispatch } = useContext(userContext)
  const { data, loading, error, refetch } = useRequestAxios(null)
  const [search, setSearch] = useState('')
  const options = {
    method: 'GET',
    url:
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
  }
  useEffect(() => {
    refetch(options)
    return () => {}
  }, [])

  const handelChange = (e) => {
    setSearch(e.target.value)
  }
  const filterCoins = data
    ? data.filter((coin, i) =>
        coin.name.toLowerCase().includes(search.toLowerCase()),
      )
    : []

  const coins = filterCoins ? (
    filterCoins.map((coin, i) => {
      let random_boolean = Math.random() < 0.5
      return (
        <tr key={i} style={{ backgroundColor: '#23252f' }}>
          <td>
            <img src={coin.image} alt="" className="image is-24x24" />
          </td>
          <td className="has-text-light">{coin.symbol}</td>
          <td className="has-text-info is-hidden-mobile">{coin.name}</td>
          <td className="has-text-link is-hidden-mobile">
            {coin.current_price}
          </td>
          <td
            className={random_boolean ? 'has-text-danger' : 'has-text-success'}
          >
            {coin.atl}
          </td>
        </tr>
      )
    })
  ) : (
    <tr></tr>
  )
  return (
    <article
      className="tile is-child box"
      style={{
        background: '#a8a8a8',
        // backgroundImage: 'url(https://images.unsplash.com/photo-1639261136395-4ef1623d2cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)',
        backgroundSize: 'cover',
      }}
    >
      <iframe
        name="TickerTape"
        src="https://darqube.com/external-embedding/ticker-tape?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ3aWRnZXQiOnsiYXNzZXRfY2xhc3NlcyI6WyJDUllQVE8iXX0sIndfdHlwZSI6IlRpY2tlclRhcGUiLCJmZV9jZmciOnsid2lkdGgiOjExMDAsImhlaWdodCI6MzczLCJiYWNrZ3JvdW5kQ29sb3IiOiJyZ2JhKDIxLCAyNSwgMzAsIDEpIiwiZm9udENvbG9yIjoicmdiYSgyNTUsIDI1NSwgMjU1LCAxKSIsInJlbW92ZVdhdGVybWFyayI6ZmFsc2UsInN5bWJvbHMiOlt7InN5bWJvbCI6IkVVUlVTRC5PQU5EQSIsIm5hbWUiOiJFVVIvVVNEIn0seyJzeW1ib2wiOiJHQlBVU0QuT0FOREEiLCJuYW1lIjoiR0JQL1VTRCJ9LHsic3ltYm9sIjoiQlRDVVNEVC5CSU5BTkNFIiwibmFtZSI6IkJUQyJ9LHsic3ltYm9sIjoiRVRIVVNEVC5CSU5BTkNFIiwibmFtZSI6IkVUSCJ9LHsic3ltYm9sIjoiWEFVVVNELk9BTkRBIiwibmFtZSI6IkdvbGQifSx7InN5bWJvbCI6IlhBR1VTRC5PQU5EQSIsIm5hbWUiOiJTaWx2ZXIifSx7InN5bWJvbCI6IkFBUEwuVVMiLCJuYW1lIjoiQUFQTCJ9LHsic3ltYm9sIjoiVFNMQS5VUyIsIm5hbWUiOiJUU0xBIn0seyJzeW1ib2wiOiJNU0ZULlVTIiwibmFtZSI6Ik1TRlQifSx7InN5bWJvbCI6IkFNWk4uVVMiLCJuYW1lIjoiQU1aTiJ9LHsic3ltYm9sIjoiVVNESlBZLk9BTkRBIiwibmFtZSI6IlVTRC9KUFkifV0sImNvbnRyb2xUeXBlIjoibGVmdC1jb250cm9sIiwiaXNPcGVuIjpmYWxzZSwiaXNBdXRvc2l6ZSI6ZmFsc2V9LCJleHAiOjE2NTIyMTg5NjUsInN1YiI6ImFjY2VzcyJ9.lxDLxZ9ZbWdEG4R-uChN_DQztCC2Dhwht_t-YS-spug"
        id="TickerTape"
        width={1100}
        height={50}
        scrolling="no"
      />

      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">Find Coins</h1>
          <h2 className="subtitle">$this is the best software platform .</h2>
          <div className="box">
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter "
                  onChange={handelChange}
                />
              </p>
              <p className="control">
                <a className="button is-info">Search</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table  is-striped is-fullwidth">
          <tbody>
            <tr className="th ">
              <th>Logo</th>
              <th>Code</th>
              <th className="is-hidden-mobile">Name</th>
              <th className="is-hidden-mobile">Price</th>
              <th>Evolution</th>
            </tr>
            {coins}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default Exchange
