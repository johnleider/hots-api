import { Endpoint } from './endpoint'

class Talents extends Endpoint {
  find (talent: string): Promise<Talent> {
    return this.client.get(`/talents/${talent}`)
  }
}

export { Talents }
