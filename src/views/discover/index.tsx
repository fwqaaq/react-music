import type { FC, ReactNode } from 'react'
import { memo } from 'react'
const Discover: FC<IProps> = () => {
  return <div>Mine</div>
}

interface IProps {
  children?: ReactNode
}

export default memo(Discover)
