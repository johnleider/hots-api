// Classes
import { Endpoint } from './endpoint'

// Types
import { HMap } from '../../types'

class Maps extends Endpoint {
  all (): Promise<HMap[]> {
    return this.client.get('maps')
  }
}

export { Maps }
