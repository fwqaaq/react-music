import { TIME_OUT, BASE_URL } from './config.js'
import Fetch from './fetch.js'

const controller = new AbortController()

export const fetchx = new Fetch({
  controller,
  BASE_URL,
  signal: AbortSignal.timeout(TIME_OUT),
})
