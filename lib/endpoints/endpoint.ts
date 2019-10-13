import { Client } from '../request'

abstract class Endpoint {
  client: Client

  constructor (client: Client) {
    this.client = client
  }
}

export { Endpoint }
