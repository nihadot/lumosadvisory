import React from 'react'
import { images } from '../../static'
import PreviewModalSingleClick from './PreviewModalSingleClick'

function MobileMenu() {
  return (
    <div className='sm:hidden fixed left-2 top-4 h-[70px]  w-full '>
        {/* <img src={images.logo} alt="" className='w-[130px] -ms-0 h-[70%] object-contain' /> */}
        {/* <PreviewModalSingleClick */}
        {/* previewClassName={"!w-full !h-full"} */}
        {/* previewContent={<MenuBar/>} */}
        {/* > */}
        <img src={images.menu} alt="" className='!w-8 !h-8' />
    </div>
  )
}

export default MobileMenu




function MenuBar() {
  return (
    <div className='w-full '>
        <img src="" alt="" />
        <ul className='text-white'>
            <li>Home</li>
        </ul>
    </div>
  )
}