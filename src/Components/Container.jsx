import React from 'react'

const Container = ({children}) => {
  return (
    <div className='flex container mx-auto'>
        {children}
    </div>
  )
}

export default Container