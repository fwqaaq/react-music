import assert from 'assert'
import Fetch from './fetch.js'
import { describe, it } from 'node:test'

describe('fetch test', () => {
  it('should success', () => {
    const controller = new AbortController()
    const newFetch = new Fetch({
      controller,
      signal: AbortSignal.timeout(1000),
    })
    newFetch
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((data: any) => {
        assert.deepEqual(
          {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
          },
          data,
        )
      })
  })
  it('should timeout', () => {
    const controller = new AbortController()
    const newFetch = new Fetch({
      controller,
      signal: AbortSignal.timeout(100),
    })
    newFetch
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((data: any) => {
        assert.throws(data)
      })
  })
})
