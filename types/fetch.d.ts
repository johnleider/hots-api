type FetchHeaders = Record<string, string>

interface RequestParameters {
  [key: string]: boolean | number | string | FormData
}

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  cache?: 'no-cors' | 'cors' | 'same-origin'
  credentials?: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached'
  headers?: FetchHeaders
  redirect?: 'manual' | 'follow' | 'error'
  referrer?: 'no-referrer' | 'client'
  body?: string
}
