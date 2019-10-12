import { API } from "../api";

class Maps extends API {
  all (): Promise<HMap[]> {
    return this.client.get('/maps')
  }
}

export { Maps }
