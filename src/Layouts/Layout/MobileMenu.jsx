import React from 'react'
import { images } from '../../static'

function MobileMenu({setMenuOpen}) {

  const handleClick = ()=>{
    setMenuOpen(prev => !prev)
  }
  return (
    <div className='sm:hidden fixed left-2 top-4 h-[70px]  w-full '>
       
        <img onClick={handleClick} src={images.menu} alt="" className='!w-8 !h-8' />
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