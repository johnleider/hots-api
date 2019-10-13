import { Endpoint } from './endpoint'

class Talents extends Endpoint {
  all (): Promise<Talent[]> {
    return this.client.get('talents')
  }

  find (talent: string): Promise<Talent> {
    return this.client.get(`talents/${talent}`)
  }
}

export { Talents }
