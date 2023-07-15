import React from 'react'

const OptionsButton = ({borderColor}:{borderColor:string}) => {
    const tailwindPossibles = [borderColor]
  return (
    <hr className={`h-0 border-${borderColor} w-[1.5rem] border-t-[5px] border-dotted`}/>
  )
}

export default OptionsButton