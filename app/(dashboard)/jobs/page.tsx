'use client'

import Filters from '@/components/Filters'
import PageTitle from '@/components/PageTitle'
import { SingleJobCard } from '@/components/SingleJobCard'
import Sort from '@/components/Sort'
import { fetchJobs } from '@/state/jobs/jobsSlice'
import { AppDispatch, RootState } from '@/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const JobsPage = () => {
  const {jobs, favorites, appliedJobs} = useSelector((store: RootState) => store.jobs)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  

  return (
    <main className="px-4 lg:px-14 py-5 lg:py-8">
      <PageTitle text="jobs" />
      <Filters />
      <Sort />
      <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {jobs?.map((item) => {
            return <SingleJobCard key={item.id } {...item} favoriteJobs={favorites} favoritePage={false} appliedJobs={appliedJobs} appliedPage={false} />
          })}
      </div>
      </main>
  )
}

export default JobsPage