'use client'

import { useClerk } from "@clerk/nextjs";
import { LucideIcon } from "lucide-react";

interface SidebarLinkProps {
    icon: LucideIcon,
    label: string,
    isCollapsed: boolean
}

const LogoutBtn = ({isCollapsed, icon: Icon, label}: SidebarLinkProps) => {
    const { signOut } = useClerk();

    return (
        <button onClick={() => signOut()} className={`cursor-pointer  
     shadow-xl bg-sky-500 text-white rounded-lg  flex items-center rounded-lg${isCollapsed ? 'justify-center p-2' : 'justify-start p-2'} transition-colors gap-3 lg:text-lg `}>
        <Icon className="w-7 h-7" />
                <span className={`${isCollapsed ? 'hidden' : 'block'} poppins-medium capitalize `}>
                    Sign Out
                </span>
      </button>
    );
}

export default LogoutBtn