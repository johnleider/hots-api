interface PagedReplaysResponse {
  page: number
  page_count: number
  total: number
  per_page: number
  replays: Replay[]
}

interface Replay {
  id: number
  filename: string
  size: number
  game_type: string
  game_date: string
  game_length: number
  game_map: string
  game_version: string
  region: number
  fingerprint: string
  url: string
  processed: boolean
  deleted: boolean
  players: Player[]
  teams: Team[]
  bans: string[]
}

interface ReplayListRequestParameters extends RequestParameters {
  min_id: number // Minimum replay id
  existing: boolean // Whether to include only replays that still have corresponding files on hotsapi S3 storage
  with_players: boolean // Whether to include player and ban data in response. When used reduces max returned objects to 100.
}

interface ReplayPostRequestParameters extends RequestParameters {
  file: FormData
}
