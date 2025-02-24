'use client'
import { useDispatch, useSelector } from 'react-redux'
import { MainInput } from './MainInput'
import { AppDispatch, RootState } from '@/store'
import MainSelectInput from './MainSelectInput'

const Filters = () => {
    const { jobCategories } = useSelector((store: RootState) => store.jobs)
    const dispatch = useDispatch<AppDispatch>()

    const companies = ['google', 'facebook', 'netflix', 'meta']

  return (
      <div className='p-4 rounded-lg bg-muted shadow-lg pb-8 lg:pb-12'>
          <h1 className='text-2xl mb-4 lg:mb-5 poppins-medium'>Filters</h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <MainInput
                  label='search'
                  name='search'
                  value=''
                  onChange={() => {}}
              />
              <MainSelectInput data={jobCategories} label='categories' />
              <MainSelectInput data={companies} label='companies' />
          </div>
    </div>
  )
}

export default Filters