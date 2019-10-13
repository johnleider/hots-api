class Client {
  private base: string
  private options: RequestInit = {}

  constructor (base: string, options = {}) {
    this.base = base
    this.options = options
  }

  buildQuery (parameters: RequestParameters = {}) {
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

  request (url: string, method = 'GET', parameters?: RequestParameters) {
    const query = this.buildQuery(parameters)

    return fetch(
      `${this.base}/${url}${query}`,
      { method, ...this.options },
    ).then(res => res.json())
  }
}

export { Client }
