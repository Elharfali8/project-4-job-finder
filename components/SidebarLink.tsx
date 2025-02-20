'use client'

import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


interface SidebarLinkProps {
    href: string,
    icon: LucideIcon,
    label: string,
    isCollapsed: boolean
}


const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed
}: SidebarLinkProps) => {
    const pathname = usePathname()
    const isActive = pathname === href || (pathname === '/' && href === '/dashboard')

  return (
    <Link href={href}>
            <div className={`cursor-pointer flex items-center rounded-lg ${isCollapsed ? 'justify-center p-2' : 'justify-start p-2'} transition-colors gap-3 lg:text-lg ${isActive ? 'bg-blue-100 hover:bg-blue-200 text-primary shadow-md' : 'hover:bg-blue-200 shadow'}` }>
                <Icon className="w-7 h-7" />
                <span className={`${isCollapsed ? 'hidden' : 'block'} poppins-medium capitalize `}>
                    {label}
                </span>
            </div>
        </Link>
  )
}

export default SidebarLink