import { Endpoint } from '../lib/endpoints/endpoint'
import { Client } from '../lib/request'

export interface Endpoints {
  [key: string]: typeof Endpoint
}
