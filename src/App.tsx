import { useRoutes, Link } from 'react-router-dom'
import { Suspense } from 'react'
import routes from './router/index.js'
import { useBears, useactions } from './store/index.js'

function App() {
  const { increase } = useactions()
  return (
    <>
      <div className='nav'>
        <Link to={'/discover'}> 发现音乐</Link>
        <Link to={'/mime'}> 我的音乐</Link>
        <Link to={'/focus'}> 我的关注</Link>
        <Link to={'/download'}> 下载音乐</Link>
      </div>
      <h1>{useBears()}</h1>
      <button onClick={increase}>xxx</button>
      <Suspense fallback='xxxxx'>
        <div className='app'>{useRoutes(routes)}</div>
      </Suspense>
    </>
  )
}

export default App
