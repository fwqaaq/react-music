let BASE_URL = ''
if (import.meta.env.DEV) {
  BASE_URL = 'http://localhost:5173/api'
} else {
  BASE_URL = 'http://123.207.32.32:9002/banner'
}
export { BASE_URL }
export const TIME_OUT = 8000
