import React from 'react'

interface JobType {
  id: number;
  title: string;
  company_name: string;
  company_logo: string;
  job_type: string;
  category: string;
  publication_date: string;
  candidate_required_location: string;
}

const Sort = ({ jobs }: { jobs: JobType[] }) => {
  
  return (
      <div className='my-8 lg:my-12 flex items-center gap-x-4'>
      <h3 className='text-lg lg:text-xl capitalize flex items-center gap-x-1'><span className=' text-primary poppins-semibold'>{jobs?.length}</span> {jobs.length === 1 ? 'jobs' : 'jobs'}</h3>
          <div className='w-full h-[2px] bg-gray-800 dark:bg-gray-100' />
    </div>
  )
}

export default Sort