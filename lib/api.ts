import { Client } from './request'

class API {
  private version = 1
  private base = `https://hotsapi.net/api/v${this.version}`

  protected client: Client

  constructor () {
    this.client = new Client(this.base)
  }
}

export { API }
