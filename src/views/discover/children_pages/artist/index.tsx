import type { FC, ReactNode } from 'react'
import { memo } from 'react'
const Artist: FC<IProps> = () => {
  return <div>Artist</div>
}

interface IProps {
  children?: ReactNode
}

export default memo(Artist)
