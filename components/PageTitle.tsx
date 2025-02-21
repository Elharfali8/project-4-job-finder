import React from 'react'


const PageTitle = ({text}:{text: string}) => {
  return (
    <div className='mb-4 lg:mb-10'>
      <h1 className=' capitalize text-gray-900 dark:text-gray-50 text-2xl lg:text-3xl poppins-semibold pb-1  '>{text}</h1>
    </div>
  )
}

export default PageTitle