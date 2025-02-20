'use client'

import React from 'react'
import { Button } from './ui/button'
import {Menu} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { setIsSidebarCollapsed } from '@/state/globalSlice'
import { ThemToggle } from './ThemeToggle'

const Navbar = () => {
    const { isSidebarCollapsed } = useSelector((store: RootState) => store.global)
    const dispatch = useDispatch<AppDispatch>()
    
    const handleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    }

  return (
      <nav className={`px-4 lg:px-14 h-20 bg-muted grid ${isSidebarCollapsed}`}>
          <div className=" flex items-center justify-between">
              <div className='flex items-center'>
                  <Button variant='outline' size='icon' className='hover:border hover:border-black' onClick={handleSidebar} >
                      <Menu />
                  </Button>
              </div>
              <div className='flex items-center '>
                  <h1 className='text-xl lg:text-2xl xl:text-3xl poppins-semibold text-primary'>Dashboard</h1>
              </div>
              <div className='flex items-center'>
                  <ThemToggle />
              </div>
          </div>
    </nav>
  )
}

export default Navbar