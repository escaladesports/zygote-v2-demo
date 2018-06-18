import React, { Component } from 'react'
import zygote from 'zygote-cart-v2'

class App extends Component {
  componentDidMount() {
    zygote.site('goalrilla')
  }

  render() {
    return (
      <div>
        <button
          style={{
            display: 'block',
            border: 'none',
            padding: '20px',
            background: 'red',
            color: 'white',
            fontSize: '20px',
            margin: '10px',
            cursor: 'pointer'
          }}
          onClick={() => zygote.toggleCart()}
        >
          Toggle
        </button>
        <div
          style={{
            width: '200px',
            height: '200px',
            background: '#333',
            margin: '5px',
            display: 'inline-block'
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            background: '#ccc',
            margin: '5px',
            display: 'inline-block'
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            background: 'yellow',
            margin: '5px'
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            background: 'orange',
            margin: '5px'
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            background: '#333',
            margin: '5px',
            display: 'inline-block'
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            background: '#333',
            margin: '5px',
            display: 'inline-block'
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            background: '#333',
            margin: '5px',
            display: 'inline-block'
          }}
        />
        <zygote.ZygoteContainer
          googleApiKey={'AIzaSyD2pAEWs2VMApgeuoNhy3dJoPWDvMOm49Y'}
          // brandLogo={brandLogo}
          // addToCartMessage={'Custom Add To Cart MeSsAgE'}
          // cartHeader={'Here is your cart header'}
          // footerMessage={'Here is from me'}
          // cartButtonOneMessage={'Do da checkout'}
          // cartButtonTwoMessage={'Quit this checkout'}
          // contactInfoButtonMessage={'the next step'}
          // paymentButtonMessage={'give us money'}
          // orderCompleteMessage={'just bought from the best store ever'}
        />
      </div>
    )
  }
}

export default App
