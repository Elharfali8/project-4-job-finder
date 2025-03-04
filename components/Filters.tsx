'use client'
import { useSelector } from 'react-redux'
import { MainInput } from './MainInput'
import MainSelectInput from './MainSelectInput'
import { RootState } from '@/store'

const Filters = ({
    search,
    category,
    handleSearch,
    handleCategory
  }: {
    search: string,
    category: string,
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void
  }) => {
    const { jobCategories } = useSelector((store: RootState) => store.jobs)


  return (
      <div className='p-4 rounded-lg bg-muted shadow-lg pb-8 lg:pb-12'>
          <h1 className='text-2xl mb-4 lg:mb-5 poppins-medium'>Filters</h1>
          <div className='grid md:grid-cols-2 gap-8'>
              <MainInput
                  label='search'
                  name='search'
                  value={search}
                  onChange={handleSearch}
              />
              <MainSelectInput data={jobCategories} label='Categories' value={category} onChange={handleCategory} />
          </div>
    </div>
  )
}

export default Filters