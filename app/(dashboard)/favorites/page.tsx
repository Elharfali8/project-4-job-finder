'use client'
import PageTitle from '@/components/PageTitle'
import { SingleJobCard } from '@/components/SingleJobCard'
import { AppDispatch, RootState } from '@/store'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const FavoritePage = () => {
    const { favorites } = useSelector((store: RootState) => store.jobs)
    

  return (
    <main className="px-4 lg:px-14 py-5 lg:py-8">
          {favorites.length > 1 && <PageTitle text="favorites jobs" /> }
          {favorites.length < 1 ? (
              <div className='mt-16 lg:mt-28 grid place-items-center'>
                  <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-1 lg:mb-3">No favorite jobs yet!</h2>
                  <Link href='/jobs' className='text-primary border-b border-b-primary lg:text-lg hover:scale-105'>
                      Browse jobs
                  </Link>
              </div>
          ): (
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                      {favorites?.map((item) => {
                  return <SingleJobCard key={item.id} {...item} favoriteJobs={favorites} favoritePage={true} />
              })}
            </div>  
          )}
          
    </main>
  )
}

export default FavoritePage