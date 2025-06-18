import React from 'react'

const HomeUI = ( {content}: { content: React.ReactNode }  ) => {
  return (
    <div className='flex flex-col'>
      {content}
    </div>
  )
}

export default HomeUI