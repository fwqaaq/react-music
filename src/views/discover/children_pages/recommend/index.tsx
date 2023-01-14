import type { FC, ReactNode } from 'react'
import { memo } from 'react'
const Recommend: FC<IProps> = () => {
  return <div>Recommend</div>
}

interface IProps {
  children?: ReactNode
}

export default memo(Recommend)
