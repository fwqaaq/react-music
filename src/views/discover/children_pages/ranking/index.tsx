import type { FC, ReactNode } from 'react'
import { memo } from 'react'
const Ranking: FC<IProps> = () => {
  return <div>Ranking</div>
}

interface IProps {
  children?: ReactNode
}

export default memo(Ranking)
