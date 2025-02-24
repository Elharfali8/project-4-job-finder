import Filters from '@/components/Filters'
import PageTitle from '@/components/PageTitle'
import { SingleJobCard } from '@/components/SingleJobCard'
import Sort from '@/components/Sort'
import { fakeJobs } from '@/utils/fakeData'
import React from 'react'

const JobsPage = () => {
  return (
    <main className="px-4 lg:px-14 py-5 lg:py-8">
      <PageTitle text="jobs" />
      <Filters />
      <Sort />
      <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {fakeJobs.map((item) => {
            return <SingleJobCard key={item.id } {...item} />
          })}
      </div>
      </main>
  )
}

export default JobsPage