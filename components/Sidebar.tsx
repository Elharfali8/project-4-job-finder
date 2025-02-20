'use client'

import Image from "next/image"
import logo from '@/assets/logo.png'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/store"
import { setIsSidebarCollapsed } from "@/state/globalSlice"
import { Button } from "./ui/button"
import { ClipboardCheck, Heart, LayoutDashboard, Menu, Search, Settings } from "lucide-react"
import SidebarLink from "./SidebarLink"

const Sidebar = () => {
  const { isSidebarCollapsed } = useSelector((store: RootState) => store.global)
    const dispatch = useDispatch<AppDispatch>()
    
    const handleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    }
  
  const sidebarClassNames = `fixed flex flex-col px-3 py-6 lg:py-10  ${isSidebarCollapsed ? "w-0 lg:w-16 hidden lg:block" : "w-72 lg:w-64"} bg-muted transition-all duration-300 overflow-hidden h-full shadow-md z-40`

  return (
    <aside className={sidebarClassNames} >
      <div className="flex flex-col justify-between h-full">
        <div>
        <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4" >
        <Image src={logo} alt="logo" width={40} height={40} />
        {!isSidebarCollapsed && <h1 className="poppins-semibold text-2xl">Job Finder</h1>}
        </div>
        <Button variant='outline' size='icon' className="lg:hidden" onClick={handleSidebar}>
            <Menu />
        </Button>
      </div>
      <div className="grid gap-y-6 mt-20">
        <SidebarLink
          href="/dashboard"
          icon={LayoutDashboard}
          label="dashboard"
          isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
          href="/jobs"
          icon={Search}
          label="search jobs"
          isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
          href="/favorites"
          icon={Heart}
          label="favorite jobs"
          isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
          href="/applied"
          icon={ClipboardCheck}
          label="applied jobs"
          isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
          href="/settings"
          icon={Settings}
          label="settings"
          isCollapsed={isSidebarCollapsed}
          />
        </div>
        </div>
        {!isSidebarCollapsed && <div className="text-center">
          <p>&copy; Job Finder {new Date().getFullYear()}</p>
        </div>}
      </div>
    </aside>
  )
}

export default Sidebar