// Classes
import { Endpoint } from './endpoint'

// Types
import { Talent } from '../../types'

class Talents extends Endpoint {
  all (): Promise<Talent[]> {
    return this.client.get('talents')
  }

  find (talent: string): Promise<Talent> {
    return this.client.get(`talents/${talent}`)
  }
}

export { Talents }
