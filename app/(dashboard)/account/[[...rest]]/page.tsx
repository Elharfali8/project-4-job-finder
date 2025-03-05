'use client'

import PageTitle from '@/components/PageTitle'
import { UserProfile } from "@clerk/nextjs";

const AccountPage = () => {
  return (
    <main className="px-4 lg:px-14 py-5 lg:py-8">
        <div>
          <UserProfile />
          </div>
      </main>
  )
}

export default AccountPage