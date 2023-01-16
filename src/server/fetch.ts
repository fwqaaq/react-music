type IConfig = {
  cache?: RequestCache
  credentials?: RequestCredentials
  headers?: HeadersInit
  mode?: RequestMode
  redirect?: RequestRedirect
  referrer?: string
  controller?: AbortController
  signal?: AbortSignal | null
  BASE_URL?: string
}

type IRequestConfig = {
  url: string
  body?: BodyInit | null
  headers?: HeadersInit
  method?: string
}

export default class Fetch {
  #config: IConfig
  constructor(config: IConfig) {
    this.#config = {
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {},
      mode: 'cors',
      redirect: 'follow',
      BASE_URL: '',
      signal: null,
      ...config,
    } satisfies IConfig
  }

  request<T>({ url, body, method = 'GET', headers }: IRequestConfig) {
    const { BASE_URL } = this.#config
    return new Promise<T>((resolve) => {
      fetch(BASE_URL ? `${BASE_URL}${url}` : url, {
        ...this.#config,
        body,
        headers,
        method,
      })
        .then((response) => response.json())
        .then((data: T) => resolve(data))
        .catch((error: Error) => {
          if (error.name === 'AbortError') {
            // this.fetchAbort(`Abort, operation: ${error.message}`)
            // if request ends, it should be resolved, not rejected
            return
          } else if (error.name === 'TimeoutError') {
            this.fetchAbort(`Timeout, operation: ${error.message}`)
          } else {
            this.fetchAbort(
              `other Erros: name ${error.name}, message ${error.message}`,
            )
          }
        })
    })
  }

  get<T>(url: string, headers?: HeadersInit) {
    return this.request<T>({ url, headers })
  }

  post<T>(url: string, body: BodyInit | null, headers?: HeadersInit) {
    return this.request<T>({ url, body, headers, method: 'POST' })
  }

  fetchAbort(reason: string): never {
    if (!this.#config.signal?.aborted) {
      this.#config.controller?.abort()
    }
    throw Error(`operation was aborted: ${reason}`)
  }
}
