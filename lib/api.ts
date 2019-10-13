import { Client } from './request'
import {
  Heroes,
  Maps,
  Replays,
  Talents,
} from './endpoints'

class API {
  private version = 1
  private base = `https://hotsapi.net/api/v${this.version}`

  protected client: Client

  public heroes: Heroes
  public maps: Maps
  public replays: Replays
  public talents: Talents

  constructor () {
    const client = new Client(this.base)

    this.client = client
    this.heroes = new Heroes(client)
    this.maps = new Maps(client)
    this.replays = new Replays(client)
    this.talents = new Talents(client)
  }
}

export { API }
