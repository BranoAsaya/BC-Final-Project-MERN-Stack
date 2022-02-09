import React from 'react'

function Services() {
  return (
    <article
      className="tile is-child box"
      style={{
        background: '#d0f3ff',
        // backgroundImage: 'url(https://i.ibb.co/BrbqxH2/bgwww.png)',
        backgroundSize: 'cover',
      }}
    >
      <section className="hero is-white is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered">
              <div
                data-aos="fade-left"
                className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <figure className="image is-square">
                  <img src="https://images.unsplash.com/photo-1639781360241-dadbe5c28dce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxjcnlwdG8lMjBuZXdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                </figure>
              </div>
              <div
                data-aos="fade-down"
                className="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
              >
                <h1 className="titled title is-1 mb-6">
                  Must-Have Crypto Websites
                </h1>
                <h2 className="subtitled subtitle">
                  For those of you who are making their first steps into the
                  crypto world, and also for the experts, we’ve picked the five
                  must-have websites. These sites have to be your home page, or
                  at least added to your favorites bar.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="services">
        <div className="section-heading">
          <h3 className="title is-2">Services</h3>
          <h4 className="subtitle is-5">Crypto Websites</h4>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image is-4by3">
                <img
                  src="https://i.ibb.co/sv2Xm23/bitcoin-org-en-1.png"
                  alt="Placeholder image"
                />
              </figure>

              <div className="box">
                <div className="content">
                  <h4 className="title is-5">Bitcoin.org: Learn The Basics</h4>
                  Bitcoin.org is a great place to learn some basics. The major
                  Bitcoin website offers a glance at Bitcoin’s whitepaper, which
                  was written by Satoshi Nakamoto. For newbies, make sure you
                  read the “What You Need to Know” section. Bitcoin.com belongs
                  to Bitcoin Cash (which is a fork of Bitcoin).
                </div>
              </div>
            </div>
            <div className="column">
              <figure className="image is-4by3">
                <img
                  src="https://i.ibb.co/zQkH9z1/ryptoCSC.png"
                  alt="Placeholder image"
                />
              </figure>

              <div className="box">
                <div className="content">
                  <h4 className="title is-5">Reddit: What’s Going On</h4>
                  While you can always read crypto news on CryptoPotato, the
                  hottest place for the crypto community has always been Reddit.
                  Even though Reddit reminds you of the old forums that were
                  operated during the first years of the internet, the fact
                  remains that users can hide under nicknames and contribute.
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <figure className="image is-4by3">
                <img
                  src="https://i.ibb.co/mJ5rrJ5/coinmarketcap-com.png"
                  alt="Placeholder image"
                />
              </figure>

              <div className="box">
                <div className="content">
                  <h4 className="title is-5">
                    CoinMarketCap: What’s The Price
                  </h4>
                  CoinMarketCap is the leading currency index for
                  cryptocurrencies. Real-time data from all the trading
                  platforms, including 24-hour trading volumes (by coin or by
                  exchange), daily percentage change, total market cap value,
                  and more. In this category, we must emphasize CoinGecko as
                  well.
                </div>
              </div>
            </div>
            <div className="column">
              <figure className="image is-4by3">
                <img
                  src="https://i.ibb.co/DLMqW7L/www-coinbase-com.png"
                  alt="Placeholder image"
                />
              </figure>

              <div className="box">
                <div className="content">
                  <h4 className="title is-5">
                    Coinbase: Buy Your First Bitcoins
                  </h4>
                  Based in San Francisco, USA. Coinbase, founded in 2012, offers
                  a great exchange for beginners, which is a good place to
                  start. The only disadvantage is that Coinbase only has FIAT
                  integrations in 32 countries (led by the USA). Before buying
                  any cryptos, we would recommend that you read our Bitcoin
                  guide.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Services
