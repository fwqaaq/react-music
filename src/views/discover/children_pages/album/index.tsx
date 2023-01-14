import type { FC, ReactNode } from 'react'
import { memo } from 'react'
const Album: FC<IProps> = () => {
  return <div>Album</div>
}

interface IProps {
  children?: ReactNode
}

export default memo(Album)
