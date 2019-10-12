import { API } from '../api'

class Heroes extends API {
  all (): Promise<Hero[]> {
    return this.client.get('/heroes')
  }

  find (hero: string): Promise<Hero> {
    return this.client.get(`/heroes/${hero}`)
  }

  ability (hero: string, ability: string): Promise<Ability> {
    return this.client.get(`/heroes/${hero}/abilities/${ability}`)
  }
}

export { Heroes }
