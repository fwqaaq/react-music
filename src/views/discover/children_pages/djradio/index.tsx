import type { FC, ReactNode } from 'react'
import { memo } from 'react'
const Djradio: FC<IProps> = () => {
  return <div>Djradio</div>
}

interface IProps {
  children?: ReactNode
}

export default memo(Djradio)
