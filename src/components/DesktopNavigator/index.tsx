import React from 'react'

const DesktopNavigator = () => {
  return (
    <div className='hidden sm:block fixed top-0 left-0 right-0 h-auto px-7'>
        <div className='flex justify-between items-center'>
            <div className='navigators'>
                <button>Back</button>
            </div>

            <div className='user__dashboard'>
                <div>
                    Toks
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesktopNavigator