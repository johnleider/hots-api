// Classes
import { Endpoint } from './endpoint'

// Types
import {
  Replay,
  ReplayListRequestParameters,
  ReplayPostRequestParameters,
  UploadResponse,
} from '../../types'

class Replays extends Endpoint {
  all (params: ReplayListRequestParameters): Promise<Replay[]> {
    return this.client.get('replays', params)
  }

  create (params: ReplayPostRequestParameters): Promise<UploadResponse> {
    return this.client.post('replays', params)
  }

  find (id: number): Promise<Replay> {
    return this.client.get(`replays/${id}`)
  }

  parsed (params: ReplayListRequestParameters): Promise<Replay[]> {
    return this.client.get('replays/parsed', params)
  }
}

export { Replays }
