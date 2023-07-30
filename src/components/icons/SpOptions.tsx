import React from 'react'
import { SpIcons } from '../../../types/spIcons'

const SpOptions = ({size=24, className}:SpIcons) => {
  return (
<svg role="img" height={size} width={size} aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className={className}><path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>  )
}

export default SpOptions