import { Endpoint } from './endpoint'

class Replays extends Endpoint {
  all (params: ReplayListRequestParameters): Promise<Replay[]> {
    return this.client.get('/replays', params)
  }

  create (params: ReplayPostRequestParameters): Promise<UploadResponse> {
    return this.client.post('/replays', params)
  }

  find (id: number): Promise<Replay> {
    return this.client.get(`/replays/${id}`)
  }

  parsed (params: ReplayListRequestParameters): Promise<Replay[]> {
    return this.client.get('/replays/parsed', params)
  }
}

export { Replays }
