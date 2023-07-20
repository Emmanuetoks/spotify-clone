import React from 'react'
import { SpIcons } from '../../../types/SpIcons'



const SpHome = ({size=24, className}:SpIcons) => {
  const tailwindPossible = [className]

  return (
    <svg role="img" height={size} width={size} aria-hidden="true" className={className} viewBox="0 0 24 24" data-encore-id="icon"><path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path></svg>
  )
}

export default SpHome