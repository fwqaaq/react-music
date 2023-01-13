import { type RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@/views/discover/index.js'))
const Mine = lazy(() => import('@/views/mime/index.js'))
const Focus = lazy(() => import('@/views/focus/index.js'))
const Download = lazy(() => import('@/views/download/index.js'))
const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Navigate to='discover' />,
  },
  {
    path: '/discover',
    element: <Discover />,
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
