import { Endpoint } from './endpoint'

class Maps extends Endpoint {
  all (): Promise<HMap[]> {
    return this.client.get('/maps')
  }
}

export { Maps }
