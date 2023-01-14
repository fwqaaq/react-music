import { type RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { lazy } from 'react'
import Artist from '@/views/discover/children_pages/artist/index.js'

const Discover = lazy(() => import('@/views/discover/index.js'))
const Mine = lazy(() => import('@/views/mime/index.js'))
const Focus = lazy(() => import('@/views/focus/index.js'))
const Download = lazy(() => import('@/views/download/index.js'))
const Recommend = lazy(
  () => import('@/views/discover/children_pages/recommend/index.js'),
)
const Ranking = lazy(
  () => import('@/views/discover/children_pages/ranking/index.js'),
)
const Songs = lazy(
  () => import('@/views/discover/children_pages/songs/index.js'),
)
const Djradio = lazy(
  () => import('@/views/discover/children_pages/djradio/index.js'),
)
const Album = lazy(
  () => import('@/views/discover/children_pages/album/index.js'),
)
const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Navigate to='discover' />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to={'/discover/recommend'} />,
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
      },
      {
        path: '/discover/songs',
        element: <Songs />,
      },
      {
        path: '/discover/ranking',
        element: <Ranking />,
      },
      {
        path: '/discover/djradio',
        element: <Djradio />,
      },
      {
        path: '/discover/artist',
        element: <Artist />,
      },
      {
        path: '/discover/album',
        element: <Album />,
      },
    ],
  },
  {
    path: '/mime',
    element: <Mine />,
  },
  {
    path: '/focus',
    element: <Focus></Focus>,
  },
  {
    path: '/download',
    element: <Download />,
  },
]
export default routes
