import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ItemList, ItemClass } from './ItemList';

class CartClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { myCart: [] }
    this.addItemToCart = this.addItemToCart.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  render() {
    return (
      <div>
        <h1>Groceries</h1>
        <ul>
          {this.state.myCart.map((item, index) => <li><button name={'item' + index} onMouseDown={this.removeItem}>{item.name} {item.number > 1 ? `x${item.number}` : ''}</button></li>)}
        </ul>
        <ItemClass addItem={this.addItemToCart} />
      </div>
    )
  }

  addItemToCart({ target }) {
    if (!this.state.myCart.find(obj => obj.name === target.name)) {
      this.setState({ myCart: [{ name: target.name, number: 1 }, ...this.state.myCart] })
    } else if (this.state.myCart.find(obj => obj.name === target.name)) {
      let newItem = this.state.myCart.find(obj => obj.name === target.name)
      newItem.number = newItem.number + 1
      this.state.myCart.splice(this.state.myCart.indexOf(this.state.myCart.find(obj => obj.name === target.name)), 1, newItem)
      let newCart = this.state.myCart
      this.setState({ myCart: newCart })
    }
  }

  removeItem ({target}) {
    if (this.state.myCart[this.state.myCart.findIndex(item => 'item' + this.state.myCart.indexOf(item) === target.name)].number < 2) {
      const filtered = this.state.myCart.filter(item => 'item' + this.state.myCart.indexOf(item) !== target.name)
      this.setState({myCart: filtered})
    } else {
      this.state.myCart[this.state.myCart.findIndex(item => 'item' + this.state.myCart.indexOf(item) === target.name)].number--
      this.setState(this.state.myCart)
    }
  }
}

function Cart() {
  let [myCart, setMyCart] = useState([])

  const addItemToCart = ({ target }) => {

    if (!myCart.find(obj => obj.name === target.name)) {
      setMyCart(prevCart => [{ name: target.name, number: 1 }, ...prevCart])
    } else if (myCart.find(obj => obj.name === target.name)) {
      let newItem = myCart.find(obj => obj.name === target.name)
      newItem.number = newItem.number + 1
      myCart.splice(myCart.indexOf(myCart.find(obj => obj.name === target.name)), 1, newItem)
      let newCart = myCart
      setMyCart(newCart)
    }
  }
  const removeItem = ({ target }) => {


    if (myCart[myCart.findIndex(item => 'item' + myCart.indexOf(item) === target.name)].number < 2) {
      const filtered = myCart.filter(item => 'item' + myCart.indexOf(item) !== target.name)
      setMyCart(filtered)
    } else {
      myCart[myCart.findIndex(item => 'item' + myCart.indexOf(item) === target.name)].number--
      setMyCart(myCart)
    }

  }

  return (
    <div>
      <h1>Groceries</h1>
      <ul>
        {myCart.map((item, index) => <li><button name={'item' + index} onMouseDown={removeItem}>{item.name} {item.number > 1 ? `x${item.number}` : ''}</button></li>)}
      </ul>
      <ItemList addItem={addItemToCart} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartClass />
  </React.StrictMode>
);

