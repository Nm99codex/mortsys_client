import React from 'react'
import SidePanel from '../Assets/SidePanel'
import Tabs from '../Assets/Tabs'

function UserLayout({ props, children }) {
  return (
    <>
      <div className='flex'>
        <div className='w-1/6 bg-[#131A34] p-0 top-0'>
          <SidePanel />
        </div>
        <div className='w-full'>
          <div className='shadow-xl flex items-center px-7 pt-3  '>
            <div className='pr-4'>
              <img src="https://www.bing.com/th?id=OIP.LGI_bp2NrS2iERS8AhXVSwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" className='w-[56px] h-auto' alt="" />
            </div>
            <div>
              <div className='text-[21px] font-semibold'>
                Shenzhen Houde Academy
              </div>
              <div className="pt-2">
                <Tabs />
              </div>
            </div>
          </div>
          <div className='h-auto pt-8 bg-[#ECECEC]'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserLayout