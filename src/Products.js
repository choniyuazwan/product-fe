import React from "react";
import { observer } from 'mobx-react'
import { computed } from 'mobx'
import productsCollection from './ProductsCollection'
import Product from "./Product";  

@observer
export default class Products extends React.Component {
  componentWillMount () {
    // This will call `/api/products?all=true`
    productsCollection.fetch({ data: { all: true } })
  }

  @computed
  get activeProducts () {
    return productsCollection.filter({ resolved: false })
  }

  render () {
    if (productsCollection.isRequest('fetching')) {
      return <span>Fetching products...</span>
    }

    return (
      <div>
        <p>bbbbbbbbbbbbbbbbbbb</p>
        <span>{this.activeProducts.length} products</span>
        <ul>{activeProducts.map((product) => <Product product={product} />)}</ul>
      </div>
    )
  }
}
