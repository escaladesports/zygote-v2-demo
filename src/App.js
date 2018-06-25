import React, { Component } from 'react'
import zygote, { AddToCart } from 'zygote-cart-v2'
import './App.css'
import logo from './logo.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      shouldRender: false,
      class: ''
    }
  }

  componentDidMount() {
    zygote.site('goalrilla')
    zygote.closeCart()
  }

  componentWillReceiveProps(nextProps) {
    console.log('PROPS', this.props, nextProps)
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.show && this.state.show) {
      this.setState({
        shouldRender: true
      })
      setTimeout(() => {
        this.setState({ class: 'showDiv' })
      }, 0)
    }
    if (prevState.show && !this.state.show) {
      setTimeout(() => {
        this.setState({
          shouldRender: false
        })
      }, 1000)
      this.setState({ class: '' })
    }
  }

  render() {
    return (
      <div>
        <AddToCart
          price={12.33}
          desc="Here is the description!!"
          id={`B1002`}
          image={'https://pingpong.com/img/product/t1265-0-s.jpg?1496431075'}
          name={`Item`}
          url={'https://goalrilla.com/'}
          open
        >
          <button
            style={{
              display: 'block',
              border: 'none',
              padding: '20px',
              background: 'orange',
              color: 'white',
              fontSize: '20px',
              margin: '10px',
              cursor: 'pointer'
            }}
          >
            Add to Cart
          </button>
        </AddToCart>

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
          brandLogo={logo}
          ccPhone={'+1 (812)-2222-1111'}
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
