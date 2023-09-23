import React, { ReactNode } from 'react'

const GridLayout = ({children}:{children:ReactNode}) => {
  return (
   <div className='Library__grid-layout '>
        {children}
   </div>
  )
}

export default GridLayout