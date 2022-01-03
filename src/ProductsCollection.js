// ProductsCollection.js
const apiPath = 'http://localhost:3000'
import adapter from 'mobx-rest-fetch-adapter'
import { apiClient, Collection, Model } from 'mobx-rest'

// We will use the adapter to make the `xhr` calls
apiClient(adapter, { apiPath })

class Product extends Model { }
class Products extends Collection {
  url ()  { return `/products` }
  model () { return Product }
}

// We instantiate the collection and export it as a singleton
export default new Products()
