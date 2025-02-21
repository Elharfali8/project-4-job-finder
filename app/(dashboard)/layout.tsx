'use client'

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { RootState } from "@/store"
import { useSelector } from "react-redux"


const layout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarCollapsed } = useSelector((store: RootState) => store.global)
  return (
      <main className="flex w-full min-h-screen">
          <Sidebar />
          <main className={`flex flex-col w-full h-full   ${isSidebarCollapsed ? 'lg:pl-16' : 'lg:pl-64'}`}>
              <Navbar />
              {children}
          </main>
    </main>
  )
}

export default layout