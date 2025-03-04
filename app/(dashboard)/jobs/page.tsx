'use client'

import Filters from '@/components/Filters'
import PageTitle from '@/components/PageTitle'
import { SingleJobCard } from '@/components/SingleJobCard'
import Sort from '@/components/Sort'
import { fetchJobs, filterJobs } from '@/state/jobs/jobsSlice'
import { AppDispatch, RootState } from '@/store'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const JobsPage = () => {
  const {jobs, favorites, appliedJobs, filteredJobs} = useSelector((store: RootState) => store.jobs)
  const dispatch = useDispatch<AppDispatch>()
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('all')

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value.toLowerCase())
  }


  const handleCategory = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setCategory(value.toLowerCase())
  }

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  useEffect(() => {
    if (!jobs.length) return; // ✅ Prevent filtering when jobs are empty
    dispatch(filterJobs({ query: searchQuery, category }));
}, [searchQuery, category, jobs, dispatch]); // ✅ Added "jobs" dependency



  

  return (
    <main className="px-4 lg:px-14 py-5 lg:py-8">
      <PageTitle text="jobs" />
      <Filters
        search={searchQuery}
        category={category}
        handleSearch={handleSearch}
        handleCategory={handleCategory}
      />
      <Sort jobs={filteredJobs} />
      <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredJobs?.map((item) => {
            return <SingleJobCard key={item.id } {...item} favoriteJobs={favorites} favoritePage={false} appliedJobs={appliedJobs} appliedPage={false} />
          })}
      </div>
      </main>
  )
}

export default JobsPage