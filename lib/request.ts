// Imports
import fetch from 'node-fetch'

class Client {
  private base: string
  private options: FetchOptions

  constructor (base: string, options: FetchOptions = {}) {
    this.base = base
    this.options = options
  }

  buildQuery (parameters: RequestParameters) {
    const query = []

    for (const key in parameters) {
      query.push(`${key}=${parameters[key]}`)
    }

    return query.length ? `?${query.join('&')}` : ''
  }

  get (url: string, parameters: RequestParameters = {}) {
    return this.request(url, 'GET', parameters)
  }

  post (url: string, parameters: RequestParameters = {}) {
    return this.request(url, 'POST', parameters)
  }

  request (url: string, method = 'GET', parameters: RequestParameters) {
    return fetch(
      `${this.base}/${url}${this.buildQuery(parameters)}`,
      {
        method,
        ...this.options
      }
    ).then(res => res.json())
  }
}

export { Client }
