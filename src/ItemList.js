import React, { useState } from 'react';
import ReactDom from 'react-dom/client';
import { storeItems } from "./storeitems";

export function ItemList(props) {


  return (
    <div>
      <h2>Produce</h2>
      {storeItems.produce.map(item => <button name={item} onMouseDown={props.addItem}>{item}</button>)}
      <h2>Pantry Items</h2>
      {storeItems.pantryItems.map(item => <button name={item} onMouseDown={props.addItem}>{item}</button>)}
    </div>
  )
}

export class ItemClass extends React.Component {

  render() {
    return (
      <div>
        <h2>Produce</h2>
        {storeItems.produce.map(item => <button name={item} onMouseDown={this.props.addItem}>{item}</button>)}
        <h2>Pantry Items</h2>
        {storeItems.pantryItems.map(item => <button name={item} onMouseDown={this.props.addItem}>{item}</button>)}
      </div>
    )
  }
}