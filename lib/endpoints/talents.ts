import { API } from "../api";

class Talents extends API {
  find (talent: string): Promise<Talent> {
    return this.client.get(`/talents/${talent}`)
  }
}

export { Talents }
