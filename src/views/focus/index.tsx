import type { FC, ReactNode } from 'react'
import { memo } from 'react'
const Focus: FC<IProps> = () => {
  return <div>Focus</div>
}

interface IProps {
  children?: ReactNode
}

export default memo(Focus)
