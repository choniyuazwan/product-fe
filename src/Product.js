import React from "react";
import { observer } from 'mobx-react'

@observer
export default class Product extends React.Component {
  onClick () {
    this.props.product.save({ resolved: true })
  }

  render () {
    return (
      <li key={product.id}>
        <button onClick={this.onClick.bind(this)}>
          resolve
        </button>
        {this.props.product.get('name')}
      </li>
    )
  }
}
