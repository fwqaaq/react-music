import type { FC, ReactNode } from 'react'
import { memo, Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'
const Discover: FC<IProps> = () => {
  return (
    <>
      <Link to='/discover/recommend'>推荐</Link>
      <Link to='/discover/songs'>歌曲</Link>
      <Link to='/discover/ranking'>排行榜</Link>
      <Link to='/discover/djradio'>主播电台</Link>
      <Link to='/discover/artist'>歌手</Link>
      <Link to='/discover/album'>新碟上架</Link>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </>
  )
}

interface IProps {
  children?: ReactNode
}

export default memo(Discover)
