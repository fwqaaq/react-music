import type { FC, ReactNode } from 'react'
import { memo } from 'react'
const Download: FC<IProps> = ({ children }) => {
  return (
    <>
      <div>download</div>
    </>
  )
}

interface IProps {
  children?: ReactNode
}

export default memo(Download)
