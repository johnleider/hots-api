import { Endpoint } from '../lib/endpoints/endpoint'
import { Client } from '../lib/request'

interface Endpoints {
  [key: string]: typeof Endpoint
}
