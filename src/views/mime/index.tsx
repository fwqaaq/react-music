import type { FC, ReactNode } from 'react'
import { memo } from 'react'
const Mine: FC<IProps> = () => {
  return <div>Mine</div>
}

interface IProps {
  children?: ReactNode
}

export default memo(Mine)
