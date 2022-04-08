import React from 'react'

function HomeLayout({ props, children }) {
  return (
    <>
      <div className='ml-48 mr-48'>
        <div>{children}</div>
      </div>
    </>
  )
}

export default HomeLayout