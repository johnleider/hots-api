// Classes
import { Endpoint } from './endpoint'

// Types
import {
  Ability,
  Hero,
} from '../../types'

class Heroes extends Endpoint {
  abilities (hero: string): Promise<Ability[]> {
    return this.client.get(`heroes/${hero}/abilities`)
  }

  ability (hero: string, ability: string): Promise<Ability> {
    return this.client.get(`heroes/${hero}/abilities/${ability}`)
  }

  all (): Promise<Hero[]> {
    return this.client.get('heroes')
  }

  find (hero: string): Promise<Hero> {
    return this.client.get(`heroes/${hero}`)
  }
}

export { Heroes }
