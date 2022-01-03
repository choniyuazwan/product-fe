// TasksCollection.js
const apiPath = 'http://localhost:3000'
import adapter from 'mobx-rest-fetch-adapter'
import { apiClient, Collection, Model } from 'mobx-rest'

// We will use the adapter to make the `xhr` calls
apiClient(adapter, { apiPath })

class Task extends Model { }
class Tasks extends Collection {
  url ()  { return `/products` }
  model () { return Task }
}

// We instantiate the collection and export it as a singleton
export default new Tasks()
