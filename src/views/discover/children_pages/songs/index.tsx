import type { FC, ReactNode } from 'react'
import { memo } from 'react'
const Songs: FC<IProps> = () => {
  return <div>Songs</div>
}

interface IProps {
  children?: ReactNode
}

export default memo(Songs)
