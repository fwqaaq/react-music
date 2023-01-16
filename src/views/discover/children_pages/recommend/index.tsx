import { fetchx } from '@/server/index.js'
import { FC, ReactNode, useEffect, useState } from 'react'
import { memo } from 'react'

interface IBanner {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}
const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBanner[]>([])
  useEffect(() => {
    fetchx.get('/banner').then((data: any) => setBanners(data.banners))
  }, [])
  // console.log(banners)
  return (
    <div>
      {banners.map((item, index) => (
        <img src={item.imageUrl} key={index} />
      ))}
    </div>
  )
}

interface IProps {
  children?: ReactNode
}

export default memo(Recommend)
